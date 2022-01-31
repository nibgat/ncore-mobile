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
            cancelButtonProps,
            children,
            confirmButtonProps,
            content,
            headerComponent,
            contentContainerStyle,
            dismissOnTouchBackdrop = true,
            onDismiss,
            title,
            variant
        }) => {
            let _data = JSON.parse(JSON.stringify(dialog.data));
            _data.unshift(dialogKey);
            setDialog({
                data: _data
            });
            openModal({
                modalKey: dialogKey,
                children: <Dialog
                    children={children}
                    dialogKey={dialogKey}
                    bottomComponent={bottomComponent}
                    cancelButtonProps={cancelButtonProps}
                    confirmButtonProps={confirmButtonProps}
                    content={content}
                    headerComponent={headerComponent}
                    title={title}
                    variant={variant}
                />,
                contentContainerStyle: contentContainerStyle,
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