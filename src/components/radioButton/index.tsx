import React, {
    FC
} from "react";
import {
    TouchableOpacity,
    ViewStyle
} from "react-native";
import styles from "./stylesheet";
import {
    useNCoreTheme
} from "../../core/context";
import Text from "../text";
import {
    INCoreIconProps,
    NCoreIcon 
} from "../../core/types";
import {
    UncheckedIcon as SvgUncheckedIcon,
    CheckedIcon as SvgCheckedIcon
} from "../../assets/svg";

type RadioButtonSpreadBehaviour = "baseline" | "stretch" | "free";

interface IRadioButtonProps {
    spreadBehaviour?: RadioButtonSpreadBehaviour;
    onChange?: (selected: boolean) => void;
    titleType?: keyof NCore.Typography;
    uncheckedIcon?: NCoreIcon;
    checkedIcon?: NCoreIcon;
    disabled?: boolean;
    selected?: boolean;
    style?: ViewStyle;
    title: string;
};

type RadioButtonStylerParams = {
    spreadBehaviour: RadioButtonSpreadBehaviour;
    disabledStyle: NCore.DisabledTokens;
    colors: NCore.Colors;
    disabled?: boolean;
};

type IconProps = {
    unchecked: INCoreIconProps;
    checked: INCoreIconProps;
};

type RadioButtonStylerResult = {
    iconProps: IconProps;
    container: ViewStyle;
};

const radioButtonStyler = ({
    spreadBehaviour,
    disabledStyle,
    disabled,
    colors
}: RadioButtonStylerParams): RadioButtonStylerResult => {
    const iconProps: IconProps = {
        checked: {
            color: colors.primary,
            size: 24
        },
        unchecked: {
            color: colors.hideBody,
            size: 24
        }
    };

    let container: ViewStyle = {
    };

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    return {
        container,
        iconProps
    };
};

const RadioButton: FC<IRadioButtonProps> = ({
    uncheckedIcon: UncheckedIcon,
    spreadBehaviour = "baseline",
    checkedIcon: CheckedIcon,
    onChange: onChangeProp,
    titleType = "body",
    disabled = false,
    selected = false,
    title,
    style
}) => {
    const {
        disabled: designTokensDisabled,
        spaces,
        colors
    } = useNCoreTheme();

    const {
        container,
        iconProps
    } = radioButtonStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        disabled,
        colors
    });

    const renderChecked = () => {
        if(!CheckedIcon) {
            return <SvgCheckedIcon
                {...iconProps.checked}
            />;
        }

        return <CheckedIcon
            {...iconProps.checked}
        />;
    };

    const renderUnchecked = () => {
        if(!UncheckedIcon) {
            return <SvgUncheckedIcon
                {...iconProps.unchecked}
            />;
        }

        return <UncheckedIcon
            {...iconProps.unchecked}
        />;
    };

    const onChange = () => {
        if(onChangeProp) onChangeProp(selected);
    };

    return <TouchableOpacity
        style={[
            styles.container,
            style,
            container
        ]}
        disabled={disabled}
        onPress={onChange}
    >
        {selected ? renderChecked() : renderUnchecked()}
        {
            title && <Text
                color={selected ? "primary" : "body"}
                variant={titleType}
                style={{
                    marginLeft: spaces.content
                }}
            >
                {title}
            </Text>
        }
    </TouchableOpacity>;
};
export default RadioButton;
