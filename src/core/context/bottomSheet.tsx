import React, {
    createContext,
    useReducer,
    FC
} from "react";
import {
    BottomSheetStoreInitial,
    BottomSheetStore
} from "../constants";

export const BottomSheetContext = createContext<BottomSheetStore>(BottomSheetStoreInitial);

const BottomSheetProvider: FC = ({
    children
}) => {
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
