import React, {
    createContext,
    useReducer
} from "react";
import {
    ProviderProps
} from "./types";
import {
    ModalStoreInitial,
    ModalStore
} from "../constants";

export const ModalContext = createContext<ModalStore>(ModalStoreInitial);

const ModalProvider = ({
    children
}: ProviderProps) => {
    const [modal] = useReducer(
        (state: ModalStore, newValue: ModalStore) => ({
            ...state, ...newValue
        }),
        ModalStoreInitial
    );

    return <ModalContext.Provider
        value={modal}
    >
        {children}
    </ModalContext.Provider>;
};
export default ModalProvider;