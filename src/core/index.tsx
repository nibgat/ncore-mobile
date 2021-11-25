import React, {
    ReactNode,
    /*
    useState,
    useRef
    */
} from "react";
import {
    // ActivityIndicator,
    SafeAreaView
} from "react-native";
import NCoreContext, {
    useNCoreBottomSheet,
    useNCoreSettings,
    useNCoreTheme,
    // useNCoreLocales,
    useNCoreModal
} from "./context";
/*
import {
    // BottomSheet,
    PageContainer,
    Dialog,
    Modal
} from "..";
*/
import styles, {
// bottomSheetStyle,
} from "./stylesheet";
/*
import {
    Modalize
} from "react-native-modalize";
import generateTheme from "./theme";
import getLocales from "./locales";
*/
import "./types";

type NCoreProvider = {
    children: ReactNode;
    themes?: Array<NCore.Theme>;
    designTokens?: NCore.DesignTokens;
};

type SetDefaults = {
    children: ReactNode;
};

const SetDefaults = ({
    children
}: SetDefaults) => {
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
        // ready
    } = useNCoreSettings();

    const {
        // closeBottomSheet
    } = useNCoreBottomSheet();

    const {
        
    } = useNCoreModal();

    const {
        colors,
        // radiuses,
        // spaces
    } = useNCoreTheme();

    return <SafeAreaView
        style={[
            styles.container,
            {
                backgroundColor: colors?.layer1
            }
        ]}
    >
        {children}
        {/*
        {
            ready ?
                null
                :
                <PageContainer
                    scrollable={false}
                    style={[
                        styles_main.loadingContainer
                    ]}
                >
                    <ActivityIndicator
                        color={colors.primary}
                        size="large"
                    />
                </PageContainer>
        }
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
        {
            modal && modal.data && modal.data.length ?
                modal.data.map((item: any, index: number) => {
                    return <Modal
                        key={"modal-" + index}
                        {...item.modalProps}
                        onDismiss={item.onDismiss}
                        type={item.type}
                        index={index}
                    >
                        {
                            item.type === "custom" ?
                                item.children
                                :
                                <Dialog
                                    title={item.title}
                                    autoCloseOnCancel={item.autoCloseOnCancel}
                                    autoCloseOnConfirm={item.autoCloseOnConfirm}
                                    headerComponent={item.headerComponent}
                                    buttons={item.buttons}
                                    bottomComponent={item.bottomComponent}
                                    content={item.content}
                                    type={item.dialogType}
                                    index={index}
                                    {...item.dialogProps}
                                >
                                    {item.children}
                                </Dialog>
                        }
                    </Modal>;
                })
                :
                null
        }
        */}
    </SafeAreaView>;
};

const NCoreProvider = ({
    children,
    themes,
    designTokens
}: NCoreProvider) => {
    return (
        <NCoreContext
            themes={themes}
            designTokens={designTokens}
        >
            <SetDefaults>
                {children}
            </SetDefaults>
        </NCoreContext>
    );
};

export default NCoreProvider;