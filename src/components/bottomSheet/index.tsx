import React, {
    RefForwardingComponent,
    useImperativeHandle,
    forwardRef,
    RefObject,
    useRef
} from "react";
import styles from "./stylesheet";
import {
    Portal
} from "react-native-portalize";
import {
    ModalizeProps,
    Modalize
} from "react-native-modalize";
import PageContainer from "../pageContainer";
import {
    useNCoreTheme 
} from "../../core/context";

interface IBottomSheetProps extends Omit<ModalizeProps, "adjustToContentHeight" | "snapPoint" | "ref"> {
    autoHeight?: boolean;
};

export type BottomSheetRef = {
    close: () => void,
    open: () => void
};

const BottomSheet: RefForwardingComponent<BottomSheetRef, IBottomSheetProps> = ({
    childrenStyle,
    modalStyle,
    autoHeight,
    rootStyle,
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

    return <Portal>
        <Modalize
            panGestureEnabled={true}
            tapGestureEnabled={true}
            {...props}
            ref={bottomSheetRef}
            adjustToContentHeight={autoHeight ? true : false}
            snapPoint={autoHeight ? undefined : 300}
            closeOnOverlayTap={true}
            childrenStyle={[
                styles.childrenStyle,
                childrenStyle
            ]}
            modalStyle={[
                styles.modalStyle,
                modalStyle
            ]}
            rootStyle={[
                styles.rootStyle,
                rootStyle
            ]}
        >
            <PageContainer
                style={{
                    borderTopRightRadius: radiuses.hard,
                    borderTopLeftRadius: radiuses.hard,
                    paddingVertical: spaces.container
                }}
            >
                {children}
            </PageContainer>
        </Modalize>
    </Portal>;
};
export default forwardRef(BottomSheet);
