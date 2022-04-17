import {
    StyleSheet
} from "react-native";
export const TOGGLE_SIZE = 26;

export default StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    switchContainer: {
        borderRadius: (TOGGLE_SIZE + 8) / 2,
        width: (TOGGLE_SIZE * 2) + 8,
        minHeight: TOGGLE_SIZE + 8,
        padding: 4
    },
    indicator: {
        borderRadius: TOGGLE_SIZE / 2,
        height: TOGGLE_SIZE,
        width: TOGGLE_SIZE
    }
});
