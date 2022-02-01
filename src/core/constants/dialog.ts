import {
    ReactNode,
    Dispatch
} from "react";
import {
    ViewStyle
} from "react-native";

export interface IDialogProps {
    variant?: DialogVariant;
    title?: string;
    content?: string;
    primaryButtonProps?: IPrimaryDialogButton;
    secondaryButtonProps?: ISecondaryDialogButton;
    headerComponent?: ReactNode;
    bottomComponent?: ReactNode;
    dialogKey: DialogKey;
};

export type DialogKey = string | number;
export type DialogVariant = "yes-no" | "ok" | "info";

type DialogButtonWithLoadingCallback = {
    dialogKey: DialogKey;
    setLoading: Dispatch<boolean>
};

type DialogButton = {
    title?: string;
    hideOnPress?: boolean;
};

export interface IPrimaryDialogButton extends DialogButton {
    onPress: (props: DialogButtonWithLoadingCallback) => void;
};

export interface ISecondaryDialogButton extends DialogButton {
    onPress: (props: { dialogKey: DialogKey }) => void;
}

interface IDialogPropsForModal extends IDialogProps {
    dismissOnTouchBackdrop?: boolean;
    onDismiss?: (dialogKey: DialogKey) => void;
    contentContainerStyle?: ViewStyle;
    children?: ReactNode;
};

export type useNCoreDialogReturnType = {
    openDialog: (props: IDialogPropsForModal) => void;
    closeDialog: (dialogKey: string | number) => void;
    closeAllDialogs: () => void;
};