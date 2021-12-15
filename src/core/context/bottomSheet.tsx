import React, {
    createContext,
    useReducer
} from "react";
import {
    ProviderProps
} from "./types";
import {
    BottomSheetStoreInitial,
    BottomSheetStore
} from "../constants";

export const BottomSheetContext = createContext<BottomSheetStore>(BottomSheetStoreInitial);

const BottomSheetProvider = ({
    children
}: ProviderProps) => {
    const [bottomSheet] = useReducer(
        (state: BottomSheetStore, newValue: BottomSheetStore) => ({
            ...state, ...newValue
        }),
        BottomSheetStoreInitial
    );

    return <BottomSheetContext.Provider
        value={bottomSheet}
    >
        {children}
    </BottomSheetContext.Provider>;
};
export default BottomSheetProvider;