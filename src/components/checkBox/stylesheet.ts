import {
    StyleSheet,
    Platform
} from "react-native";
import {
    CheckBoxStylerParams,
    CheckBoxStylerResult
} from "./types";

export const stylesheet = StyleSheet.create({
    container: {
        height: Platform.OS === "android" ? 28 : 24,
        width: Platform.OS === "android" ? 28 : 24,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2
    }
});

const checkBoxStyler = ({
    disabledStyle,
    disabled,
    isActive,
    radiuses,
    colors,
    style
}: CheckBoxStylerParams): CheckBoxStylerResult => {
    let container = {
        ...stylesheet.container,
        borderColor: isActive ? colors.primary : colors.seperator,
        borderRadius: radiuses.quarter,
        ...style
    };

    const indicator = {
        size: Platform.OS === "android" ? 18 : 14,
        color: colors.primary
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
export default checkBoxStyler;
