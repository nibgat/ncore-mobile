import React, {
    FC
} from "react";
import stylesheet from "./stylesheet";
import {
    GestureHandlerRootView
} from "react-native-gesture-handler";
import Context from "./context";

class NCoreInheritance {
    NCoreContext;

    constructor() {
        this.NCoreContext = new Context();
    }

    Provider: FC = ({
        children
    }) => {
        const NCoreContext = this.NCoreContext;

        return <GestureHandlerRootView
            style={stylesheet.container}
        >
            <NCoreContext.Provider>
                {children}
            </NCoreContext.Provider>
        </GestureHandlerRootView>;
    };
};

const NCore = new NCoreInheritance();

export const NCoreContext = NCore.NCoreContext;
export const NCoreLocale = NCoreContext.LocaleContext;
export const NCoreTheme = NCoreContext.ThemeContext;
export const NCoreModal = NCoreContext.ModalContext;
export default NCore;
