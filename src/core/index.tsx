import React, {
    FC
} from "react";
import NCoreContext from "./context";
import {
    NCoreConfig 
} from "./types";
import {
    GestureHandlerRootView
} from "react-native-gesture-handler";
import styles from "./stylesheet";

type NCoreProvider = {
    config?: NCoreConfig
};

const NCoreProvider: FC<NCoreProvider> = ({
    children,
    config
}) => {
    return <GestureHandlerRootView
        style={styles.container}
    >
        <NCoreContext
            config={config}
        >
            {children}
        </NCoreContext>
    </GestureHandlerRootView>;
};
export default NCoreProvider;
