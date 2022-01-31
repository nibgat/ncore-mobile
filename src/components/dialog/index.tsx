import React, {
    FC
} from "react";
import {
    ViewStyle,
    View
} from "react-native";
import styles from "./stylesheet";
import {
    useNCoreLocale,
    useNCoreTheme,
} from "../../core/context";
import Button from "../button";
import Text from "../text";
import {
    IDialogProps
} from "../../core/constants";

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
    dialogKey,
    confirmButtonProps,
    cancelButtonProps,
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
            title={localize("coreDialogSecondaryButtonTitle")}
            variant="ghost"
            {...cancelButtonProps}
            onPress={() => {
                if(cancelButtonProps?.onPress) cancelButtonProps.onPress(dialogKey);
            }}
        />;
    };

    const primaryButton = () => {
        return <Button
            title={localize("coreDialogPrimaryButtonTitle")}
            {...confirmButtonProps}
            onPress={() => {
                if(confirmButtonProps?.onPress) confirmButtonProps.onPress(dialogKey);
            }}
            style={primaryButtonStyle}
        />;
    };

    return <View
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
    </View>;
};
export default Dialog;