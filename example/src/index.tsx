import React, {
    useEffect,
    useState,
    useRef
} from "react";
import {
    useNCoreLocalization,
    BottomSheetRef,
    PageContainer,
    NCoreProvider,
    useNCoreTheme,
    RadioButton,
    BottomSheet,
    TextInput,
    SelectBox,
    Button,
    Switch,
    Dialog,
    Chip,
    Text,
    StateCard,
    CheckBox
} from "ncore-mobile";
import {
    tr
} from "./locales";
import SvgTest from "./assets/svg/Test";

type Test = {
    test: string;
}
type TestArray = Array<Test>;

const TestData: TestArray = [
    {
        test: "pt"
    },
    {
        test: "mets"
    }
];

const App = () => {
    const {
        activeTheme,
        switchTheme,
        spaces
    } = useNCoreTheme();

    const {
        localize,
        activeLocale,
        switchLocale
    } = useNCoreLocalization();

    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [isSwitchActive, setIsSwitchActive] = useState(false);
    const [isChipSelected, setIsChipSelected] = useState(false);
    const [isVisibleDialog, setIsVisibleDialog] = useState(false);
    const [dialogLoading, setDialogLoading] = useState(false);
    const [bigButtonLoading, setBigButtonLoading] = useState(false);
    const [check, setCheck] = useState(false);

    const bottomSheetRef = useRef<BottomSheetRef>(null);

    useEffect(() => {
        if(loading) {
            setTimeout(() => {
                if(activeTheme === "light") switchTheme("dark");
                setLoading(false);
            }, 3000);
        }
    }, [loading, activeTheme, switchTheme]);

    return <PageContainer>
        <Text
            variant="body"
            style={{
                marginBottom: spaces.container
            }}
        >
            {`Hello NİBGAT®. Your selected theme is {activeTheme}. Your text is ${localize("nCoreDefaultDialogSecondaryButtonTitle")} and your language is ${activeLocale === "en" ? "English" : "Turkish"}`}
        </Text>
        <Button
            title="Switch Theme"
            onPress={() => {
                setLoading(true);
            }}
            loading={loading}
            icon={SvgTest}
        />
        <Switch
            isActive={isSwitchActive}
            onPress={() => setIsSwitchActive(!isSwitchActive)}
            title="Merhaba dünya"
            spreadBehaviour="baseline"
            disabled={false}
        />
        <Chip
            onPress={() => {
                setIsChipSelected(!isChipSelected);
                switchLocale(activeLocale === "en" ? "tr" : "en");
            }}
            selected={isChipSelected}
            title={`Is language TR ( Current: ${activeLocale} )`}
            style={{
                marginBottom: spaces.container
            }}
        />
        <RadioButton
            selected={index === 0}
            title="Merhaba dünya."
            spreadBehaviour="free"
            onChange={() => setIndex(0)}
            style={{
                marginBottom: spaces.content
            }}
        />
        <RadioButton
            selected={index === 1}
            title="Lorem."
            spreadBehaviour="stretch"
            onChange={() => setIndex(1)}
            style={{
                marginBottom: spaces.content
            }}
        />
        <RadioButton
            selected={index === 2}
            title="Merhaba dünyaya geldim bir anda bir zamanda."
            spreadBehaviour="baseline"
            onChange={() => setIndex(2)}
            style={{
                marginBottom: spaces.container
            }}
        />
        <TextInput
            title="Test"
            initialValue="Merhaba"
            clearEnabled={true}
            placeholder="Lütfen bir metin girin."
            style={{
                marginBottom: spaces.container
            }}
        />
        <CheckBox
            isActive={check}
            onChange={() => {
                setCheck(!check);
            }}
            style={{
                marginBottom: spaces.container
            }}
        />
        <SelectBox
            title="Hello"
            initialData={TestData}
            multipleSelect={false}
            itemLabelExtractor={(item) => {
                return item.test;
            }}
            style={[
                {
                    marginBottom: spaces.container
                }
            ]}
        />
        <Button
            title="Open Bottom Sheet"
            size="small"
            spreadBehaviour="stretch"
            onPress={() => {
                bottomSheetRef.current?.open();
            }}
            style={{
                marginBottom: spaces.container
            }}
        />
        <Button
            title="Open Dialog"
            size="small"
            spreadBehaviour="stretch"
            onPress={() => {
                setIsVisibleDialog(true);
            }}
            style={{
                marginBottom: spaces.container
            }}
        />
        <Button
            title="Open Dialog"
            size="medium"
            spreadBehaviour="stretch"
            onPress={() => {
                setIsVisibleDialog(true);
            }}
            style={{
                marginBottom: spaces.container
            }}
        />
        <Button
            title="Open Dialog"
            size="large"
            spreadBehaviour="stretch"
            onPress={() => {
                setIsVisibleDialog(true);
            }}
            style={{
                marginBottom: spaces.container
            }}
        />
        <Button
            title="Loading Test"
            size="large"
            spreadBehaviour="stretch"
            loading={bigButtonLoading}
            onPress={() => {
                setBigButtonLoading(true);
            }}
            style={{
                marginBottom: spaces.container
            }}
        />
        <Dialog
            isVisible={isVisibleDialog}
            title="Merhaba!"
            content="Bunu yapmak istediğinize emin misiniz ?"
            onOverlayPress={() => {
                setIsVisibleDialog(false);
            }}
            variant="yes-no"
            primaryButtonProps={{
                title: "Tamam",
                loading: dialogLoading,
                displayBehaviourWhileLoading: "none",
                onPress: () => {
                    setIsVisibleDialog(false);
                }
            }}
            secondaryButtonProps={{
                title: "Test It",
                onPress: () => {
                    setDialogLoading(!dialogLoading);
                }
            }}
        />
        <BottomSheet
            ref={bottomSheetRef}
            closeOnOverlayTap={true}
        >
            <StateCard
                title="Test deneme"
            />
        </BottomSheet>
    </PageContainer>;
};

const NCoreContext = () => {
    return <NCoreProvider
        config={{
            locales: [
                tr
            ]
        }}
    >
        <App/>
    </NCoreProvider>;
};
export default NCoreContext;
