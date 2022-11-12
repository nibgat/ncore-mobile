import React from "react";
import Navigation from "./navigation";
import {
    NCoreProvider
} from "ncore-mobile";
import {
    en,
    tr
} from "./locales";
import stylesheet from "./stylesheet";
import Home from "./pages/home";

const App = () => {
    return <Navigation/>;
};

const NCoreContext = () => {
    return <NCoreProvider
        config={{
            locales: [
                tr,
                en
            ]
        }}
    >
        <Home/>
    </NCoreProvider>;
};
export default NCoreContext;
