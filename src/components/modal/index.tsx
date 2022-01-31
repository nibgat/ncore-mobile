import React, {
    FC
} from "react";
import {
    TouchableOpacity,
    ViewStyle,
    View
} from "react-native";
import {
    useNCoreTheme,
    useNCoreModal
} from "../../core/context";
import {
    ModalKey
} from "../../core/constants";
import styles from "./stylesheet";

interface IModalProps {
    modalKey: ModalKey;
    index: number;
    contentContainerStyle?: ViewStyle;
    onDismiss?: (modalKey: ModalKey) => void;
    dismissOnTouchBackdrop?: boolean;
};

const Modal: FC<IModalProps> = ({
    dismissOnTouchBackdrop = true,
    contentContainerStyle,
    onDismiss,
    children,
    modalKey,
    index
}) => {
    const {
        spaces,
        colors
    } = useNCoreTheme();

    const {
        closeModal
    } = useNCoreModal();

    return <View
        style={[
            styles.container,
            {
                backgroundColor: colors.modalBackground,
                zIndex: 9999 + index
            }
        ]}
    >
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                if(dismissOnTouchBackdrop) closeModal(modalKey);
                if(onDismiss) onDismiss(modalKey);
            }}
            style={styles.backdrop}
        >
            <View/>
        </TouchableOpacity>
        <View
            pointerEvents="box-none"
            style={[
                contentContainerStyle,
                styles.content,
                {
                    padding: spaces.container
                }
            ]}
        >
            {children}
        </View>
    </View>;
};
export default Modal;