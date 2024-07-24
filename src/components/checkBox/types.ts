import {
    ViewStyle
} from "react-native";
import {
    INCoreIconPropsType,
    NCoreIconType
} from "../../types";

export type CheckBoxStylerParams = {
    disabledStyle: NCore.DisabledTokensType;
    radiuses: NCore.RadiusesTokensType;
    colors: NCore.ColorsType;
    disabled?: boolean;
    isActive: boolean;
    style?: ViewStyle;
};

export type CheckBoxStylerResult = {
    indicator: INCoreIconPropsType;
    container: ViewStyle;
};

interface ICheckBox {
    onChange?: (isActive: boolean) => void;
    checkedIcon?: NCoreIconType;
    disabled?: boolean;
    isActive: boolean;
    style?: ViewStyle;
};
export default ICheckBox;
