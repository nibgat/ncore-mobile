import {
    ReactNode
} from "react";
import {
    ViewStyle
} from "react-native";
import ITextProps from "../text/types";

export type RowItemStylerParams = {
    disabledStyle: NCore.DisabledTokensType;
    bodyContainerStyleProps?: ViewStyle;
    radiuses: NCore.RadiusesTokensType;
    spaces: NCore.SpacesTokensType;
    colors: NCore.ColorsType;
    disabled?: boolean;
    style?: ViewStyle;
};

export type RowItemStylerResult = {
    bodyContainerStyle: ViewStyle;
    containerStyle: ViewStyle;
};

interface IRowItem {
    bodyContainerStyle?: ViewStyle;
    TailComponent?: ReactNode;
    BodyComponent?: ReactNode;
    titleProps?: ITextProps;
    onPress?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
};
export default IRowItem;
