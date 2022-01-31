import {
    ReactNode 
} from "react";
import {
    ViewStyle 
} from "react-native";

export type ModalKey = string | number;

export type ModalData = {
    onDismiss?: (modalKey: ModalKey) => void;
    children?: ReactNode;
    contentContainerStyle?: ViewStyle;
    dismissOnTouchBackdrop?: boolean;
    modalKey: ModalKey;
};

export type ModalStore = {
    data: Array<ModalData>;
    openModal: (props: ModalData) => void;
    closeModal: (modalKey: ModalKey) => void;
    closeAllModals: () => void;
};

export type ModalStoreReducer = Partial<ModalStore>;

export type useNCoreModalReturnType = {
    openModal: (props: ModalData) => void;
    closeModal: (modalKey: ModalKey) => void;
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