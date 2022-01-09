import React, {
    useEffect,
    useState
} from "react";
import {
    StyleSheet,
    View
} from "react-native";
import {
    useNCoreLocale,
    NCoreProvider,
    useNCoreTheme,
    TextInput,
    Button,
    Text,
    RadioButton
} from "ncore-mobile";
import {
    tr
} from "./locales";
import SvgTest from "./assets/svg/Test";

const App = () => {
    const {
        activeTheme,
        switchTheme,
        colors
    } = useNCoreTheme();

    const {
        localize
    } = useNCoreLocale();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(loading) {
            setTimeout(() => {
                if(activeTheme === "light") switchTheme("dark");
                setLoading(false);
            }, 3000);
        }
    }, [loading, activeTheme, switchTheme]);

    return <View
        style={[
            styles.container,
            {
                backgroundColor: colors?.layer1
            }
        ]}
    >
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
            selected={false}
            title="Merhaba dünya."
            spreadBehaviour="free"
        />
        <RadioButton
            selected={true}
            title="Lorem."
            spreadBehaviour="stretch"
        />
        <RadioButton
            selected={false}
            title="Merhaba dünyaya geldim bir anda bir zamanda."
            spreadBehaviour="baseline"
        />
        <TextInput
            title="Test"
            initialValue="Merhaba"
        />
    </View>;
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

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    box: {
        marginVertical: 20,
        height: 60,
        width: 60
    }
});
export default NCoreContext;