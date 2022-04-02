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
    placeholder: string;
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

type TitleProps = {
    color: keyof NCore.Colors;
    style: TextStyle;
};

type TextInputStylerResult = {
    titleProps: TitleProps;
    container: ViewStyle;
    input: TextStyle;
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

    let titleProps: TitleProps = {
        color: value?.length || isFocused ? "primary" : "gray50",
        style: {
            marginBottom: spaces.content / 2
        }
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
        titleProps.style.marginTop = spaces.content / 2;
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
        titleProps,
        container,
        input,
        clear
    };
};

const TextInput: FC<ITextInputProps> = ({
    clearEnabled = false,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    isRequired = false,
    multiline = false,
    disabled = false,
    title = "Title",
    onChangeText,
    initialValue,
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
        titleProps,
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

        return <TouchableOpacity
            onPress={() => setValue("")}
            style={[
                styles.clearButton,
                clear
            ]}
        >
            <ClearIcon
                color={colors.hideBody}
                size={24}
            />
        </TouchableOpacity>;
    };

    const onFocus = () => {
        setIsFocused(true);
        if(onFocusProp) onFocusProp();
    };

    const onBlur = () => {
        setIsFocused(false);
        if(onBlurProp) onBlurProp();
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
                color={titleProps.color}
                style={[
                    styles.title,
                    titleProps.style
                ]}
            >
                {finalTitle}
            </Text>
            <NativeTextInput
                {...props}
                value={value}
                multiline={multiline}
                onChangeText={setValue}
                onFocus={onFocus}
                onBlur={onBlur}
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
