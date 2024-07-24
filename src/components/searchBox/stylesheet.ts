import {
    StyleSheet
} from "react-native";
import {
    SearchBoxStylerParams,
    SearchBoxStylerResult
} from "./types";

export const stylesheet = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        borderColor: "transparent",
        flex: 1
    }
});

const searchBoxStyler = ({
    disabledStyle,
    typography,
    disabled,
    focused,
    colors,
    spaces,
    value
}: SearchBoxStylerParams): SearchBoxStylerResult => {
    let containerStyle = {
        borderBottomColor: focused || value.length ? colors.primary : colors.seperator,
        paddingHorizontal: spaces.content
    };

    let inputStyle = {
        ...stylesheet.input,
        opacity: value ? 1 : 0.5,
        color: colors.body,
        ...typography.body
    };

    let clearButtonStyle = {
    };

    if(disabled) {
        containerStyle = {
            ...containerStyle,
            ...disabledStyle
        };
    }

    return {
        clearButtonStyle,
        containerStyle,
        inputStyle
    };
};
export default searchBoxStyler;
