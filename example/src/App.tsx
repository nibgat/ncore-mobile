import React from 'react';
import {
    Button,
    View
} from 'react-native';
import {
    NCoreTheme,
    NCore,
    Text
} from "ncore-mobile";

const ContextAPI = () => {
    const {
        activeTheme,
        colors
    } = NCoreTheme.useContext();

    return <View
        style={{
            backgroundColor: colors.layer1,
            flex: 1
        }}
    >
        <Text
            variant='header2'
        >
            Hi
        </Text>
        <Button
            title="TEST"
            onPress={() => {
                NCoreTheme.setTheme(activeTheme === "dark" ? "light" : "dark");
            }}
        />
    </View>;
};

const App = () => {
    return <NCore.Provider>
        <ContextAPI/>
    </NCore.Provider>;
};
export default App;
