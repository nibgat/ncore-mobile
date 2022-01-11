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