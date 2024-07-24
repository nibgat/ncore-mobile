import {
    StyleSheet,
    ViewStyle,
    TextStyle,
    Platform
} from "react-native";
import {
    TextInputStylerParams,
    TextInputStylerResult,
    TitleProps
} from "./types";

export const stylesheet = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        width: "100%"
    },
    containerWithFlex: {
        flex: 1
    },
    content: {
        flexDirection: "column",
        flex: 1
    },
    title: {
        lineHeight: 16
    },
    input: {
        borderColor: "transparent",
        lineHeight: 16,
        padding: 0,
        margin: 0
    },
    clearButton: {
        alignSelf: "center"
    }
});

const textInputStyler = ({
    disabledStyle,
    typography,
    isFocused,
    multiline,
    disabled,
    radiuses,
    borders,
    colors,
    spaces,
    value
}: TextInputStylerParams): TextInputStylerResult => {
    let container: ViewStyle = {
        borderColor: isFocused ? colors.primary : colors.panel,
        paddingHorizontal: spaces.container,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        paddingTop: spaces.content,
        borderWidth: borders.line
    };

    let titleProps: TitleProps = {
        color: value?.length || isFocused ? "primary" : "gray50",
        style: {
            marginBottom: spaces.inline
        }
    };

    let input: TextStyle = {
        opacity: value ? 1 : 0.5,
        color: colors.body,
        ...typography.body,
        lineHeight: undefined,
        height: 18
    };

    let clear: ViewStyle = {
        marginLeft: spaces.inline
    };

    if(Platform.OS === "ios") {
        input.marginBottom = spaces.content / 1.5;
        container.paddingBottom = spaces.inline;
    } else {
        container.paddingBottom = spaces.content * 1.5;
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    if(multiline) {
        input.height = "auto";
        clear.marginTop = spaces.content * 1.5;
        clear.alignSelf = "flex-start";
    }

    return {
        titleProps,
        container,
        input,
        clear
    };
};
export default textInputStyler;
