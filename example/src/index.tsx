import React, {
    useEffect,
    useState
} from "react";
import {
    useNCoreLocale,
    PageContainer,
    NCoreProvider,
    useNCoreTheme,
    RadioButton,
    TextInput,
    Button,
    Switch,
    Dialog,
    Chip,
    Text
} from "ncore-mobile";
import {
    tr
} from "./locales";
import SvgTest from "./assets/svg/Test";

const App = () => {
    const {
        activeTheme,
        switchTheme
    } = useNCoreTheme();

    const {
        localize
    } = useNCoreLocale();

    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [isSwitchActive, setIsSwitchActive] = useState(false);
    const [isChipSelected, setIsChipSelected] = useState(false);
    const [isVisibleDialog, setIsVisibleDialog] = useState(false);
    const [dialogLoading, setDialogLoading] = useState(false);
    const [bigButtonLoading, setBigButtonLoading] = useState(false);

    useEffect(() => {
        if(loading) {
            setTimeout(() => {
                if(activeTheme === "light") switchTheme("dark");
                setLoading(false);
            }, 3000);
        }
    }, [loading, activeTheme, switchTheme]);

    return <PageContainer>
        <Text variant="body">Hello NİBGAT®. Your selected theme is {activeTheme}. Your text is "{localize("corePagesSelectPageValidationNoMoreSelectable")}" and your localize is "{localize("language")}"</Text>
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
            disabled={true}
        />
        <Chip
            onPress={() => setIsChipSelected(!isChipSelected)}
            selected={isChipSelected}
        />
        <RadioButton
            selected={index === 0}
            title="Merhaba dünya."
            spreadBehaviour="free"
            onChange={() => setIndex(0)}
        />
        <RadioButton
            selected={index === 1}
            title="Lorem."
            spreadBehaviour="stretch"
            onChange={() => setIndex(1)}
        />
        <RadioButton
            selected={index === 2}
            title="Merhaba dünyaya geldim bir anda bir zamanda."
            spreadBehaviour="baseline"
            onChange={() => setIndex(2)}
        />
        <TextInput
            title="Test"
            initialValue="Merhaba"
            clearEnabled={true}
            placeholder="Lütfen bir metin girin."
        />
        <Button
            title="Open Dialog"
            size="small"
            spreadBehaviour="stretch"
            onPress={() => {
                setIsVisibleDialog(true);
            }}
            style={{
                marginBottom: 20
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
                marginBottom: 20
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
                marginBottom: 20
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
                marginBottom: 20
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
    </PageContainer>;
};

const NCoreContext = () => {
    return <NCoreProvider
        locales={[
            tr
        ]}
    >
        <App/>
    </NCoreProvider>;
};
export default NCoreContext;
