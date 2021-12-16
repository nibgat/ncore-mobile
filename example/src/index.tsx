import React from "react";
import {
    StyleSheet,
    Button,
    View
} from "react-native";
import {
    useNCoreLocale,
    NCoreProvider,
    useNCoreTheme,
    Text
} from "ncore-mobile";
import {
    tr 
} from "./locales";

const App = () => {
    const {
        activeTheme,
        switchTheme,
        colors
    } = useNCoreTheme();

    const {
        activeLocale,
        switchLocale,
        localize
    } = useNCoreLocale();

    return <View
        style={[
            styles.container,
            {
                backgroundColor: colors?.layer1
            }
        ]}
    >
        <Text variant="body">Hello NİBGAT®. Your selected theme is {activeTheme}. And your text is {localize("language")}</Text>
        <Button
            title="Switch Theme"
            onPress={() => {
                switchTheme(activeTheme === "dark" ? "light" : "dark");
            }}
        />
        <Button
            title="Switch Language"
            onPress={() => {
                switchLocale(activeLocale === "en" ? "tr" : "en");
            }}
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