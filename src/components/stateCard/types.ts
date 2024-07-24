import {
    ReactNode
} from "react";
import {
    TextStyle,
    ViewStyle
} from "react-native";
import {
    NCoreIconType
} from "../../types";

export type StateCardStylerParams = {
    spaces: NCore.SpacesTokensType;
};

export type StateCardStylerResult = {
    iconContainerStyle: ViewStyle;
    contentStyle: TextStyle;
    titleStyle: TextStyle;
};

interface IStateCardProps {
    content?: string | ReactNode;
    icon?: NCoreIconType;
    title: string;
};
export default IStateCardProps;
