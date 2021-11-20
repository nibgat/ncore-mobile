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
    BottomSheetStoreInitial,
    BottomSheetStore
} from '../constants';

export const BottomSheetContext = createContext<BottomSheetStore>(BottomSheetStoreInitial);
export const BottomSheetDispatchContext = createContext<ReducerAction<Dispatch>>(undefined);

const BottomSheetProvider = ({
    children
}: ProviderProps) => {
    const [bottomSheet, setBottomSheet]: [any, any] = useReducer(
        (state: any, newValue: any) => ({
            ...state, ...newValue 
        }),
        BottomSheetStoreInitial
    );

    return <BottomSheetContext.Provider
        value={bottomSheet}
    >
        <BottomSheetDispatchContext.Provider
            value={setBottomSheet}
        >
            {children}
        </BottomSheetDispatchContext.Provider>
    </BottomSheetContext.Provider>;
};
export default BottomSheetProvider;