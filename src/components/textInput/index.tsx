import React, {
    useEffect,
    useState,
    useRef,
    FC
} from "react";
import {
    TextInput as NativeTextInput,
    TouchableOpacity,
    TextInputProps,
    ViewStyle,
    TextStyle,
    Platform,
    View
} from "react-native";
import styles from "./stylesheet";
import Text from "../text";
import {
    useNCoreTheme 
} from "../../core/context";
import {
    ClearIcon
} from "../../assets/svg";

interface ITextInputProps extends Omit<TextInputProps, "value" | "onChangeText" | "onFocus" | "onBlur" | "multiline"> {
    onChangeText?: (value: string) => void;
    clearEnabled?: boolean;
    initialValue?: string;
    isRequired?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    multiline?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
};

type TextInputStylerParams = {
    radiuses: NCore.RadiusesTokens;
    borders: NCore.BordersTokens;
    typography: NCore.Typography;
    spaces: NCore.SpacesTokens;
    disabledStyle: ViewStyle;
    colors: NCore.Colors;
    multiline?: boolean;
    isFocused: boolean;
    disabled?: boolean;
    value: string;
};

type TextInputStylerResult = {
    container: ViewStyle;
    title: TextStyle;
    input: TextStyle;
    clear: ViewStyle;
};

type ClearButtonParams = {
    colors: NCore.Colors;
    onPress: () => void;
    clear: ViewStyle;
};

const textInputStyler = ({
    disabledStyle,
    typography,
    isFocused,
    multiline,
    disabled,
    radiuses,
    borders,
    colors,
    spaces,
    value
}: TextInputStylerParams): TextInputStylerResult => {
    let container: ViewStyle = {
        borderColor: isFocused ? colors.primary : colors.panel,
        paddingHorizontal: spaces.content * 1.75,
        paddingVertical: spaces.content,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        borderWidth: borders.line
    };

    let title: TextStyle = {
        color: value?.length || isFocused ? colors.primary : colors.gray50,
        marginBottom: spaces.content / 2
    };

    let input: TextStyle = {
        opacity: value ? 1 : 0.5,
        color: colors.body,
        ...typography.body,
        height: 18
    };

    let clear: ViewStyle = {
        marginLeft: spaces.inline
    };

    if(Platform.OS === "ios") {
        title.marginTop = spaces.content / 2;
        input.height = 24;
        input.marginBottom = spaces.content / 1.5;
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    if(multiline) {
        input.height = "auto";
        clear.marginTop = spaces.content * 1.5;
        clear.alignSelf = "flex-start";
    }

    return {
        container,
        title,
        input,
        clear
    };
};

const ClearButton = ({
    onPress,
    colors,
    clear
}: ClearButtonParams) => {
    return <TouchableOpacity
        onPress={onPress}
        style={[
            styles.clearButton,
            clear
        ]}
    >
        <ClearIcon
            color={colors.primary}
            size={24}
        />
    </TouchableOpacity>;
};

const TextInput: FC<ITextInputProps> = ({
    clearEnabled = false,
    isRequired = false,
    multiline = false,
    disabled = false,
    title = "Title",
    onChangeText,
    initialValue,
    onFocus,
    onBlur,
    style,
    ...props
}) => {
    const {
        disabled: designTokensDisabled,
        typography,
        radiuses,
        borders,
        spaces,
        colors
    } = useNCoreTheme();

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(initialValue ? initialValue : "");

    const inputRef = useRef<NativeTextInput>(null);

    useEffect(() => {
        if(onChangeText) onChangeText(value);
    }, [value, onChangeText]);

    const finalTitle = isRequired ? "* " + title : title;

    const {
        title: titleStyle,
        container,
        input,
        clear
    } = textInputStyler({
        disabledStyle: designTokensDisabled,
        typography,
        isFocused,
        multiline,
        disabled,
        radiuses,
        borders,
        colors,
        spaces,
        value
    });

    const renderClearButton = () => {
        if(disabled) {
            return null;
        }
    
        if(!clearEnabled) {
            return null;
        }
    
        if(value?.length === 0) {
            return null;
        }
    
        return <ClearButton
            onPress={() => setValue("")}
            colors={colors}
            clear={clear}
        />;
    };

    return <TouchableOpacity
        onPress={() => inputRef.current?.focus()}
        disabled={disabled}
        activeOpacity={1}
        style={[
            style,
            styles.container,
            container
        ]}
    >
        <View
            style={styles.content}
        >
            <Text
                variant="header9"
                numberOfLines={1}
                style={[
                    styles.title,
                    titleStyle
                ]}
            >
                {finalTitle}
            </Text>
            <NativeTextInput
                {...props}
                value={value}
                multiline={multiline}
                onChangeText={e => setValue(e)}
                onFocus={() => {
                    setIsFocused(true);
                    if(onFocus) onFocus();
                }}
                onBlur={() => {
                    setIsFocused(false);
                    if(onBlur) onBlur();
                }}
                ref={inputRef}
                underlineColorAndroid="rgba(255,255,255,0)"
                editable={!disabled}
                textAlignVertical="bottom"
                placeholderTextColor={colors.hideBody}
                style={[
                    styles.input,
                    input
                ]}
            />
        </View>
        {renderClearButton()}
    </TouchableOpacity>;
};
export default TextInput;