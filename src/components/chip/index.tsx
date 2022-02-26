import React, {
    FC 
} from "react";
import {
    TouchableOpacity,
    TextStyle,
    ViewStyle
} from "react-native";
import styles from "./stylesheet";
import {
    INCoreIconProps,
    NCoreIcon
} from "../../core/types";
import {
    useNCoreTheme 
} from "../../core/context";
import Text from "../text";
import {
    ClearIcon 
} from "../../assets/svg";

interface IChipProps {
    titleColor?: keyof NCore.Colors;
    color?: keyof NCore.Colors;
    onPress: () => void;
    selected?: boolean;
    closable?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    icon?: NCoreIcon;
    title?: string;
};

type ChipStylerParams = {
    titleColor?: keyof NCore.Colors;
    spaces: NCore.SpacesTokens;
    color: keyof NCore.Colors;
    disabledStyle: ViewStyle;
    colors: NCore.Colors;
    selected: boolean;
    style?: ViewStyle;
    disabled: boolean;
};

type TitleProps = {
    color: keyof NCore.Colors;
    style: TextStyle;
};

type ChipStylerResult = {
    closeIconProps: INCoreIconProps;
    iconProps: INCoreIconProps;
    titleProps: TitleProps;
    container: ViewStyle;
};

const chipStyler = ({
    disabledStyle,
    titleColor,
    disabled,
    selected,
    spaces,
    colors,
    color,
    style
}: ChipStylerParams): ChipStylerResult => {
    let container: ViewStyle = {
        ...style,
        paddingHorizontal: spaces.content * 1.5,
        paddingVertical: spaces.content / 4,
        backgroundColor: colors.layer2
    };

    let titleProps: TitleProps = {
        color: "body",
        style: {
        }
    };

    let iconProps: INCoreIconProps = {
        color: colors.body,
        size: 14
    };

    let closeIconProps: INCoreIconProps = {
        color: colors.body,
        size: 16
    };

    if(selected) {
        closeIconProps.color = colors.constrastBody;
        container.backgroundColor = colors[color];
        iconProps.color = colors.constrastBody;
        titleProps.color = "constrastBody";
    }

    if(titleColor) {
        iconProps.color = colors[titleColor];
        iconProps.color = colors[titleColor];
        titleProps.color = titleColor;
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    return {
        closeIconProps,
        titleProps,
        container,
        iconProps
    };
};

const Chip: FC<IChipProps> = ({
    title = "Chip",
    icon: IconComponentProp,
    color = "primary",
    selected = false,
    closable = false,
    disabled = false,
    titleColor,
    onPress,
    style
}) => {
    const {
        disabled: designTokensDisabled,
        colors,
        spaces
    } = useNCoreTheme();

    const {
        closeIconProps,
        titleProps,
        container,
        iconProps
    } = chipStyler({
        disabledStyle: designTokensDisabled,
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
            variant="button"
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
            styles.container,
            container
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
