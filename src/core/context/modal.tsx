import React, {
    createContext,
    useReducer,
    useEffect,
    Dispatch,
    FC
} from "react";
import {
    ModalStoreInitial,
    ModalStoreReducer,
    ModalStore,
    ModalData
} from "../constants";
import Modal from "../../components/modal";

export const ModalContext = createContext<ModalStore>(ModalStoreInitial);

const ModalProvider: FC = ({
    children
}) => {
    const [modal, setModal]: [ModalStore, Dispatch<ModalStoreReducer>] = useReducer(
        (state: ModalStore, newValue: ModalStoreReducer) => ({
            ...state, ...newValue
        }),
        ModalStoreInitial
    );

    useEffect(() => {
        setModal({
            closeAllModals: () => {
                setModal({
                    data: []
                });
            },
            closeModal: (modalKey) => {
                setModal({
                    data: JSON.parse(JSON.stringify(modal.data)).filter((item: ModalData) => item.modalKey !== modalKey)
                });
            },
            openModal: (props) => {
                let _data = JSON.parse(JSON.stringify(modal.data));
                _data.unshift(props);
                setModal({
                    data: _data
                });
            }
        });
    }, [modal.data]);

    return <ModalContext.Provider
        value={modal}
    >
        {children}
        {
            modal.data.map((item: ModalData, index: number) => {
                return <Modal
                    key={`modal-${index}`}
                    modalKey={item.modalKey}
                    onDismiss={item.onDismiss}
                    contentContainerStyle={item.contentContainerStyle}
                    dismissOnTouchBackdrop={item.dismissOnTouchBackdrop}
                    index={index}
                >
                    {item.children}
                </Modal>;
            })
        }
    </ModalContext.Provider>;
};
export default ModalProvider;