import {
    ViewStyle
} from "react-native";
import {
    NCoreIconType
} from "../../types";

export type SearchBoxRefProps = {
    getIsFocused: () => boolean | undefined;
    value: (text: string) => void;
    clear: () => void;
    focus: () => void;
    blur: () => void;
};

export type SearchBoxStylerParams = {
    disabledStyle: NCore.DisabledTokensType;
    typography: NCore.TypographyType;
    spaces: NCore.SpacesTokensType;
    colors: NCore.ColorsType;
    disabled?: boolean;
    focused: boolean;
    value: string;
};

export type SearchBoxStylerResult = {
    clearButtonStyle: ViewStyle;
    containerStyle: ViewStyle;
    inputStyle: ViewStyle;
};

interface ISearchBoxProps {
    onChangeText?: (text: string) => void;
    placeholder?: string;
    icon?: NCoreIconType;
    cleanable?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
};
export default ISearchBoxProps;
