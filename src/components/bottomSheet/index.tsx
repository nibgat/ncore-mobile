import React, {
    RefForwardingComponent,
    useImperativeHandle,
    forwardRef,
    RefObject,
    useRef
} from "react";
import {
    Dimensions,
    ViewStyle
} from "react-native";
import styles from "./stylesheet";
import {
    Portal
} from "react-native-portalize";
import {
    ModalizeProps,
    Modalize
} from "react-native-modalize";
import PageContainer, {
    IPageContainerProps 
} from "../pageContainer";
import {
    useNCoreTheme 
} from "../../core/context";

const windowHeight = Dimensions.get("window").height;

interface IBottomSheetProps extends Omit<ModalizeProps, "adjustToContentHeight" | "snapPoint" | "ref"> {
    pageContainerProps?: IPageContainerProps;
    pageContainerStyle?: ViewStyle;
    childrenStyle?: ViewStyle;
    modalStyle?: ViewStyle;
    rootStyle?: ViewStyle;
    autoHeight?: boolean;
    fullScreen?: boolean;
    snapPoint?: number;
};

export type BottomSheetRef = {
    close: () => void,
    open: () => void
};

type BottomSheetStylerParams = {
    pageContainerStyleProp?: ViewStyle;
    radiuses: NCore.RadiusesTokens;
    childrenStyleProp?: ViewStyle;
    spaces: NCore.SpacesTokens;
    modalStyleProp?: ViewStyle;
    rootStyleProp?: ViewStyle;
    autoHeight?: boolean;
    fullScreen?: boolean;
};

type BottomSheetStylerResult = {
    contentContainerStyle: ViewStyle;
    pageContainerStyle: ViewStyle;
    childrenStyle: ViewStyle;
    modalStyle: ViewStyle;
    rootStyle: ViewStyle;
};

const bottomSheetStyler = ({
    pageContainerStyleProp,
    childrenStyleProp,
    modalStyleProp,
    rootStyleProp,
    fullScreen,
    autoHeight,
    radiuses,
    spaces
}: BottomSheetStylerParams): BottomSheetStylerResult => {
    const contentContainerStyle: ViewStyle = {
        ...styles.contentContainerStyle
    };

    const pageContainerStyle = {
        borderTopRightRadius: radiuses.hard,
        borderTopLeftRadius: radiuses.hard,
        paddingVertical: spaces.container,
        ...pageContainerStyleProp
    };

    const childrenStyle = {
        ...styles.childrenStyle,
        ...childrenStyleProp
    };

    const modalStyle = {
        ...styles.modalStyle,
        ...modalStyleProp
    };

    const rootStyle = {
        ...styles.rootStyle,
        ...rootStyleProp
    };

    if(autoHeight) {
        contentContainerStyle.flex = undefined;
    }

    if(fullScreen) {
        childrenStyle.borderTopLeftRadius = 0;
        childrenStyle.borderTopRightRadius = 0;

        modalStyle.borderTopLeftRadius = 0;
        modalStyle.borderTopRightRadius = 0;
        modalStyle.minHeight = "100%";

        rootStyle.borderTopLeftRadius = 0;
        rootStyle.borderTopRightRadius = 0;

        pageContainerStyle.borderTopLeftRadius = 0;
        pageContainerStyle.borderTopRightRadius = 0;
    }

    return {
        contentContainerStyle,
        pageContainerStyle,
        childrenStyle,
        modalStyle,
        rootStyle
    };
};

const BottomSheet: RefForwardingComponent<BottomSheetRef, IBottomSheetProps> = ({
    pageContainerStyle: pageContainerStyleProp,
    childrenStyle: childrenStyleProp,
    modalStyle: modalStyleProp,
    rootStyle: rootStyleProp,
    pageContainerProps,
    snapPoint = 300,
    autoHeight,
    fullScreen,
    children,
    ...props
}, ref) => {
    const {
        radiuses,
        spaces
    } = useNCoreTheme();

    const bottomSheetRef: RefObject<BottomSheetRef> = useRef(null);

    const open = () => {
        bottomSheetRef.current?.open();
    };

    const close = () => {
        bottomSheetRef.current?.close();
    };

    useImperativeHandle(
        ref,
        () => ({
            close,
            open
        }),
        []
    );

    const createSnapPoint = () => {
        if(autoHeight) {
            return undefined;
        }

        if(fullScreen) {
            return windowHeight;
        }

        return snapPoint;
    };

    const {
        contentContainerStyle,
        pageContainerStyle,
        childrenStyle,
        modalStyle,
        rootStyle
    } = bottomSheetStyler({
        pageContainerStyleProp,
        childrenStyleProp,
        modalStyleProp,
        rootStyleProp,
        fullScreen,
        autoHeight,
        radiuses,
        spaces
    });

    return <Portal>
        <Modalize
            panGestureEnabled={true}
            tapGestureEnabled={true}
            {...props}
            ref={bottomSheetRef}
            adjustToContentHeight={autoHeight ? true : false}
            snapPoint={createSnapPoint()}
            closeOnOverlayTap={true}
            childrenStyle={childrenStyle}
            modalTopOffset={fullScreen ? 0 : undefined}
            modalStyle={modalStyle}
            rootStyle={rootStyle}
            scrollViewProps={{
                contentContainerStyle: contentContainerStyle
            }}
        >
            <PageContainer
                {...pageContainerProps}
                style={pageContainerStyle}
            >
                {children}
            </PageContainer>
        </Modalize>
    </Portal>;
};
export default forwardRef(BottomSheet);
