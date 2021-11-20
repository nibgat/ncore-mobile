export type ModalStore = {
    closeAllModals: () => void;
    closeModal: () => void;
    openModal: () => void;
    data: ;
};

const modalStore: ModalStore = {
    closeAllModals: () => { },
    closeModal: () => { },
    openModal: () => { },
    data: []
};
export default modalStore;