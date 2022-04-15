import React from "react";
import {
    TouchableOpacity,
    ViewStyle
} from "react-native";
import {
    CheckBoxIcon 
} from "../../assets/svg";
import {
    useNCoreTheme 
} from "../../core/context";
import {
    INCoreIconProps,
    NCoreIcon 
} from "../../core/types";
import styles from "./stylesheet";

interface ICheckBox {
    onChange?: (isActive: boolean) => void;
    checkedIcon?: NCoreIcon;
    disabled?: boolean;
    isActive: boolean;
};

type CheckBoxStylerParams = {
    disabledStyle: NCore.DisabledTokens;
    radiuses: NCore.RadiusesTokens;
    colors: NCore.Colors;
    disabled?: boolean;
    isActive: boolean;
};

type CheckBoxStylerResult = {
    indicator: INCoreIconProps;
    container: ViewStyle;
};

const checkBoxStyler = ({
    disabledStyle,
    disabled,
    isActive,
    radiuses,
    colors
}: CheckBoxStylerParams): CheckBoxStylerResult => {
    let container = {
        ...styles.container,
        borderColor: isActive ? colors.primary : colors.seperator,
        borderRadius: radiuses.quarter
    };

    const indicator = {
        color: colors.primary,
        size: 20
    };

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    return {
        container,
        indicator
    };
};

const CheckBox = ({
    checkedIcon: CheckedIcon,
    disabled,
    onChange,
    isActive
}: ICheckBox) => {
    const {
        disabled: disabledStyle,
        radiuses,
        colors
    } = useNCoreTheme();

    const {
        container,
        indicator
    } = checkBoxStyler({
        disabledStyle,
        disabled,
        isActive,
        radiuses,
        colors
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
