import React, {
    useImperativeHandle,
    forwardRef,
    useState,
    useRef
} from "react";
import {
    TextInput as NativeTextInput,
    TouchableOpacity,
    View
} from "react-native";
import textInputStyler, {
    stylesheet
} from "./stylesheet";
import ITextInputProps, {
    TextInputRefProps
} from "./types";
import {
    NCoreTheme
} from "../../core";
import Text from "../text";
import {
    ClearIcon
} from "../../assets/svg";
import {
    RefForwardingComponent 
} from "../../types";

const TextInput: RefForwardingComponent<TextInputRefProps, ITextInputProps> = ({
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
}, ref) => {
    const {
        disabled: designTokensDisabled,
        typography,
        radiuses,
        borders,
        spaces,
        colors
    } = NCoreTheme.useContext();

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(initialValue ? initialValue : "");

    const inputRef = useRef<NativeTextInput>(null);

    const finalTitle = isRequired ? "* " + title : title;

    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                inputRef.current?.focus();
            },
            blur: () => {
                inputRef.current?.blur();
            },
            value: (text) => {
                inputRef.current?.setNativeProps({
                    text: text
                });
            },
            getIsFocused: () => {
                return inputRef.current?.isFocused();
            },
            clear: () => {
                return inputRef.current?.clear();
            }
        };
    }, []);

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
                stylesheet.clearButton,
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
            stylesheet.container,
            container
        ]}
    >
        <View
            style={stylesheet.content}
        >
            <Text
                variant="header9"
                numberOfLines={1}
                color={titleProps.color}
                style={[
                    stylesheet.title,
                    titleProps.style
                ]}
            >
                {finalTitle}
            </Text>
            <NativeTextInput
                {...props}
                value={value}
                multiline={multiline}
                onChangeText={e => {
                    if(onChangeText) onChangeText(e);
                    setValue(e);
                }}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={inputRef}
                underlineColorAndroid="rgba(255,255,255,0)"
                editable={!disabled}
                textAlignVertical="bottom"
                placeholderTextColor={colors.hideBody}
                style={[
                    stylesheet.input,
                    input
                ]}
            />
        </View>
        {renderClearButton()}
    </TouchableOpacity>;
};
export default forwardRef(TextInput);
