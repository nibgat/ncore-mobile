import React, {
    FC
} from "react";
import {
    TouchableOpacityProps,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
    StyleProp
} from "react-native";
import styles from "./stylesheet";
import Text from "../text";
import {
    useNCoreTheme 
} from "ncore-mobile";
import {
    INCoreIconProps,
    NCoreIcon 
} from "src/core/types";

type ButtonSpreadBehaviour = "baseline" | "stretch" | "free";
type ButtonVariant = "filled" | "outline" | "ghost";
type ButtonSize = "small" | "medium" | "large";

interface IButtonProps extends TouchableOpacityProps {
    spreadBehaviour?: ButtonSpreadBehaviour;
    titleStyle?: StyleProp<TextStyle>;
    iconColor?: keyof NCore.Colors;
    textColor?: keyof NCore.Colors;
    color?: keyof NCore.Colors;
    variant?: ButtonVariant;
    onPress: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    size?: ButtonSize;
    icon?: NCoreIcon;
    title: string;
};

type ButtonStylerParams = {
    spreadBehaviour: ButtonSpreadBehaviour;
    radiuses: NCore.RadiusesTokens;
    textColor?: keyof NCore.Colors;
    iconColor?: keyof NCore.Colors;
    borders: NCore.BordersTokens;
    color: keyof NCore.Colors;
    disabledStyle: ViewStyle;
    variant: ButtonVariant;
    colors: NCore.Colors;
    disabled: boolean;
    size: ButtonSize;
};

type ButtonStylerResult = {
    iconProps: INCoreIconProps,
    container: ViewStyle;
    title: TextStyle;
};

const SIZE_TO_STYLE_MAPPING = {
    "small": {
        container: {
            paddingHorizontal: 20,
            paddingVertical: 4
        },
        title: {
            fontSize: 12
        },
        icon: {
            size: 14
        }
    },
    "medium": {
        container: {
            paddingHorizontal: 24,
            paddingVertical: 8
        },
        title: {
            fontSize: 16
        },
        icon: {
            size: 18
        }
    },
    "large": {
        container: {
            paddingHorizontal: 28,
            paddingVertical: 12
        },
        title: {
            fontSize: 20
        },
        icon: {
            size: 22
        }
    }
};

const buttonStyler = ({
    spreadBehaviour,
    disabledStyle,
    iconColor,
    textColor,
    radiuses,
    disabled,
    borders,
    variant,
    colors,
    color,
    size
}: ButtonStylerParams): ButtonStylerResult => {
    let container: ViewStyle = {
        backgroundColor: variant === "filled" ? colors[color] : "transparent",
        borderColor: variant !== "ghost" ? colors[color] : "transparent",
        ...SIZE_TO_STYLE_MAPPING[size].container,
        borderWidth: borders.indicator,
        borderRadius: radiuses.half
    };

    let titleColor: string = textColor ? colors[textColor] : "";

    let title: StyleProp<TextStyle> = {
        color: titleColor,
        ...SIZE_TO_STYLE_MAPPING[size].title
    };

    if(!textColor) {
        if(variant !== "filled") {
            titleColor = colors[color];
        } else {
            titleColor = colors.constrastBody;
        }
        title.color = titleColor;
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    let iconProps: INCoreIconProps = {
        size: SIZE_TO_STYLE_MAPPING[size].icon.size,
        color: iconColor ? colors[iconColor] : titleColor
    };

    return {
        iconProps,
        container,
        title
    };
};

const Button: FC<IButtonProps> = ({
    spreadBehaviour = "baseline",
    variant = "filled",
    color = "primary",
    disabled = false,
    size = "medium",
    titleStyle: titleStyleParam,
    icon: Icon,
    textColor,
    iconColor,
    onPress,
    title,
    style,
    ...props
}) => {
    const {
        disabled: designTokensDisabled,
        radiuses,
        borders,
        spaces,
        colors
    } = useNCoreTheme();

    const {
        container,
        title: titleStyle,
        iconProps
    } = buttonStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        iconColor,
        textColor,
        disabled,
        radiuses,
        borders,
        variant,
        colors,
        color,
        size
    });

    return <TouchableOpacity
        onPress={disabled ? undefined : onPress}
        disabled={disabled}
        style={[
            styles.container,
            container,
            style
        ]}
        {...props}
    >
        {
            Icon ?
                <Icon
                    {...iconProps}
                />
                :
                null
        }
        {
            title ?
                <Text
                    variant="button"
                    style={[
                        titleStyle,
                        titleStyleParam ? titleStyleParam : null,
                        Icon ? {
                            marginLeft: spaces.content
                        } : null
                    ]}
                >
                    {title}
                </Text>
                :
                null
        }
    </TouchableOpacity>;
};
export default Button;