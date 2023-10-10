import {
    ViewStyle 
} from "react-native";
import {
    ButtonDisplayBehaviourWhileLoading,
    INCoreIconPropsType,
    NCoreIconType 
} from "../../types";
import {
    TextStyle 
} from "react-native";
import {
    StyleProp 
} from "react-native";
import {
    ActivityIndicatorProps 
} from "react-native";

export type ButtonSpreadBehaviour = "baseline" | "stretch" | "free";
export type ButtonVariant = "filled" | "outline" | "ghost";
export type ButtonSize = "small" | "medium" | "large";

export interface IButtonProps {
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    spreadBehaviour?: ButtonSpreadBehaviour;
    iconColor?: keyof NCore.ColorsType;
    textColor?: keyof NCore.ColorsType;
    titleStyle?: StyleProp<TextStyle>;
    style?: ViewStyle | ViewStyle[];
    color?: keyof NCore.ColorsType;
    variant?: ButtonVariant;
    icon?: NCoreIconType;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    title?: string;
};

export type ButtonStylerParams = {
    displayBehaviourWhileLoading: ButtonDisplayBehaviourWhileLoading;
    spreadBehaviour: ButtonSpreadBehaviour;
    radiuses: NCore.RadiusesTokensType;
    textColor?: keyof NCore.ColorsType;
    iconColor?: keyof NCore.ColorsType;
    borders: NCore.BordersTokensType;
    color: keyof NCore.ColorsType;
    disabledStyle: ViewStyle;
    colors: NCore.ColorsType;
    variant: ButtonVariant;
    disabled: boolean;
    loading?: boolean;
    size: ButtonSize;
};

export type TitleProps = {
    variant: keyof NCore.TypographyType;
    color: keyof NCore.ColorsType;
};

export type LoadingProps = ActivityIndicatorProps & {
    containerSize: keyof NCore.TypographyType;
};

export type ButtonStylerResult = {
    iconProps: INCoreIconPropsType;
    loadingProps: LoadingProps;
    titleProps: TitleProps;
    container: ViewStyle;
};

export type ButtonStyle = {
    container: ViewStyle;
    title: {
        size: keyof NCore.TypographyType;
    };
    loading: {
        containerSize: keyof NCore.TypographyType;
    },
    icon: {
        size: number;
    };
};

export type ButtonStyleMappingType = {
    small: ButtonStyle;
    medium: ButtonStyle;
    large: ButtonStyle;
};
