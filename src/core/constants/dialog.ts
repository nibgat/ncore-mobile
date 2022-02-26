import {
    ReactNode
} from "react";

export interface IDialogProps {
    variant?: DialogVariant;
    title?: string;
    content?: string;
    onOverlayPress?: () => void;
    primaryButtonProps?: DialogButton;
    secondaryButtonProps?: DialogButton;
    headerComponent?: ReactNode;
    bottomComponent?: ReactNode;
    isVisible?: boolean;
};

export type DialogVariant = "yes-no" | "ok" | "info";

type DialogButton = {
    title?: string;
    onPress?: () => void;
    loading?: boolean;
};
