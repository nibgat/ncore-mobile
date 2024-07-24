import React, {
    FC
} from "react";
import {
    TouchableOpacity
} from "react-native";
import chipStyler, {
    stylesheet
} from "./stylesheet";
import IChipProps from "./types";
import Text from "../text";
import {
    NCoreTheme
} from "../../core";
import {
    ClearIcon
} from "../../assets/svg";

const Chip: FC<IChipProps> = ({
    icon: IconComponentProp,
    color = "primary",
    selected = false,
    closable = false,
    disabled = false,
    spreadBehaviour,
    title = "Chip",
    titleColor,
    onPress,
    style
}) => {
    const {
        disabled: designTokensDisabled,
        colors,
        spaces
    } = NCoreTheme.useContext();

    const {
        closeIconProps,
        titleProps,
        container,
        iconProps
    } = chipStyler({
        disabledStyle: designTokensDisabled,
        icon: IconComponentProp,
        spreadBehaviour,
        titleColor,
        selected,
        disabled,
        spaces,
        colors,
        color,
        style
    });

    const renderTitle = () => {
        return <Text
            color={titleProps.color}
            variant="buttonSmall"
            style={[
                titleProps.style
            ]}
        >
            {title}
        </Text>;
    };

    const renderIcon = () => {
        if(closable) {
            return null;
        }

        if(!IconComponentProp) {
            return null;
        }

        return <IconComponentProp
            {...iconProps}
        />;
    };

    const renderCloseIcon = () => {
        if(IconComponentProp) {
            return null;
        }

        if(!closable) {
            return null;
        }

        return <ClearIcon
            {...closeIconProps}
        />;
    };

    return <TouchableOpacity
        style={[
            stylesheet.container,
            container,
            {
                paddingHorizontal: spaces.container,
                paddingVertical: spaces.content
            }
        ]}
        disabled={!onPress || disabled}
        onPress={!onPress || disabled ? undefined : onPress}
    >
        {renderIcon()}
        {renderTitle()}
        {renderCloseIcon()}
    </TouchableOpacity>;
};
export default Chip;
