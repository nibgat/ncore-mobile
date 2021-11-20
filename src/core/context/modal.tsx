import React, {
    ReducerAction,
    createContext,
    useReducer
} from 'react';
import {
    ProviderProps,
    Dispatch
} from './types';
import {
    ModalStoreInitial,
    ModalStore
} from '../constants';

export const ModalContext = createContext<ModalStore>(ModalStoreInitial);
export const ModalDispatchContext = createContext<ReducerAction<Dispatch>>(undefined);

const ModalProvider = ({
    children
}: ProviderProps) => {
    const [modal, setModal]: [any, any] = useReducer(
        (state: any, newValue: any) => ({
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