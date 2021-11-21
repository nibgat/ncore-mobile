import React from "react";
import {
    StyleSheet,
    Button,
    View,
    Text
} from "react-native";
import {
    NCoreProvider,
    useNCoreTheme
} from "ncore-mobile";

const App = () => {
    const {
        activeTheme,
        switchTheme,
        colors
    } = useNCoreTheme();

    return <NCoreProvider>
        <View
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
                onPress={() => switchTheme("dark")}
            />
        </View>
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
export default App;