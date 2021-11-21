import React, {
    ReducerAction,
    createContext,
    useReducer
} from "react";
import {
    NCoreReducerDispatch,
    ProviderProps
} from "./types";
import {
    ModalStoreInitial,
    ModalStore
} from "../constants";

export const ModalContext = createContext<ModalStore>(ModalStoreInitial);
export const ModalDispatchContext = createContext<ReducerAction<NCoreReducerDispatch>>(undefined);

const ModalProvider = ({
    children
}: ProviderProps) => {
    const [modal, setModal] = useReducer(
        (state: ModalStore, newValue: ModalStore) => ({
            ...state, ...newValue
        }),
        ModalStoreInitial
    );

    return <ModalContext.Provider
        value={modal}
    >
        <ModalDispatchContext.Provider
            value={setModal}
        >
            {children}
        </ModalDispatchContext.Provider>
    </ModalContext.Provider>;
};
export default ModalProvider;