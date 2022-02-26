import React, {
    useEffect,
    useRef,
    FC 
} from "react";
import {
    TouchableOpacity,
    TextStyle,
    ViewStyle,
    Animated,
    View
} from "react-native";
import styles, {
    TOGGLE_SIZE
} from "./stylesheet";
import Text from "../text";
import {
    useNCoreTheme
} from "../../core/context";

type SwitchSpreadBehaviour = "baseline" | "stretch" | "free";

interface ISwitchProps {
    spreadBehaviour?: SwitchSpreadBehaviour;
    onPress?: () => void;
    isActive?: boolean;
    disabled?: boolean;
    title?: string;
};

type SwitchStylerParams = {
    spreadBehaviour?: SwitchSpreadBehaviour;
    disabledStyle: NCore.DisabledTokens;
    spaces: NCore.SpacesTokens;
    colors: NCore.Colors;
    isActive: boolean;
    disabled: boolean;
    title?: string;
};

type TitleProps = {
    color: keyof NCore.Colors;
    style: TextStyle;
};

type SwitchStylerResult = {
    switchContainer: ViewStyle;
    titleProps: TitleProps;
    indicator: ViewStyle;
    container: ViewStyle;
};

const switchStyler = ({
    spreadBehaviour,
    disabledStyle,
    disabled,
    isActive,
    colors,
    spaces,
    title
}: SwitchStylerParams): SwitchStylerResult => {
    let container: ViewStyle = {
        paddingVertical: spaces.container
    };

    let titleProps: TitleProps = {
        style: {
            marginRight: spaces.content
        },
        color: "body"
    };

    let switchContainer: ViewStyle = {
        backgroundColor: colors.gray80
    };

    let indicator: ViewStyle = {
        backgroundColor: colors.panel
    };

    if(isActive) {
        switchContainer.backgroundColor = colors.primary;
    }

    if(spreadBehaviour === "baseline") {
        container.alignSelf = spreadBehaviour;
    }

    if(spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
        titleProps.style.flex = 1;
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
        indicator = {
            backgroundColor: colors.layer3
        };
    }

    if(title) {
        container.paddingHorizontal = spaces.content;
    }

    return {
        switchContainer,
        titleProps,
        container,
        indicator
    };
};

const Switch: FC<ISwitchProps> = ({
    spreadBehaviour = "stretch",
    isActive = false,
    disabled = false,
    onPress,
    title
}) => {
    const {
        disabled: designTokensDisabled,
        colors,
        spaces
    } = useNCoreTheme();

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: isActive ? 1 : 0,
            duration: 150,
            useNativeDriver: true
        }).start();
    }, [isActive, fadeAnim]);

    const {
        switchContainer,
        titleProps,
        indicator,
        container
    } = switchStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        disabled,
        isActive,
        colors,
        spaces,
        title
    });

    const renderTitle = () => {
        if(!title) {
            return null;
        }

        return <Text
            style={[
                titleProps.style
            ]}
            color={titleProps.color}
        >
            {title}
        </Text>;
    };

    const renderSwitch = () => {
        return <View
            style={[
                styles.switchContainer,
                switchContainer
            ]}
        >
            <Animated.View
                style={[
                    styles.indicator,
                    indicator,
                    {
                        transform: [{
                            translateX: fadeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, TOGGLE_SIZE]
                            })
                        }]
                    }
                ]}
            />
        </View>;
    };

    return <TouchableOpacity
        style={[
            styles.container,
            container
        ]}
        disabled={disabled}
        onPress={disabled ? undefined : onPress}
    >
        {renderTitle()}
        {renderSwitch()}
    </TouchableOpacity>;
};
export default Switch;
