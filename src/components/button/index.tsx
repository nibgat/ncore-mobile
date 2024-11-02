import React, {
    useEffect,
    useRef,
    FC
} from "react";
import {
    ActivityIndicator,
    TouchableOpacity,
    TextStyle,
    Animated,
    View
} from "react-native";
import buttonStyler, {
    stylesheet
} from "./stylesheet";
import {
    IButtonProps
} from "./types";
import Text from "../text";
import {
    NCoreTheme
} from "../../core";
import {
    LoadingIcon
} from "../../assets/svg";
import {
    Easing 
} from "react-native";

const Button: FC<IButtonProps> = ({
    displayBehaviourWhileLoading = "disabled",
    spreadBehaviour = "baseline",
    icon: IconComponentProp,
    variant = "filled",
    customLoadingIcon,
    color = "primary",
    disabled = false,
    size = "medium",
    isCustomLoading,
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
    } = NCoreTheme.useContext();

    const rotateAnim = useRef(new Animated.Value(0)).current;

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

    useEffect(() => {
        if(loading && isCustomLoading) {
            rotateLoading();
        } else {
            rotateAnim.stopAnimation();
            rotateAnim.setValue(0);
        }
    }, [loading, isCustomLoading]);

    const rotateLoading = () => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                useNativeDriver: true,
                easing: Easing.linear,
                duration: 1000,
                toValue: 1
            })
        ).start();
    };

    const renderLoading = () => {
        if(!loading) {
            return null;
        }

        const loadingSize = typography[loadingProps.containerSize]?.fontSize || 16;

        if(isCustomLoading) {
            return <Animated.View
                style={[
                    {
                        transform: [{
                            rotateZ: rotateAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "360deg"]
                            })
                        }]
                    }
                ]}
            >
                {customLoadingIcon ? customLoadingIcon : <LoadingIcon
                    color={colors[titleProps.color]}
                    size={loadingSize * 1.5}
                />}
            </Animated.View>;
        }

        return <View
            style={[
                stylesheet.loadingContainer,
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
                    stylesheet.loading
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
            stylesheet.container,
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
