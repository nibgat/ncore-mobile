import React, {
    FC
} from "react";
import {
    TouchableOpacity
} from "react-native";
import checkBoxStyler from "./stylesheet";
import ICheckBox from "./types";
import {
    NCoreTheme
} from "../../core";
import {
    CheckBoxIcon
} from "../../assets/svg";

const CheckBox: FC<ICheckBox> = ({
    checkedIcon: CheckedIcon,
    disabled,
    onChange,
    isActive,
    style
}) => {
    const {
        disabled: disabledStyle,
        radiuses,
        colors
    } = NCoreTheme.useContext();

    const {
        container,
        indicator
    } = checkBoxStyler({
        disabledStyle,
        disabled,
        isActive,
        radiuses,
        colors,
        style
    });

    const renderCheckedIcon = () => {
        if(!isActive) {
            return null;
        }

        if(CheckedIcon) {
            return <CheckedIcon
                color={indicator.color}
                size={indicator.size}
            />;
        }

        return <CheckBoxIcon
            color={indicator.color}
            size={indicator.size}
        />;
    };

    return <TouchableOpacity
        onPress={() => onChange ? onChange(isActive) : undefined}
        disabled={disabled}
        style={container}
    >
        {renderCheckedIcon()}
    </TouchableOpacity>;
};
export default CheckBox;
