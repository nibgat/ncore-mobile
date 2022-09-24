import React from "react";
import Navigation from "./navigation";
import {
    GestureHandlerRootView 
} from "react-native-gesture-handler";
import {
    NCoreProvider
} from "ncore-mobile";
import {
    en,
    tr
} from "./locales";
import stylesheet from "./stylesheet";

const App = () => {
    return <Navigation/>;
};

const NCoreContext = () => {
    return <GestureHandlerRootView
        style={stylesheet.container}
    >
        <NCoreProvider
            config={{
                locales: [
                    tr,
                    en
                ]
            }}
        >
            <App/>
        </NCoreProvider>
    </GestureHandlerRootView>;
};
export default NCoreContext;
