import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    ChipStylerParams,
    ChipStylerResult,
    TitleProps
} from "./types";
import {
    INCoreIconPropsType
} from "../../types";

export const stylesheet = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 100
    }
});

const chipStyler = ({
    spreadBehaviour,
    disabledStyle,
    titleColor,
    disabled,
    selected,
    spaces,
    colors,
    color,
    style,
    icon
}: ChipStylerParams): ChipStylerResult => {
    let container: ViewStyle = {
        ...style,
        paddingHorizontal: spaces.content * 1.5,
        paddingVertical: spaces.content / 4,
        backgroundColor: colors.layer2
    };

    let titleProps: TitleProps = {
        color: "body",
        style: {
        }
    };

    let iconProps: INCoreIconPropsType = {
        color: colors.body,
        size: 14,
        style: {
            marginRight: spaces.content
        }
    };

    let closeIconProps: INCoreIconPropsType = {
        color: colors.body,
        size: 16,
        style: {
            marginLeft: spaces.content
        }
    };

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    if(selected) {
        closeIconProps.color = colors.constrastBody;
        container.backgroundColor = colors[color];
        iconProps.color = colors.constrastBody;
        titleProps.color = "constrastBody";
    }

    if(titleColor) {
        iconProps.color = colors[titleColor];
        iconProps.color = colors[titleColor];
        titleProps.color = titleColor;
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    if(icon) {
        container.justifyContent = "center";
    }

    return {
        closeIconProps,
        titleProps,
        container,
        iconProps
    };
};
export default chipStyler;
