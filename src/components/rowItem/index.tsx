import React, {
    FC
} from "react";
import {
    TouchableOpacity,
    View
} from "react-native";
import rowItemStyler from "./stylesheet";
import IRowItem from "./types";
import Text from "../text";
import {
    NCoreTheme
} from "../../core";

const RowItem: FC<IRowItem> = ({
    bodyContainerStyle: bodyContainerStyleProps,
    TailComponent,
    BodyComponent,
    titleProps,
    disabled,
    onPress,
    style,
    title
}) => {
    const {
        disabled: disabledStyle,
        radiuses,
        spaces,
        colors
    } = NCoreTheme.useContext();

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
