import React, {
    useContext,
    useState,
    FC
} from "react";
import ModalProvider, {
    ModalContext
} from "./modal";
import BottomSheetProvider, {
    BottomSheetContext
} from "./bottomSheet";
import LocalesProvider, {
    LocalesContext
} from "./locales";
import ThemeProvider, {
    ThemeContext
} from "./theme";
import {
    useNCoreBottomSheetReturnType,
    useNCoreLocalesReturnType,
    useNCoreDialogReturnType,
    useNCoreThemeReturnType,
    useNCoreModalReturnType,
    LocaleConfig,
    DialogKey
} from "../constants";
import {
    Dialog
} from "../../components";

type NCoreContext = {
    initialThemeKey?: NCore.ThemeKey;
    themes?: Array<NCore.Theme>;
    designTokens?: NCore.DesignTokens;
    locales?: Array<LocaleConfig>;
};

const NCoreContext: FC<NCoreContext> = ({
    children,
    initialThemeKey,
    themes,
    designTokens,
    locales
}) => {
    return <ThemeProvider
        initialThemeKey={initialThemeKey}
        themes={themes}
        designTokens={designTokens}
    >
        <LocalesProvider
            locales={locales}
        >
            <ModalProvider>
                <BottomSheetProvider>
                    {children}
                </BottomSheetProvider>
            </ModalProvider>
        </LocalesProvider>
    </ThemeProvider>;
};

export const useNCoreTheme = (): useNCoreThemeReturnType => useContext(ThemeContext);
export const useNCoreModal = (): useNCoreModalReturnType => useContext(ModalContext);
export const useNCoreBottomSheet = (): useNCoreBottomSheetReturnType => useContext(BottomSheetContext);
export const useNCoreLocale = (): useNCoreLocalesReturnType => {
    const {
        activeLocale,
        switchLocale,
        isRTL,
        currentLocalizationData
    } = useContext(LocalesContext);

    return {
        localize: (localizationKey: keyof NCore.Translation): string => {
            return currentLocalizationData[localizationKey];
        },
        activeLocale,
        switchLocale,
        isRTL
    };
};
export const useNCoreDialog = (): useNCoreDialogReturnType => {
    const [dialog, setDialog] = useState<{ data: DialogKey[] }>({
        data: []
    });

    const {
        closeModal,
        openModal
    } = useContext(ModalContext);

    return {
        openDialog: ({
            dialogKey,
            bottomComponent,
            secondaryButtonProps,
            children,
            primaryButtonProps,
            content,
            headerComponent,
            contentContainerStyle,
            dismissOnTouchBackdrop = false,
            onDismiss,
            title,
            variant
        }) => {
            if(variant === "info") dismissOnTouchBackdrop = true; 

            let newData = JSON.parse(JSON.stringify(dialog.data));
            newData.unshift(dialogKey);
            setDialog({
                data: newData
            });

            openModal({
                modalKey: dialogKey,
                children: <Dialog
                    children={children}
                    dialogKey={dialogKey}
                    bottomComponent={bottomComponent}
                    secondaryButtonProps={secondaryButtonProps}
                    primaryButtonProps={primaryButtonProps}
                    content={content}
                    headerComponent={headerComponent}
                    title={title}
                    variant={variant}
                />,
                contentContainerStyle: {
                    ...contentContainerStyle,
                    justifyContent: "center",
                    alignItems: "center"
                },
                dismissOnTouchBackdrop: dismissOnTouchBackdrop,
                onDismiss: onDismiss
            });
        },
        closeAllDialogs: () => {
            dialog.data.forEach((item) => {
                setDialog({
                    data: []
                });
                closeModal(item);
            });
        },
        closeDialog: (dialogKey) => {
            setDialog({
                data: JSON.parse(JSON.stringify(dialog.data)).filter((p_item: DialogKey) => p_item !== dialogKey)
            });
            closeModal(dialogKey);
        }
    };
};

export default NCoreContext;