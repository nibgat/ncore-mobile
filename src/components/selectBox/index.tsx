import React, {
    ReactElement,
    useEffect,
    useState,
    useRef
} from "react";
import {
    Text as NativeText,
    TouchableOpacity,
    FlatList,
    View
} from "react-native";
import selectBoxStyler, {
    stylesheet
} from "./stylesheet";
import {
    BottomSheetRef
} from "../bottomSheet/types";
import BottomSheet from "../bottomSheet";
import ISelecBoxProps from "./types";
import SearchBox from "../searchBox";
import RowItem from "../rowItem";
import Button from "../button";
import Header from "../header";
import Text from "../text";
import {
    NCoreLocale,
    NCoreTheme
} from "../../core";
import {
    ChevronDownIcon,
    CheckIcon
} from "../../assets/svg";
import Toast from "react-native-simple-toast";
import {
    produce
} from "immer";

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
    } = NCoreLocale.useContext();

    const {
        disabled: disabledStyle,
        typography,
        radiuses,
        spaces,
        colors
    } = NCoreTheme.useContext();

    const selectPageRef = useRef<BottomSheetRef>(null);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const getSelectedIndexes = () => {
        if(
            initialSelectedIndex === undefined ||
            initialSelectedIndex === null ||
            initialSelectedIndex === -1
        ) {
            return [];
        }

        if(Array.isArray(initialSelectedIndex)) {
            return initialSelectedIndex;
        }

        return [initialSelectedIndex];
    };

    const [selectedIndexes, setSelectedIndexes] = useState<number[]>(getSelectedIndexes());
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
            // TODO: This type problem will be fix.
            // @ts-ignore
            return itemLabelExtractor(data[selectedIndexes[0]]);
        }

        return `${selectedIndexes.length} ${localize("nCoreSelectBoxSelectedText")}`;
    };

    const renderCheck = (index: number) => {
        if(selectedIndexes.indexOf(index) !== -1) {
            return <CheckIcon
                color={colors.primary}
                style={checkBoxStyle}
                size={25}
            />;
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
        item: ItemT & {
            __key: string;
        },
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
            onChangeText={(text: string) => {
                search(text);
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
                    stylesheet.content
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
            <ChevronDownIcon
                color={colors.hideBody}
                size={18}
            />
        </TouchableOpacity>
        {renderBottomSheet()}
    </View>;
};
export default SelectBox;
