import React from "react";
import {
    StyleSheet,
    View
} from "react-native";
import {
    useNCoreLocale,
    NCoreProvider,
    useNCoreTheme,
    Button,
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
        <Text variant="body">Hello NİBGAT®. Your selected theme is {activeTheme}. Your text is "{localize("corePagesSelectPageValidationNoMoreSelectable")}" and your localize is "{localize("language")}"</Text>
        <Button
            title="Switch Theme"
            onPress={() => {
                switchTheme(activeTheme === "dark" ? "light" : "dark");
            }}
            color="danger"
            variant="outline"
            size="small"
            style={{
                marginBottom: 20
            }}
        />
        <Button
            title="Switch Language"
            onPress={() => {
                switchLocale(activeLocale === "en" ? "tr" : "en");
            }}
            size="large"
            style={{
                marginBottom: 20
            }}
        />
        <Button
            title="Switch Language"
            onPress={() => {
                switchLocale(activeLocale === "en" ? "tr" : "en");
            }}
            size="medium"
            variant="filled"
            style={{
                marginBottom: 20
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