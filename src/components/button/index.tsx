import React, {
    ReactNode,
    FC
} from "react";
import {
    TouchableOpacityProps,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
    StyleProp
} from "react-native";
import Text from "../text";
import {
    useNCoreTheme 
} from "ncore-mobile";

type ButtonSpreadBehaviour = "baseline" | "stretch" | "free";
type ButtonVariant = "filled" | "outline" | "ghost";
type ButtonSize = "small" | "medium" | "large";

interface IButtonProps extends TouchableOpacityProps {
    spreadBehaviour?: ButtonSpreadBehaviour;
    titleStyle?: StyleProp<TextStyle>;
    textColor?: keyof NCore.Colors;
    color?: keyof NCore.Colors;
    variant?: ButtonVariant;
    onPress: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    size?: ButtonSize;
    icon?: ReactNode;
    title: string;
};

type ButtonStylerParams = {
    spreadBehaviour: ButtonSpreadBehaviour;
    radiuses: NCore.RadiusesTokens;
    textColor?: keyof NCore.Colors;
    borders: NCore.BordersTokens;
    color: keyof NCore.Colors;
    disabledStyle: ViewStyle;
    variant: ButtonVariant;
    colors: NCore.Colors;
    disabled: boolean;
    size: ButtonSize;
};

type ButtonStylerResult = {
    container: ViewStyle,
    title: StyleProp<TextStyle>
};

const SIZE_TO_STYLE_MAPPING = {
    "small": {
        container: {
            paddingHorizontal: 20,
            paddingVertical: 4
        },
        title: {
            fontSize: 12
        }
    },
    "medium": {
        container: {
            paddingHorizontal: 24,
            paddingVertical: 8
        },
        title: {
            fontSize: 16
        }
    },
    "large": {
        container: {
            paddingHorizontal: 28,
            paddingVertical: 12
        },
        title: {
            fontSize: 20
        }
    }
};

const buttonStyler = ({
    spreadBehaviour,
    disabledStyle,
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

    let title: StyleProp<TextStyle> = {
        color: textColor,
        ...SIZE_TO_STYLE_MAPPING[size].title
    };

    if(!textColor) {
        if(variant !== "filled") {
            title.color = colors[color];
        } else {
            title.color = colors.constrastBody;
        }
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

    return {
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
    textColor,
    onPress,
    title,
    style,
    icon,
    ...props
}) => {
    const {
        disabled: designTokensDisabled,
        radiuses,
        borders,
        colors
    } = useNCoreTheme();

    const {
        container,
        title: titleStyle
    } = buttonStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
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
            container,
            style
        ]}
        {...props}
    >
        {icon ? icon : null}
        {
            title ?
                <Text
                    variant="button"
                    style={[
                        titleStyle,
                        titleStyleParam ? titleStyleParam : null
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