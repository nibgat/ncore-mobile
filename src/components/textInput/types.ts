import {
    TextInputProps,
    ViewStyle,
    TextStyle
} from "react-native";

export type TextInputRefProps = {
    getIsFocused: () => boolean | undefined;
    value: (text: string) => void;
    clear: () => void;
    focus: () => void;
    blur: () => void;
};

export type TitleProps = {
    color: keyof NCore.ColorsType;
    style: TextStyle;
};

export type TextInputStylerParams = {
    radiuses: NCore.RadiusesTokensType;
    borders: NCore.BordersTokensType;
    typography: NCore.TypographyType;
    spaces: NCore.SpacesTokensType;
    disabledStyle: ViewStyle;
    colors: NCore.ColorsType;
    multiline?: boolean;
    isFocused: boolean;
    disabled?: boolean;
    value: string;
};

export type TextInputStylerResult = {
    titleProps: TitleProps;
    container: ViewStyle;
    input: TextStyle;
    clear: ViewStyle;
};

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
export default ITextInputProps;
