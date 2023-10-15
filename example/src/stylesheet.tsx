import {
    StyleSheet
} from "react-native";

const stylesheet = StyleSheet.create({
    contentContainer: {
        alignItems: "center"
    },
    logo: {
        height: 300,
        width: 300
    },
    welcomeText: {
        textAlign: "center"
    },
    toolsContainer: {
        flexDirection: "row",
        width: "100%"
    },
    toolButtonLeft: {
        flex: 1
    },
    toolButtonRight: {
        flex: 1
    }
});
export default stylesheet;
