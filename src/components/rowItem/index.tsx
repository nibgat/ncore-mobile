import React, {
    ReactElement 
} from "react";
import {
    TouchableOpacity,
    ViewStyle,
    View
} from "react-native";
import styles from "./stylesheet";
import Text, {
    ITextProps 
} from "../text";
import {
    useNCoreTheme 
} from "../../core/context";

interface IRowItem {
    bodyContainerStyle?: ViewStyle;
    TailComponent?: ReactElement;
    BodyComponent?: ReactElement;
    titleProps?: ITextProps;
    onPress?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
};

type RowItemStylerParams = {
    disabledStyle: NCore.DisabledTokens;
    bodyContainerStyleProps?: ViewStyle;
    radiuses: NCore.RadiusesTokens;
    spaces: NCore.SpacesTokens;
    colors: NCore.Colors;
    disabled?: boolean;
    style?: ViewStyle;
};

type RowItemStylerResult = {
    bodyContainerStyle: ViewStyle;
    containerStyle: ViewStyle;
};

const rowItemStyler = ({
    bodyContainerStyleProps,
    disabledStyle,
    radiuses,
    disabled,
    spaces,
    colors,
    style
}: RowItemStylerParams): RowItemStylerResult => {
    let containerStyle = {
        ...styles.container,
        paddingVertical: spaces.container / 1.5,
        paddingHorizontal: spaces.container,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        ...style
    };

    let bodyContainer = {
        ...styles.body,
        ...bodyContainerStyleProps
    };

    if(disabled) {
        containerStyle = {
            ...containerStyle,
            ...disabledStyle
        };
    }

    return {
        bodyContainerStyle: bodyContainer,
        containerStyle
    };
};

const RowItem = ({
    bodyContainerStyle: bodyContainerStyleProps,
    TailComponent,
    BodyComponent,
    titleProps,
    disabled,
    onPress,
    style,
    title
}: IRowItem) => {
    const {
        disabled: disabledStyle,
        radiuses,
        spaces,
        colors
    } = useNCoreTheme();

    const {
        bodyContainerStyle,
        containerStyle
    } = rowItemStyler({
        bodyContainerStyleProps,
        disabledStyle,
        disabled,
        radiuses,
        colors,
        spaces,
        style
    });

    const renderBody = () => {
        if(BodyComponent) {
            return BodyComponent;
        }

        return <Text
            {...titleProps}
        >
            {title}
        </Text>;
    };

    return <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={containerStyle}
    >
        <View
            style={bodyContainerStyle}
        >
            {renderBody()}
        </View>
        {TailComponent ? TailComponent : null}
    </TouchableOpacity>;
};
export default RowItem;
