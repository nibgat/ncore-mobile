import {
    StyleSheet,
    TextStyle,
    ViewStyle
} from "react-native";
import {
    StateCardStylerParams,
    StateCardStylerResult
} from "./types";

export const stylesheet = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    title: {
        textAlign: "center"
    },
    content: {
        textAlign: "center"
    }
});

const stateCardStyler = ({
    spaces
}: StateCardStylerParams): StateCardStylerResult => {
    let titleStyle: TextStyle = {
        marginBottom: spaces.content
    };

    let iconContainerStyle: ViewStyle = {
        marginBottom: spaces.content
    };

    let contentStyle: TextStyle = {
        marginBottom: spaces.content
    };

    return {
        iconContainerStyle,
        contentStyle,
        titleStyle
    };
};
export default stateCardStyler;
