import {
    StyleSheet
} from "react-native";
import {
    RowItemStylerParams,
    RowItemStylerResult
} from "./types";

export const stylesheet = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    body: {
        flex: 1
    }
});

const rowItemStyler = ({
    bodyContainerStyleProps,
    disabledStyle,
    radiuses,
    disabled,
    spaces,
    colors,
    style
}: RowItemStylerParams): RowItemStylerResult => {
    let containerStyle = {
        ...stylesheet.container,
        paddingVertical: spaces.container / 1.5,
        paddingHorizontal: spaces.container,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        ...style
    };

    let bodyContainer = {
        ...stylesheet.body,
        ...bodyContainerStyleProps
    };

    if(disabled) {
        containerStyle = {
            ...containerStyle,
            ...disabledStyle
        };
    }

    return {
        bodyContainerStyle: bodyContainer,
        containerStyle
    };
};
export default rowItemStyler;
