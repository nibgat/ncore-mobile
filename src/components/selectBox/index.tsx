import React, {
    ReactElement,
    useEffect,
    useState,
    useRef
} from "react";
import {
    Text as NativeText,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
    Platform,
    FlatList,
    View
} from "react-native";
import {
    ChevronBottom
} from "../../assets/svg";
import {
    useNCoreLocalization,
    useNCoreTheme
} from "../../core/context";
import styles from "./stylesheet";
import BottomSheet from "../bottomSheet";
import Text, {
    ITextProps 
} from "../text";
import {
    BottomSheetRef 
} from "../bottomSheet";
import Header from "../header";
import RowItem from "../rowItem";
import SvgCheck from "../../assets/svg/check";
import produce from "immer";
import Toast from "react-native-simple-toast";
import Button from "../button";
import SearchBox from "../searchBox";

interface ISelecBoxProps<T> {
    renderItem?: (item: {
        item: T;
        index: number;
        onItemPress: (key: string) => void;
        label: string;
    }) => ReactElement;
    keyExtractor?: (item: T, index?: number) => string;
    initialSelectedIndex?: number | number[];
    itemLabelExtractor: (item: T) => string;
    onSearch?: (searchText: string) => T[];
    style?: ViewStyle | ViewStyle[];
    multipleSelect?: boolean;
    searchDebounce?: number;
    searchable?: boolean;
    maxChoice?: number;
    minChoice?: number;
    disabled?: boolean;
    initialData: T[];
    title: string;
};

type SelectBoxStylerParams = {
    disabledStyle: NCore.DisabledTokens;
    style?: ViewStyle | ViewStyle[];
    radiuses: NCore.RadiusesTokens;
    typography: NCore.Typography;
    spaces: NCore.SpacesTokens;
    selectedIndexes: number[];
    multipleSelect?: boolean;
    colors: NCore.Colors;
    disabled?: boolean;
    maxChoice?: number;
    minChoice?: number;
};

type SelectBoxStylerResult = {
    containerStyle: ViewStyle | ViewStyle [];
    helpersContentContainerStyle: ViewStyle;
    bottomSheetHeaderStyle: ViewStyle;
    itemTailContainerStyle: ViewStyle;
    counterColor: keyof NCore.Colors;
    counterContainerStyle: ViewStyle;
    helpersContainerStyle: ViewStyle;
    helperButtonStyle: ViewStyle;
    itemTitleProps: ITextProps;
    touchableStyle: ViewStyle;
    checkBoxStyle: ViewStyle;
    valueStyle: TextStyle;
    itemStyle: ViewStyle;
};

const selectBoxStyler = ({
    selectedIndexes,
    multipleSelect,
    disabledStyle,
    typography,
    maxChoice,
    minChoice,
    radiuses,
    disabled,
    spaces,
    colors,
    style
}: SelectBoxStylerParams): SelectBoxStylerResult => {
    let containerStyle: ViewStyle | ViewStyle[] = {
    };

    if(Array.isArray(style)) {
        containerStyle = style;
    } else {
        containerStyle = {
            ...style
        };
    }

    let touchableStyle: ViewStyle = {
        ...styles.container,
        paddingHorizontal: spaces.container,
        paddingVertical: spaces.inline,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half
    };

    const valueStyle = {
        ...typography.body,
        height: 18,
        lineHeight: undefined
    };

    const checkBoxStyle = {
        ...styles.check
    };

    const itemTailContainerStyle = {
        ...styles.checkContainer
    };

    const itemStyle = {
        marginBottom: spaces.content
    };

    const itemTitleProps: ITextProps = {
        variant: "header7"
    };

    const counterContainerStyle = {
        ...styles.toolsLeftContainer
    };

    const helpersContainerStyle = {
        ...styles.toolsRightContainer
    };

    const helperButtonStyle = {
        ...styles.toolsButton
    };

    const helpersContentContainerStyle = {
        ...styles.toolsContainer,
        marginBottom: spaces.content
    };

    const bottomSheetHeaderStyle = {
        marginBottom: multipleSelect ? spaces.content : spaces.container * 1.5
    };

    let counterColor: keyof NCore.Colors = "body";

    if(minChoice !== undefined && selectedIndexes.length < minChoice) {
        counterColor = "accent";
    }

    if(maxChoice !== undefined && selectedIndexes.length > maxChoice) {
        counterColor = "accent";
    }

    if(disabled) {
        touchableStyle = {
            ...touchableStyle,
            ...disabledStyle
        };
    }

    if(Platform.OS === "android") {
        touchableStyle.paddingBottom = spaces.content;
    }

    return {
        helpersContentContainerStyle,
        bottomSheetHeaderStyle,
        itemTailContainerStyle,
        counterContainerStyle,
        helpersContainerStyle,
        helperButtonStyle,
        containerStyle,
        touchableStyle,
        itemTitleProps,
        checkBoxStyle,
        counterColor,
        valueStyle,
        itemStyle
    };
};

