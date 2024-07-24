import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    RadioButtonStylerParams,
    RadioButtonStylerResult,
    IconProps
} from "./types";

export const stylesheet = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    }
});

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
        unChecked: {
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
export default radioButtonStyler;
