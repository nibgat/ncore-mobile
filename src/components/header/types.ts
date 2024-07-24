import {
    ReactNode
} from "react";
import {
    ViewStyle
} from "react-native";
import {
    NCoreIconType
} from "../../types";

export type HeaderStylerParams = {
    spaces: NCore.SpacesTokensType;
    colors: NCore.ColorsType;
};

export type HeaderStylerResult = {
    titleContainerStyle: ViewStyle;
    backButtonStyle: ViewStyle;
    containerStyle: ViewStyle;
};

interface IHeaderProps {
    style?: ViewStyle | ViewStyle[];
    backButtonIcon?: NCoreIconType;
    renderRight?: ReactNode;
    backButton?: boolean;
    onBack?: () => void;
    subTitle?: string;
    title: string;
};
export default IHeaderProps;
