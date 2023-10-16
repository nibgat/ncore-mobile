import {
    FC
} from "react";
import {
    SvgProps
} from "react-native-svg";
import IDialogProps from "../components/dialog/types";
import IBottomSheetProps from "../components/bottomSheet/types";
import {
    ModalizeProps 
} from "react-native-modalize";

export type ButtonDisplayBehaviourWhileLoading = "none" | "disabled";

export interface INCoreIconPropsType extends SvgProps {
    color?: string;
    size?: number;
};

export type NCoreIconType = FC<INCoreIconPropsType>;

export type LocaleConfig = {
    code: string;
    isRTL: boolean;
    translations: Record<keyof NCore.TranslationType, string>;
};

export type LanguageType = {
    locales?: Array<{
        code: string;
        translations: NCore.TranslationType;
        isRTL: boolean;
    }>;
    initialLanguage?: string;
};

export type LocaleContextType = {
    localize: (translationKey: keyof NCore.TranslationType) => string;
    translations: Record<keyof NCore.TranslationType, string>;
    activeLocale: string;
    isRTL: boolean;
};

export type ThemeType = {
    themes?: Array<NCore.ThemeType>;
    initialThemeKey?: string;
};

export type ThemeContextType = {
    activeTheme: "light" | "dark" | string;
    typography: NCore.TypographyType;
    colors: NCore.ColorsType;
    spaces: NCore.SpacesTokensType;
    borders: NCore.BordersTokensType;
    radiuses: NCore.RadiusesTokensType;
    disabled: NCore.DisabledTokensType;
};

export type DialogTypeForModalType = IDialogProps & {
    type: "dialog";
    key: string;
};

export type BottomSheetTypeForModalType = ModalizeProps & IBottomSheetProps & {
    type: "bottomsheet";
    isVisible: boolean;
    key: string;
};

export type ModalDataType = DialogTypeForModalType | BottomSheetTypeForModalType;

export type ModalContextType = {
    open: (modalData: ModalDataType) => void;
    close: (props: {
        index?: number;
        key?: string;
    }) => void;
    data: Array<ModalDataType>;
};

export type NCoreContextConfigType = {
    onStorageUpdate?: (state: any) => void;
    onSetStateFromStorage?: () => any;
    isSaveState?: boolean;
    key: string;
};

export type NCoreThemeKeyType = NCore.ThemeKeyType;
export type NCoreThemeType = NCore.ThemeType;
export type NCoreTypographyType = NCore.TypographyType;
export type NCoreColorsType = NCore.ColorsType;
export type NCoreTypographyVariantType = NCore.TypograpghyVariantType;
export type NCoreDesignTokesType = NCore.DesignTokensType;
export type NCoreSpacesTokensType = NCore.SpacesTokensType;
export type NCoreBordersTokensType = NCore.BordersTokensType;
export type NCoreRadiusesTokensType = NCore.RadiusesTokensType;
export type NCoreDisabledTokensType = NCore.DisabledTokensType;
export type NCoreTranslationType = NCore.TranslationType;

declare global {
    namespace NCore {
        type ThemeKeyType = "light" | "dark" | string;

        interface ThemeType {
            key: ThemeKeyType;
            typography?: TypographyType;
            colors?: ColorsType;
            designTokens?: DesignTokensType;
        }

        interface TypographyType {
            header1?: TypograpghyVariantType;
            header2?: TypograpghyVariantType;
            header3?: TypograpghyVariantType;
            header4?: TypograpghyVariantType;
            header5?: TypograpghyVariantType;
            header6?: TypograpghyVariantType;
            header7?: TypograpghyVariantType;
            header8?: TypograpghyVariantType;
            header9?: TypograpghyVariantType;
            body?: TypograpghyVariantType;
            caption?: TypograpghyVariantType;
            buttonSmall?: TypograpghyVariantType;
            buttonMedium?: TypograpghyVariantType;
            buttonLarge?: TypograpghyVariantType;
            overline?: TypograpghyVariantType;
        }

        interface ColorsType {
            primary: string;
            body: string;
            constrastBody: string;
            layer1: string;
            layer2: string;
            layer3: string;
            panel: string;
            warning: string;
            danger: string;
            success: string;
            accent: string;
            attention: string;
            info: string;
            seperator: string;
            hideBody: string;
            gray0: string;
            gray10: string;
            gray20: string;
            gray30: string;
            gray40: string;
            gray50: string;
            gray60: string;
            gray70: string;
            gray80: string;
            gray90: string;
            gray92: string;
            gray94: string;
            gray96: string;
            gray98: string;
            gray100: string;
            modalBackground: string;
        }

        type TypograpghyVariantType = {
            fontFamily: string;
            fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
            fontSize: number;
            lineHeight?: number;
            letterSpacing?: number;
            textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
        }

        interface DesignTokensType {
            spaces: SpacesTokensType;
            borders: BordersTokensType;
            radiuses: RadiusesTokensType;
            disabled: DisabledTokensType;
        }

        interface SpacesTokensType {
            container: number;
            content: number;
            inline: number;
            item: number;
        }

        interface BordersTokensType {
            indicator: number;
            line: number;
        }

        interface RadiusesTokensType {
            quarter: number;
            hard: number;
            half: number;
        }

        interface DisabledTokensType {
            opacity: number;
        }

        interface TranslationType {
            nCoreDefaultDialogSecondaryButtonTitle: string;
            nCoreDefaultDialogPrimaryButtonTitle: string;
            nCoreSelectBoxSelectedText: string;
            nCoreSelectBoxNoSelectionText: string;
            nCoreSelectBoxMinSelectionWarningText: string;
            nCoreSelectBoxMaxSelectionReachedText: string;
            nCoreSelectBoxSelectAll: string;
            nCoreSelectBoxClearAll: string;
            "active-theme": string;
            "active-language": string;
            "ncore-mobile": string;
            "welcome-description": string;
        }
    }
}
