import {
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    content: {
        justifyContent: "center",
        flexDirection: "column",
        flex: 1
    },
    checkContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        width: 30
    },
    check: {
        position: "absolute",
        alignItems: "center",
        alignSelf: "center"
    },
    toolsContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    toolsLeftContainer: {
        flex: 1
    },
    toolsRightContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    toolsButton: {
        paddingRight: 0,
        paddingLeft: 0
    }
});
export default styles;
