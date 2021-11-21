import {
    ReactNode 
} from "react";
import {
    ViewStyle 
} from "react-native";

type ModalData = {
    type: "dialog" | "custom";
    cancelable?: boolean;
    onDismiss?: () => void;
    children?: ReactNode;
    style?: ViewStyle;
    overlayStyle?: ViewStyle;
    contentContainerStyle?: ViewStyle;
    dialogProps?: DialogProps;
};

type DialogProps = {
    dialogType?: "yes-no" | "ok" | "info";
    title?: string;
    content?: string;
    confirmButtonProps?: DialogButton;
    cancelButtonProps?: DialogButton;
    headerComponent?: ReactNode;
    bottomComponent?: ReactNode;
    children?: ReactNode;
};

type DialogButton = {
    title?: string;
    onPress: () => void;
    color?: string;
};

export type ModalStore = {
    data: Array<ModalData>;
    openModal: (props: ModalData) => void;
    closeModal: (index: number) => void;
    closeAllModals: () => void;
};

export type useNCoreModalReturnType = {
    openModal: (props: ModalData) => void;
    closeModal: (index: number) => void;
    closeAllModals: () => void;
};

const modalStore: ModalStore = {
    data: [],
    openModal: () => {
    },
    closeModal: () => {
    },
    closeAllModals: () => {
    }
};
export default modalStore;