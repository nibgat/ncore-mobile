import React, {
    useEffect,
    useState
} from "react";
import {
    TouchableOpacity,
    ViewStyle,
    TextInput,
    View
} from "react-native";
import {
    NCoreIcon 
} from "../../core/types";
import {
    ClearIcon 
} from "../../assets/svg";
import {
    useNCoreLocalization,
    useNCoreTheme 
} from "../../core/context";
import styles from "./stylesheet";

interface ISearchBoxProps {
    onChangeText?: (text: string) => void;
    icon?: NCoreIcon;
    placeholder?: string;
    cleanable?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
};

type SearchBoxStylerParams = {
    disabledStyle: NCore.DisabledTokens;
    typography: NCore.Typography;
    colors: NCore.Colors;
    disabled?: boolean;
    value: string;
};

type SearchBoxStylerResult = {
    clearButtonStyle: ViewStyle;
    inputStyle: ViewStyle;
};

const searchBoxStyler = ({
    disabledStyle,
    typography,
    disabled,
    colors,
    value
}: SearchBoxStylerParams): SearchBoxStylerResult => {
    let inputStyle = {
        ...styles.input,
        opacity: value ? 1 : 0.5,
        color: colors.body,
        ...typography.body
    };

    let clearButtonStyle = {

    };

    if(disabled) {
        inputStyle = {
            ...inputStyle,
            ...disabledStyle
        };
    }

    return {
        clearButtonStyle,
        inputStyle
    };
};

const SearchBox = ({
    onChangeText,
    placeholder,
    cleanable,
    style,
    icon
}: ISearchBoxProps) => {
    const {
        disabled: disabledStyle,
        typography,
        colors,
        spaces
    } = useNCoreTheme();

    const {
        localize
    } = useNCoreLocalization();

    const [value, setValue] = useState("");
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        if(onChangeText) {
            onChangeText(value);
        }
    }, [value, onChangeText]);

    const {
        clearButtonStyle,
        inputStyle
    } = searchBoxStyler({
        disabledStyle,
        typography,
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
            styles.container,
            {
                borderBottomColor: focused || value.length ? colors.primary : colors.seperator,
                paddingHorizontal: spaces.content
            },
            style
        ]}
    >
        {renderIcon()}
        <TextInput
            onChangeText={(e) => setValue(e)}
            placeholder={placeholder ? placeholder : localize("coreSearchBoxValidationEnterContent")}
            placeholderTextColor={colors.hideBody}
            value={value}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            underlineColorAndroid="rgba(255,255,255,0)"
            style={inputStyle}
        />
        {renderCleanButton()}
    </View>;
};
export default SearchBox;
