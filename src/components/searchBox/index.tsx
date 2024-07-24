import React, {
    useImperativeHandle,
    forwardRef,
    useEffect,
    useState,
    useRef
} from "react";
import {
    TouchableOpacity,
    TextInput,
    View
} from "react-native";
import searchBoxStyler, {
    stylesheet
} from "./stylesheet";
import ISearchBoxProps, {
    SearchBoxRefProps
} from "./types";
import {
    NCoreTheme
} from "../../core";
import {
    ClearIcon
} from "../../assets/svg";
import {
    RefForwardingComponent
} from "../../types";

const SearchBox: RefForwardingComponent<SearchBoxRefProps, ISearchBoxProps> = ({
    onChangeText,
    placeholder,
    cleanable,
    disabled,
    style,
    icon
}, ref) => {
    const {
        disabled: disabledStyle,
        typography,
        colors,
        spaces
    } = NCoreTheme.useContext();

    const [value, setValue] = useState("");
    const [focused, setFocused] = useState(false);

    const inputRef = useRef<TextInput>(null);

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

    useEffect(() => {
        if(onChangeText) {
            onChangeText(value);
        }
    }, [value, onChangeText]);

    const {
        clearButtonStyle,
        containerStyle,
        inputStyle
    } = searchBoxStyler({
        disabledStyle,
        typography,
        disabled,
        focused,
        spaces,
        colors,
        value
    });

    const renderCleanButton = () => {
        if(!value.length) {
            return null;
        }

        if(!cleanable) {
            return null;
        }

        return <TouchableOpacity
            onPress={() => setValue("")}
            style={clearButtonStyle}
        >
            <ClearIcon
                color={colors.hideBody}
                size={24}
            />
        </TouchableOpacity>;
    };

    const renderIcon = () => {
        if(!icon) {
            return null;
        }

        return icon;
    };

    return <View
        style={[
            stylesheet.container,
            containerStyle,
            style
        ]}
    >
        {renderIcon()}
        <TextInput
            underlineColorAndroid="rgba(255,255,255,0)"
            placeholderTextColor={colors.hideBody}
            onChangeText={(e) => setValue(e)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            editable={!disabled}
            style={inputStyle}
            ref={inputRef}
            value={value}
        />
        {renderCleanButton()}
    </View>;
};
export default forwardRef(SearchBox);