const SelectBox = <ItemT extends {}>({
    renderItem: renderItemProp,
    multipleSelect = false,
    initialSelectedIndex,
    searchDebounce = 500,
    itemLabelExtractor,
    keyExtractor,
    initialData,
    searchable,
    maxChoice,
    minChoice,
    onSearch,
    disabled,
    style,
    title
}: ISelecBoxProps<ItemT>): ReactElement => {
    const {
        localize
    } = useNCoreLocalization();

    const {
        disabled: disabledStyle,
        typography,
        radiuses,
        spaces,
        colors
    } = useNCoreTheme();

    const selectPageRef = useRef<BottomSheetRef>(null);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [selectedIndexes, setSelectedIndexes] = useState<number[]>(Array.isArray(initialSelectedIndex) ? initialSelectedIndex : []);
    const [data, setData] = useState(() => initialData?.map((item, index) => ({
        ...item,
        __key: typeof keyExtractor === "function" ? keyExtractor(item, index) : `selectBox-${index}`
    })));

    useEffect(() => {
        if(multipleSelect && !Array.isArray(initialSelectedIndex)) {
            console.error("If you want to use multiple selection, you must provide an array for initialSelectedIndex prop.");
        } else if(!multipleSelect && Array.isArray(initialSelectedIndex)) {
            console.error("If you want to use single selection, you must provide a number for initialSelectedIndex prop.");
        }
    }, [initialSelectedIndex, multipleSelect]);

    const {
        helpersContentContainerStyle,
        bottomSheetHeaderStyle,
        itemTailContainerStyle,
        counterContainerStyle,
        helpersContainerStyle,
        helperButtonStyle,
        containerStyle,
        touchableStyle,
        itemTitleProps,
        checkBoxStyle,
        counterColor,
        valueStyle,
        itemStyle
    } = selectBoxStyler({
        selectedIndexes,
        multipleSelect,
        disabledStyle,
        typography,
        maxChoice,
        minChoice,
        radiuses,
        disabled,
        spaces,
        colors,
        style
    });

    const closeSelectPage = () => {
        selectPageRef.current?.close();
    };

    const onItemPress = (key: string) => {
        const foundIndex = data.findIndex(item => item.__key === key);

        if(foundIndex === -1) {
            throw new Error(`${key} not found on the data.`);
        }

        if(!multipleSelect) {
            setSelectedIndexes(produce(selectedIndexes, draft => {
                draft.length = 0;
                draft.push(foundIndex);
            }));
            closeSelectPage();
            return;
        }

        const foundSelectedIndex = selectedIndexes.indexOf(foundIndex);
        if(foundSelectedIndex !== -1) {
            if(minChoice !== undefined && selectedIndexes.length === minChoice) {
                Toast.show(localize("nCoreSelectBoxMinSelectionWarningText", [minChoice.toString()]), Toast.SHORT);
                return;
            }

            setSelectedIndexes(produce(selectedIndexes, draft => {
                draft.splice(foundSelectedIndex, 1);
            }));
            return;
        }

        if(maxChoice !== undefined && selectedIndexes.length === maxChoice) {
            Toast.show(localize("nCoreSelectBoxMaxSelectionReachedText"), Toast.SHORT);
            return;
        }

        setSelectedIndexes(produce(selectedIndexes, draft => {
            draft.push(foundIndex);
        }));
    };

    const search = (e: string) => {
        if(onSearch) {
            if(debounceRef.current) {
                clearTimeout(debounceRef.current);
            }

            debounceRef.current = setTimeout(async () => {
                const result = await onSearch(e);
                setData(result.map((item, index) => ({
                    ...item,
                    __key: typeof keyExtractor === "function" ? keyExtractor(item, index) : `selectBox-${index}`
                })));
                setSelectedIndexes([]);
            }, searchDebounce);
            return;
        }

        if(e.length) {
            setData(data.filter((item) => itemLabelExtractor(item).indexOf(e) !== -1));
        } else {
            setData(initialData.map((item, index) => ({
                ...item,
                __key: typeof keyExtractor === "function" ? keyExtractor(item, index) : `selectBox-${index}`
            })));
        }
    };

    const renderValue = () => {
        if(selectedIndexes.length === 0) {
            return localize("nCoreSelectBoxNoSelectionText");
        }

        if(!multipleSelect) {
            return itemLabelExtractor(data[selectedIndexes[0]]);
        }

        return `${selectedIndexes.length} ${localize("nCoreSelectBoxSelectedText")}`;
    };

    const renderCheck = (index: number) => {
        if(selectedIndexes.indexOf(index) !== -1) {
            return <SvgCheck color={colors.primary} size={25} style={checkBoxStyle} />;
        }

        return null;
    };

    const itemPress = (key: string) => {
        onItemPress(key);
    };

    const renderItemTailComponent = (index: number) => {
        return <View style={itemTailContainerStyle}>
            {renderCheck(index)}
        </View>;
    };

    const renderItem = ({
        item,
        index
    }: {
        item: any,
        index: number
    }) => renderItemProp ? renderItemProp({
        item,
        index,
        onItemPress,
        label: itemLabelExtractor(item)
    }) : <RowItem
        key={item.__key}
        title={itemLabelExtractor(item)}
        TailComponent={renderItemTailComponent(index)}
        onPress={() => itemPress(item.__key)}
        titleProps={{
            ...itemTitleProps,
            color: selectedIndexes.indexOf(index) !== -1 ? "primary" : "body"
        }}
        style={itemStyle}
    />;

    const renderCounter = () => {
        return <View
            style={counterContainerStyle}
        >
            <Text
                color={counterColor}
            >
                {selectedIndexes.length} {maxChoice ? `/ ${maxChoice}` : localize("nCoreSelectBoxSelectedText")}
            </Text>
        </View>;
    };

    const renderHelpers = () => {
        if(minChoice !== undefined || maxChoice !== undefined) {
            return null;
        }

        return <View
            style={helpersContainerStyle}
        >
            <Button
                title={localize("nCoreSelectBoxSelectAll")}
                variant="ghost"
                color="body"
                onPress={() => {
                    setSelectedIndexes(data.map((_, i) => i));
                }}
                style={helperButtonStyle}
            />
            <Text> / </Text>
            <Button
                title={localize("nCoreSelectBoxClearAll")}
                variant="ghost"
                color="body"
                onPress={() => {
                    setSelectedIndexes([]);
                }}
                style={helperButtonStyle}
            />
        </View>;
    };

    const renderHelpersContent = () => {
        if(!multipleSelect) {
            return null;
        }

        return <View
            style={helpersContentContainerStyle}
        >
            {renderCounter()}
            {renderHelpers()}
        </View>;
    };

    const renderSearchBox = () => {
        if(!searchable) {
            return null;
        }

        return <SearchBox
            placeholder="Ara"
            onChangeText={e => {
                search(e);
            }}
        />;
    };

    const renderBottomSheet = () => {
        return <BottomSheet
            ref={selectPageRef}
            fullScreen={true}
            withHandle={false}
            pageContainerProps={{
                scrollable: false
            }}
        >
            <Header
                title={title}
                onBack={() => {
                    closeSelectPage();
                }}
                style={bottomSheetHeaderStyle}
            />
            {renderSearchBox()}
            {renderHelpersContent()}
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={e => e.__key}
                renderItem={renderItem}
                data={data}
            />
        </BottomSheet>;
    };

    return <View
        style={containerStyle}
    >
        <TouchableOpacity
            onPress={() => {
                if(!disabled) {
                    selectPageRef.current?.open();
                }
            }}
            disabled={disabled}
            style={touchableStyle}
        >
            <View
                style={[
                    styles.content
                ]}
            >
                <Text
                    variant="header9"
                    color={selectedIndexes.length ? "primary" : "hideBody"}
                    style={{
                        marginBottom: spaces.inline
                    }}
                >
                    {title}
                </Text>
                <NativeText
                    style={valueStyle}
                >
                    {renderValue()}
                </NativeText>
            </View>
            <ChevronBottom
                color={colors.hideBody}
            />
        </TouchableOpacity>
        {renderBottomSheet()}
    </View>;
};
export default SelectBox;
