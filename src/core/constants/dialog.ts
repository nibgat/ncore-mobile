import {
    ReactNode
} from "react";
import {
    ViewStyle
} from "react-native";
import {
    NCoreIcon 
} from "../types";

export interface IDialogProps {
    variant?: DialogVariant;
    title?: string;
    content?: string;
    confirmButtonProps?: DialogButton;
    cancelButtonProps?: DialogButton;
    headerComponent?: ReactNode;
    bottomComponent?: ReactNode;
    dialogKey: DialogKey;
};

export type DialogKey = string | number;
export type DialogVariant = "yes-no" | "ok" | "info";

export type DialogButton = {
    title?: string;
    onPress: (dialogKey: DialogKey) => void;
    color?: keyof NCore.Colors;
    icon?: NCoreIcon;
};

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