import React, {
    FC
} from "react";
import ThemeContextInheritance from "./theme";
import LocaleContextInheritance from "./locale";
import {
    Host
} from "react-native-portalize";
import ModalContextInheritance from "./modal";
import light from "../theme/variants/light";
import {
    en
} from "../locales";
import {
    NCoreContextConfigType
} from "../../types";

class Context {
    ThemeContext;
    LocaleContext;
    ModalContext;

    constructor(config: NCoreContextConfigType) {
        this.ThemeContext = new ThemeContextInheritance(
            {
                initialThemeKey: "light",
                ...light,
                ...light.designTokens,
            },
            {
                ...config,
                key: "NCoreTheme"
            }
        );

        this.LocaleContext = new LocaleContextInheritance(
            {
                initialLanguage: "en",
                locales: [
                    en
                ]
            },
            {
                ...config,
                key: "NCoreLocale"
            }
        );

        this.ModalContext = new ModalContextInheritance(
            {
                ...config,
                key: "NCoreModal"
            }
        );
    }

    Provider: FC = ({
        children
    }) => {
        const ModalContext = this.ModalContext;
        const LocaleContext= this.LocaleContext;
        const ThemeContext = this.ThemeContext;

        return <ThemeContext.Provider>
            <LocaleContext.Provider>
                <Host>
                    <ModalContext.Render>
                        {children}
                    </ModalContext.Render>
                </Host>
            </LocaleContext.Provider>
        </ThemeContext.Provider>;
    };
};
export default Context;
