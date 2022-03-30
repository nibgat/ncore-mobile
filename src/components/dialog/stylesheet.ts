import {
    StyleSheet
} from "react-native";

export default StyleSheet.create({
    container: {
        alignSelf: "stretch"
    },
    headerContainer: {
        paddingBottom: 0,
        width: "100%"
    },
    content: {
        width: "100%"
    },
    bottomContainer: {
        width: "100%"
    },
    bottomContentContainer: {
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    overlay: {
        justifyContent: "center",
        alignItems: "center"
    },
    overlayTouchableArea: {
        flex: 1
    }
});
