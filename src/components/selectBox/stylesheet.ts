import {
    StyleSheet,
    ViewStyle,
    Platform
} from "react-native";
import ITextProps from "../text/types";
import {
    SelectBoxStylerParams,
    SelectBoxStylerResult
} from "./types";

export const stylesheet = StyleSheet.create({
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
        alignSelf: "center",
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

const selectBoxStyler = ({
    selectedIndexes,
    multipleSelect,
    disabledStyle,
    typography,
    maxChoice,
    minChoice,
    radiuses,
    disabled,
    spaces,
    colors,
    style
}: SelectBoxStylerParams): SelectBoxStylerResult => {
    let containerStyle: ViewStyle | ViewStyle[] = {
    };

    if(Array.isArray(style)) {
        containerStyle = style;
    } else {
        containerStyle = {
            ...style
        };
    }

    let touchableStyle: ViewStyle = {
        ...stylesheet.container,
        paddingHorizontal: spaces.container,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        paddingTop: spaces.content
    };

    const valueStyle = {
        ...typography.body,
        height: 18,
        lineHeight: undefined,
        color: colors.body
    };

    const checkBoxStyle = {
        ...stylesheet.check
    };

    const itemTailContainerStyle = {
        ...stylesheet.checkContainer
    };

    const itemStyle = {
        marginBottom: spaces.content
    };

    const itemTitleProps: ITextProps = {
        variant: "header7"
    };

    const counterContainerStyle = {
        ...stylesheet.toolsLeftContainer
    };

    const helpersContainerStyle = {
        ...stylesheet.toolsRightContainer
    };

    const helperButtonStyle = {
        ...stylesheet.toolsButton
    };

    const helpersContentContainerStyle = {
        ...stylesheet.toolsContainer,
        marginBottom: spaces.content
    };

    const bottomSheetHeaderStyle = {
        marginBottom: multipleSelect ? spaces.content : spaces.container * 1.5
    };

    let counterColor: keyof NCore.ColorsType = "body";

    if(minChoice !== undefined && selectedIndexes.length < minChoice) {
        counterColor = "accent";
    }

    if(maxChoice !== undefined && selectedIndexes.length > maxChoice) {
        counterColor = "accent";
    }

    if(disabled) {
        touchableStyle = {
            ...touchableStyle,
            ...disabledStyle
        };
    }

    if(Platform.OS === "ios") {
        touchableStyle.paddingBottom = spaces.inline;
    } else {
        touchableStyle.paddingBottom = spaces.content * 1.5;
    }

    return {
        helpersContentContainerStyle,
        bottomSheetHeaderStyle,
        itemTailContainerStyle,
        counterContainerStyle,
        helpersContainerStyle,
        helperButtonStyle,
        containerStyle,
        touchableStyle,
        itemTitleProps,
        checkBoxStyle,
        counterColor,
        valueStyle,
        itemStyle
    };
};
export default selectBoxStyler;
