import React, {
    Fragment,
    FC
    /*
    useState,
    useRef
    */
} from "react";
import {
// ActivityIndicator,
} from "react-native";
import {
    LocaleConfig
} from "./constants";
import NCoreContext, {
    useNCoreBottomSheet,
} from "./context";
/*
import {
    // BottomSheet,
    PageContainer,
    Dialog,
    Modal
} from "..";
*/
/*
import {
    Modalize
} from "react-native-modalize";
import generateTheme from "./theme";
import getLocales from "./locales";
*/
import "./types";

type NCoreProvider = {
    themes?: Array<NCore.Theme>;
    designTokens?: NCore.DesignTokens;
    locales?: Array<LocaleConfig>
};

type SetDefaults = {
};

const SetDefaults: FC<SetDefaults> = ({
    children
}) => {
    // const modalizeRef = useRef(null);

    /*
    const [modal] = useState({
        data: []
    });

    const [bottomSheet] = useState({
        props: {
        },
        data: null
    });
    */

    const {
        // closeBottomSheet
    } = useNCoreBottomSheet();

    return <Fragment>
        {children}
        {/*
        <Modalize
            panGestureEnabled={true}
            tapGestureEnabled={true}
            {...bottomSheet.props}
            ref={modalizeRef}
            adjustToContentHeight={autoHeight ? true : false}
            snapPoint={autoHeight ? undefined : 300}
            modalStyle={bottomSheetStyle.modalStyle}
            rootStyle={bottomSheetStyle.rootStyle}
            childrenStyle={bottomSheetStyle.childrenStyle}
            onClosed={() => closeBottomSheet()}
            onOverlayPress={() => closeBottomSheet()}
        >
            <PageContainer
                style={{
                    borderTopRightRadius: radiuses.hard,
                    borderTopLeftRadius: radiuses.hard,
                    paddingVertical: spaces.container
                }}
            >
                {bottomSheet.data}
            </PageContainer>
        </Modalize>
        */}
    </Fragment>;
};

const NCoreProvider: FC<NCoreProvider> = ({
    children,
    themes,
    designTokens,
    locales
}) => {
    return (
        <NCoreContext
            themes={themes}
            designTokens={designTokens}
            locales={locales}
        >
            <SetDefaults>
                {children}
            </SetDefaults>
        </NCoreContext>
    );
};

export default NCoreProvider;
