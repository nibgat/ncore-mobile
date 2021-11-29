import React from "react";
import {
    StyleSheet,
    Button,
    View,
    Text
} from "react-native";
import {
    NCoreProvider,
    useNCoreLocales,
    useNCoreTheme
} from "ncore-mobile";
import trTR from "../../src/core/locales/variants/tr.json";

const App = () => {
    const {
        activeTheme,
        switchTheme,
        colors
    } = useNCoreTheme();

    const {
        data
    } = useNCoreLocales();

    console.error(data);

    return <View
        style={[
            styles.container,
            {
                backgroundColor: colors?.layer1
            }
        ]}
    >
        <Text>Hello NİBGAT®. Your selected theme is {activeTheme}</Text>
        <Button
            title="Switch Theme"
            onPress={() => {
                switchTheme(activeTheme === "dark" ? "light" : "dark");
            }}
        />
    </View>;
};

const NCoreContext = () => {
    return <NCoreProvider
        locales={[trTR]}
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