import {
    ViewStyle,
    TextStyle
} from "react-native";
import {
    INCoreIconPropsType,
    NCoreIconType
} from "../../types";

export type ChipSpreadBehaviour = "baseline" | "stretch" | "free";

export type ChipStylerParams = {
    spreadBehaviour?: ChipSpreadBehaviour;
    titleColor?: keyof NCore.ColorsType;
    spaces: NCore.SpacesTokensType;
    color: keyof NCore.ColorsType;
    disabledStyle: ViewStyle;
    colors: NCore.ColorsType;
    icon?: NCoreIconType;
    selected: boolean;
    style?: ViewStyle;
    disabled: boolean;
};

export type TitleProps = {
    color: keyof NCore.ColorsType;
    style: TextStyle;
};

export type ChipStylerResult = {
    closeIconProps: INCoreIconPropsType;
    iconProps: INCoreIconPropsType;
    titleProps: TitleProps;
    container: ViewStyle;
};

interface IChipProps {
    spreadBehaviour?: ChipSpreadBehaviour;
    titleColor?: keyof NCore.ColorsType;
    color?: keyof NCore.ColorsType;
    icon?: NCoreIconType;
    onPress: () => void;
    selected?: boolean;
    closable?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
};
export default IChipProps;
