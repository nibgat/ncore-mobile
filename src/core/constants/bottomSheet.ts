import {
    Platform
} from 'react-native';

type DragLink = {
    // enabled: boolean;
};

type BottomSheetConfigs = {
    closeOnOverlayTap: boolean;
    swipeToTopEnabled: boolean;
    scrollEnabled: boolean;
    swipeEnabled: boolean;
    cancelable: boolean;
    withModal: boolean;
    draglink: DragLink;
};

export type BottomSheetStore = {
    closeBottomSheet: () => void;
    configs: BottomSheetConfigs;
    openBottomSheet: () => void;
    snapTo: () => void;
    isActive: boolean;
    index: number;
    snapPoints: ; // bura;
    data: ; // bura;
};

const bottomSheetStore: BottomSheetStore = {
    snapPoints: ["0%", Platform.OS === "ios" ? "25%" : "32%", "100%"],
    closeBottomSheet: () => { },
    openBottomSheet: () => { },
    snapTo: () => { },
    isActive: false,
    data: null,
    index: 0,
    configs: {
        closeOnOverlayTap: true,
        swipeToTopEnabled: true,
        scrollEnabled: false,
        swipeEnabled: true,
        cancelable: true,
        withModal: false,
        draglink: {
        }
    }
};
export default bottomSheetStore;