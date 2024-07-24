import {
    ViewStyle
} from "react-native";
import {
    INCoreIconPropsType,
    NCoreIconType
} from "../../types";

export type RadioButtonSpreadBehaviour = "baseline" | "stretch" | "free";

export type RadioButtonStylerParams = {
    spreadBehaviour: RadioButtonSpreadBehaviour;
    disabledStyle: NCore.DisabledTokensType;
    colors: NCore.ColorsType;
    disabled?: boolean;
};

export type IconProps = {
    unChecked: INCoreIconPropsType;
    checked: INCoreIconPropsType;
};

export type RadioButtonStylerResult = {
    iconProps: IconProps;
    container: ViewStyle;
};

interface IRadioButtonProps {
    spreadBehaviour?: RadioButtonSpreadBehaviour;
    onChange?: (selected: boolean) => void;
    titleType?: keyof NCore.TypographyType;
    unCheckedIcon?: NCoreIconType;
    checkedIcon?: NCoreIconType;
    disabled?: boolean;
    selected?: boolean;
    style?: ViewStyle;
    title: string;
};
export default IRadioButtonProps;
