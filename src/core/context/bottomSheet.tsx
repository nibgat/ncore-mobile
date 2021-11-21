import React, {
    ReducerAction,
    createContext,
    useReducer
} from 'react';
import {
    NCoreReducerDispatch,
    ProviderProps
} from './types';
import {
    BottomSheetStoreInitial,
    BottomSheetStore
} from '../constants';

export const BottomSheetContext = createContext<BottomSheetStore>(BottomSheetStoreInitial);
export const BottomSheetDispatchContext = createContext<ReducerAction<NCoreReducerDispatch>>(undefined);

const BottomSheetProvider = ({
    children
}: ProviderProps) => {
    const [bottomSheet, setBottomSheet] = useReducer(
        (state: BottomSheetStore, newValue: BottomSheetStore) => ({
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