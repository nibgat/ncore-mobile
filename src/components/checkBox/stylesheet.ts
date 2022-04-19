import {
    StyleSheet,
    Platform
} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        height: Platform.OS === "android" ? 28 : 24,
        width: Platform.OS === "android" ? 28 : 24
    }
});
export default styles;
