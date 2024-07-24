import React, {
    FC
} from "react";
import {
    TouchableOpacity
} from "react-native";
import radioButtonStyler, {
    stylesheet
} from "./stylesheet";
import IRadioButtonProps from "./types";
import Text from "../text";
import {
    NCoreTheme
} from "../../core";
import {
    RadioUnCheckedIcon,
    RadioCheckedIcon
} from "../../assets/svg";

const RadioButton: FC<IRadioButtonProps> = ({
    unCheckedIcon: UnCheckedIcon,
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
    } = NCoreTheme.useContext();

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
            return <RadioCheckedIcon
                {...iconProps.checked}
            />;
        }

        return <CheckedIcon
            {...iconProps.checked}
        />;
    };

    const renderUnChecked = () => {
        if(!UnCheckedIcon) {
            return <RadioUnCheckedIcon
                {...iconProps.unChecked}
            />;
        }

        return <UnCheckedIcon
            {...iconProps.unChecked}
        />;
    };

    const onChange = () => {
        if(onChangeProp) onChangeProp(selected);
    };

    return <TouchableOpacity
        style={[
            stylesheet.container,
            style,
            container
        ]}
        disabled={disabled}
        onPress={onChange}
    >
        {selected ? renderChecked() : renderUnChecked()}
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
