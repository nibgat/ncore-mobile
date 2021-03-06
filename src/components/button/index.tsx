import React, {
    FC
} from "react";
import {
    ActivityIndicatorProps,
    ActivityIndicator,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
    StyleProp,
    View
} from "react-native";
import styles from "./stylesheet";
import Text from "../text";
import {
    useNCoreTheme 
} from "../../core/context";
import {
    INCoreIconProps,
    NCoreIcon 
} from "../../core/types";

export type ButtonDisplayBehaviourWhileLoading = "none" | "disabled";
type ButtonSpreadBehaviour = "baseline" | "stretch" | "free";
type ButtonVariant = "filled" | "outline" | "ghost";
type ButtonSize = "small" | "medium" | "large";

interface IButtonProps {
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    spreadBehaviour?: ButtonSpreadBehaviour;
    titleStyle?: StyleProp<TextStyle>;
    style?: ViewStyle | ViewStyle[];
    iconColor?: keyof NCore.Colors;
    textColor?: keyof NCore.Colors;
    color?: keyof NCore.Colors;
    variant?: ButtonVariant;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    icon?: NCoreIcon;
    title?: string;
};

type ButtonStylerParams = {
    displayBehaviourWhileLoading: ButtonDisplayBehaviourWhileLoading;
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
    loading?: boolean;
    size: ButtonSize;
};

type TitleProps = {
    color: keyof NCore.Colors;
    variant: keyof NCore.Typography;
};

type LoadingProps = ActivityIndicatorProps & {
    containerSize: keyof NCore.Typography;
};

type ButtonStylerResult = {
    loadingProps: LoadingProps;
    iconProps: INCoreIconProps;
    titleProps: TitleProps;
    container: ViewStyle;
};

type ButtonStyle = {
    container: ViewStyle;
    title: {
        size: keyof NCore.Typography;
    };
    loading: {
        containerSize: keyof NCore.Typography;
    },
    icon: {
        size: number;
    };
};

type ButtonStyleMappingType = {
    small: ButtonStyle;
    medium: ButtonStyle;
    large: ButtonStyle;
};

const SIZE_TO_STYLE_MAPPING: ButtonStyleMappingType = {
    "small": {
        container: {
            paddingHorizontal: 20,
            paddingVertical: 8
        },
        title: {
            size: "buttonSmall"
        },
        loading: {
            containerSize: "buttonSmall"
        },
        icon: {
            size: 14
        }
    },
    "medium": {
        container: {
            paddingHorizontal: 20,
            paddingVertical: 12
        },
        title: {
            size: "buttonMedium"
        },
        loading: {
            containerSize: "buttonMedium"
        },
        icon: {
            size: 18
        }
    },
    "large": {
        container: {
            paddingHorizontal: 20,
            paddingVertical: 16
        },
        title: {
            size: "buttonLarge"
        },
        loading: {
            containerSize: "buttonLarge"
        },
        icon: {
            size: 22
        }
    }
};

const buttonStyler = ({
    displayBehaviourWhileLoading,
    spreadBehaviour,
    disabledStyle,
    iconColor,
    textColor,
    radiuses,
    disabled,
    loading,
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

    let titleColor: keyof NCore.Colors = textColor ? textColor : "body";

    let titleProps: TitleProps = {
        color: titleColor,
        variant: SIZE_TO_STYLE_MAPPING[size].title.size
    };

    if(loading) {
        if(displayBehaviourWhileLoading === "disabled") {
            container.opacity = 0.5;
        }
    }

    if(!textColor) {
        if(variant !== "filled") {
            titleColor = color;
        } else {
            titleColor = "constrastBody";
        }
        titleProps.color = titleColor;
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
        color: iconColor ? colors[iconColor] : colors[titleColor]
    };

    let loadingProps: LoadingProps = {
        containerSize: SIZE_TO_STYLE_MAPPING[size].loading.containerSize,
        color: colors[titleColor],
        size: "small"
    };

    return {
        loadingProps,
        titleProps,
        iconProps,
        container
    };
};

const Button: FC<IButtonProps> = ({
    displayBehaviourWhileLoading = "disabled",
    spreadBehaviour = "baseline",
    icon: IconComponentProp,
    variant = "filled",
    color = "primary",
    disabled = false,
    size = "medium",
    titleStyle,
    textColor,
    iconColor,
    loading,
    onPress,
    title,
    style
}) => {
    const {
        disabled: designTokensDisabled,
        typography,
        radiuses,
        borders,
        spaces,
        colors
    } = useNCoreTheme();

    const {
        loadingProps,
        titleProps,
        container,
        iconProps
    } = buttonStyler({
        disabledStyle: designTokensDisabled,
        displayBehaviourWhileLoading,
        spreadBehaviour,
        iconColor,
        textColor,
        disabled,
        radiuses,
        loading,
        borders,
        variant,
        colors,
        color,
        size
    });

    const renderLoading = () => {
        if(!loading) {
            return null;
        }

        const loadingSize = typography[loadingProps.containerSize]?.fontSize || 16;

        return <View
            style={[
                styles.loadingContainer,
                {
                    height: loadingSize,
                    width: loadingSize
                }
            ]}
        >
            <ActivityIndicator
                color={loadingProps.color}
                size={loadingProps.size}
                style={[
                    styles.loading
                ]}
            />
        </View>;
    };

    const renderIcon = () => {
        if(loading) {
            return null;
        }

        if(!IconComponentProp) {
            return null;
        }

        return <IconComponentProp
            {...iconProps}
        />;
    };

    const renderTitle = () => {
        if(!title) {
            return null;
        }

        let textStyle: TextStyle = {
        };

        if(IconComponentProp || loading) {
            textStyle.marginLeft = spaces.content;
        }

        return <Text
            variant={titleProps.variant}
            color={titleProps.color}
            style={[
                titleStyle,
                textStyle,
            ]}
        >
            {title}
        </Text>;
    };

    return <TouchableOpacity
        onPress={disabled || loading ? undefined : onPress}
        disabled={disabled || loading}
        style={[
            styles.container,
            style,
            container
        ]}
    >
        {renderLoading()}
        {renderIcon()}
        {renderTitle()}
    </TouchableOpacity>;
};
export default Button;
