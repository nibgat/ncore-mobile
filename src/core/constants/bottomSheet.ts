import {
    ReactNode
} from "react";
import {
    ModalizeProps
} from "react-native-modalize";

export type BottomSheetStore = {
    isActive: boolean;
    children: ReactNode;
    openBottomSheet: () => void;
    closeBottomSheet: () => void;
    props: ModalizeProps | undefined;
    autoHeight: boolean;
};

export type useNCoreBottomSheetReturnType = {
    openBottomSheet: (children: ReactNode, props: ModalizeProps) => void;
    closeBottomSheet: () => void;
};

const bottomSheetStore: BottomSheetStore = {
    openBottomSheet: () => {
    },
    closeBottomSheet: () => {
    },
    isActive: false,
    children: undefined,
    autoHeight: true,
    props: undefined
};
export default bottomSheetStore;
