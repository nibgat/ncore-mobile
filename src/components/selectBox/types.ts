import {
    ReactElement
} from "react";
import {
    ViewStyle,
    TextStyle
} from "react-native";
import ITextProps from "../text/types";

export type SelectBoxStylerParams = {
    disabledStyle: NCore.DisabledTokensType;
    radiuses: NCore.RadiusesTokensType;
    typography: NCore.TypographyType;
    style?: ViewStyle | ViewStyle[];
    spaces: NCore.SpacesTokensType;
    selectedIndexes: number[];
    multipleSelect?: boolean;
    colors: NCore.ColorsType;
    disabled?: boolean;
    maxChoice?: number;
    minChoice?: number;
};

export type SelectBoxStylerResult = {
    containerStyle: ViewStyle | ViewStyle [];
    helpersContentContainerStyle: ViewStyle;
    counterColor: keyof NCore.ColorsType;
    bottomSheetHeaderStyle: ViewStyle;
    itemTailContainerStyle: ViewStyle;
    counterContainerStyle: ViewStyle;
    helpersContainerStyle: ViewStyle;
    helperButtonStyle: ViewStyle;
    itemTitleProps: ITextProps;
    touchableStyle: ViewStyle;
    checkBoxStyle: ViewStyle;
    valueStyle: TextStyle;
    itemStyle: ViewStyle;
};

interface ISelecBoxProps<T> {
    renderItem?: (item: {
        item: T;
        index: number;
        onItemPress: (key: string) => void;
        label: string;
    }) => ReactElement;
    keyExtractor?: (item: T, index?: number) => string;
    initialSelectedIndex?: number | number[];
    itemLabelExtractor: (item: T) => string;
    onSearch?: (searchText: string) => T[];
    style?: ViewStyle | ViewStyle[];
    multipleSelect?: boolean;
    searchDebounce?: number;
    searchable?: boolean;
    maxChoice?: number;
    minChoice?: number;
    disabled?: boolean;
    initialData: T[];
    title: string;
};
export default ISelecBoxProps;
