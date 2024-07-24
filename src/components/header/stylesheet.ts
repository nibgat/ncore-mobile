import {
    StyleSheet
} from "react-native";
import {
    ViewStyle
} from "react-native";
import {
    HeaderStylerParams,
    HeaderStylerResult
} from "./types";

export const stylesheet = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        flex: 1
    }
});

const headerStyler = ({
    spaces,
    colors
}: HeaderStylerParams): HeaderStylerResult => {
    let containerStyle: ViewStyle = {
        backgroundColor: colors.layer1
    };

    let titleContainerStyle: ViewStyle = {
        paddingHorizontal: spaces.container
    };

    let backButtonStyle: ViewStyle = {
        paddingRight: spaces.content,
        paddingLeft: spaces.content
    };

    return {
        titleContainerStyle,
        backButtonStyle,
        containerStyle
    };
};
export default headerStyler;
