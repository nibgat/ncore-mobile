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
        this.NCoreContext = new Context({
            key: "NCore"
        });
    }

    ContextApi: FC = ({
        children
    }) => {
        const {
            colors
        } = NCoreContext.ThemeContext.useContext();

        return <GestureHandlerRootView
            style={[
                stylesheet.container,
                {
                    backgroundColor: colors.layer1
                }
            ]}
        >
            {children}
        </GestureHandlerRootView>;
    };

    Provider: FC = ({
        children
    }) => {
        const NCoreContext = this.NCoreContext;

        return <NCoreContext.Provider>
            <this.ContextApi>
                {children}
            </this.ContextApi>
        </NCoreContext.Provider>;
    };
};

const NCore = new NCoreInheritance();

export const NCoreContext = NCore.NCoreContext;
export const NCoreLocale = NCoreContext.LocaleContext;
export const NCoreTheme = NCoreContext.ThemeContext;
export const NCoreModal = NCoreContext.ModalContext;
export default NCore;
