import {
    ViewStyle,
    TextStyle
} from "react-native";

export type SwitchSpreadBehaviour = "baseline" | "stretch" | "free";

export type SwitchStylerParams = {
    spreadBehaviour?: SwitchSpreadBehaviour;
    disabledStyle: NCore.DisabledTokensType;
    spaces: NCore.SpacesTokensType;
    colors: NCore.ColorsType;
    isActive: boolean;
    disabled: boolean;
    title?: string;
};

export type TitleProps = {
    color: keyof NCore.ColorsType;
    style: TextStyle;
};

export type SwitchStylerResult = {
    switchContainer: ViewStyle;
    titleProps: TitleProps;
    indicator: ViewStyle;
    container: ViewStyle;
};

interface ISwitchProps {
    spreadBehaviour?: SwitchSpreadBehaviour;
    onPress?: () => void;
    isActive?: boolean;
    disabled?: boolean;
    title?: string;
};
export default ISwitchProps;
