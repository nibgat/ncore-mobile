import React, {
    Dispatch,
    useState,
    useRef
} from "react";
import {
    View
} from "react-native";
import {
    BottomSheet as NCoreBottomSheet,
    BottomSheetRef,
    PageContainer,
    NCoreTheme,
    Button,
    Text
} from "ncore-mobile";
import stylesheet from "./stylesheet";

type BottomSheetHandlePositionType = "inside" | "outside";

const BottomSheet = () => {
    const [handlePosition, setHandlePosition]: [BottomSheetHandlePositionType | undefined, Dispatch<BottomSheetHandlePositionType | undefined>] = useState<BottomSheetHandlePositionType | undefined>(undefined);
    const [snapPoint, setSnapPoint] = useState<number | undefined>(300);
    const [isAutoHeight, setIsAutoHeight] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const bottomSheetRef = useRef<BottomSheetRef>(null);

    const {
        spaces
    } = NCoreTheme.useContext();

    return <PageContainer>
        <Button
            spreadBehaviour="stretch"
            title="Open Bottom Sheet"
            onPress={() => {
                bottomSheetRef.current?.open();
            }}
            style={{
                marginBottom: spaces.content
            }}
        />

        <Button
            title={`handlePosition = ${handlePosition ? handlePosition : "None"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                if(!handlePosition) {
                    setHandlePosition("inside");
                } else if(handlePosition === "inside") {
                    setHandlePosition("outside");
                } else {
                    setHandlePosition(undefined);
                }
            }}
        />
        <Button
            title={`autoHeight = ${isAutoHeight ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsAutoHeight(!isAutoHeight);
            }}
        />
        <Button
            title={`fullScreen = ${isFullScreen ? "true" : "false"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                setIsFullScreen(!isFullScreen);
            }}
        />
        <Button
            title={`snapPoint = ${snapPoint ? snapPoint : "None"}`}
            spreadBehaviour="stretch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                if(!snapPoint) {
                    setSnapPoint(300);
                } else if(snapPoint === 300) {
                    setSnapPoint(500);
                } else {
                    setSnapPoint(undefined);
                }
            }}
        />

        <NCoreBottomSheet
            handlePosition={handlePosition}
            autoHeight={isAutoHeight}
            fullScreen={isFullScreen}
            snapPoint={snapPoint}
            ref={bottomSheetRef}
        >
            <View
                style={{
                    ...stylesheet.contentContainer,
                    padding: spaces.container
                }}
            >
                <Text>
                    Bottom Sheet Content Text
                </Text>
            </View>
        </NCoreBottomSheet>
    </PageContainer>;
};
export default BottomSheet;
