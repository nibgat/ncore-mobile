import {
    StyleSheet
} from "react-native";

export default StyleSheet.create({
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
        lineHeight: 14,
        padding: 0,
        margin: 0
    },
    clearButton: {
        alignSelf: "center"
    }
});
