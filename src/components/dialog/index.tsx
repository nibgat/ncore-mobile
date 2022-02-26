import React, {
    FC
} from "react";
import {
    TouchableOpacity,
    StyleSheet,
    ViewStyle,
    View
} from "react-native";
import styles from "./stylesheet";
import {
    useNCoreLocale,
    useNCoreTheme
} from "../../core/context";
import Button from "../button";
import Text from "../text";
import {
    IDialogProps
} from "../../core/constants";
import {
    Portal
} from "react-native-portalize";

type DialogStylerParams = {
    radiuses: NCore.RadiusesTokens;
    spaces: NCore.SpacesTokens;
    colors: NCore.Colors;
};

type DialogStylerResult = {
    primaryButton: ViewStyle;
    container: ViewStyle;
    content: ViewStyle;
    bottom: ViewStyle;
    header: ViewStyle;
};

const dialogStyler = ({
    radiuses,
    spaces,
    colors
}: DialogStylerParams): DialogStylerResult => {
    let container: ViewStyle = {
        backgroundColor: colors.layer1,
        borderRadius: radiuses.half,
        padding: spaces.container
    };

    let header: ViewStyle = {
        paddingHorizontal: spaces.content / 2,
        paddingTop: spaces.content
    };

    let content: ViewStyle = {
        paddingHorizontal: spaces.content / 2,
        paddingVertical: spaces.content
    };

    let bottom: ViewStyle = {
        paddingHorizontal: spaces.content / 2,
        paddingTop: spaces.content
    };

    let primaryButton: ViewStyle = {
        marginLeft: spaces.content
    };

    return {
        primaryButton,
        container,
        content,
        bottom,
        header
    };
};

const Dialog: FC<IDialogProps> = ({
    variant,
    isVisible = false,
    onOverlayPress,
    primaryButtonProps,
    secondaryButtonProps,
    headerComponent,
    bottomComponent,
    children,
    content,
    title
}) => {
    const {
        radiuses,
        spaces,
        colors
    } = useNCoreTheme();

    const {
        localize
    } = useNCoreLocale();

    const {
        primaryButton: primaryButtonStyle,
        content: contentStyle,
        container,
        bottom,
        header
    } = dialogStyler({
        radiuses,
        spaces,
        colors
    });

    const renderHeader = () => {
        return <View
            style={[
                styles.headerContainer,
                header
            ]}
        >
            {headerComponent || <Text
                variant="header5"
            >
                {title}
            </Text>}
        </View>;
    };

    const renderBottom = () => {
        if(variant === "info") {
            return null;
        }

        return <View
            style={[
                styles.bottomContainer,
                bottom
            ]}
        >
            {bottomComponent || <View
                style={styles.bottomContentContainer}
            >
                {secondaryButton()}
                {primaryButton()}
            </View>}
        </View>;
    };

    const secondaryButton = () => {
        if(variant !== "yes-no") {
            return null;
        }

        return <Button
            title={secondaryButtonProps?.title || localize("coreDialogSecondaryButtonTitle")}
            loading={secondaryButtonProps?.loading}
            color="layer2"
            textColor="body"
            onPress={() => {
                if(secondaryButtonProps?.onPress) secondaryButtonProps.onPress();
            }}
        />;
    };

    const primaryButton = () => {
        return <Button
            title={localize("coreDialogPrimaryButtonTitle")}
            loading={primaryButtonProps?.loading}
            onPress={() => {
                if(primaryButtonProps?.onPress) primaryButtonProps?.onPress();
            }}
            style={primaryButtonStyle}
        />;
    };

    return <Portal>
        {
            isVisible ?
                <View
                    style={[
                        styles.overlay,
                        StyleSheet.absoluteFill,
                        {
                            backgroundColor: colors.modalBackground,
                            padding: spaces.container
                        }
                    ]}
                >
                    <TouchableOpacity
                        style={[
                            StyleSheet.absoluteFill
                        ]}
                        onPress={() => {
                            if(onOverlayPress) onOverlayPress();
                        }}
                    >
                        <View style={styles.overlayTouchableArea}/>
                    </TouchableOpacity>
                    <View
                        style={[
                            styles.container,
                            container
                        ]}
                    >
                        {renderHeader()}
                        <View
                            style={[
                                styles.content,
                                contentStyle
                            ]}
                        >
                            {children || <Text>
                                {content}
                            </Text>}
                        </View>
                        {renderBottom()}
                    </View>
                </View>
                :
                null
        }
    </Portal>;
};
export default Dialog;
