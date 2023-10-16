import React from 'react';
import {
    ActivityIndicator
} from 'react-native';
import {
    PageContainer,
    NCoreTheme,
    NCore
} from "ncore-mobile";
import stylesheet from './stylesheet';
import {
    Montserrat_600SemiBold_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_300Light_Italic,
    Montserrat_600SemiBold,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_300Light,
    useFonts
} from "@expo-google-fonts/montserrat";
import Navigation from "./navigation";

const ContextAPI = () => {
    const {
        colors
    } = NCoreTheme.useContext();

    let [fontsLoaded, fontError] = useFonts({
        "Montserrat-SemiBold-Italic": Montserrat_600SemiBold_Italic,
        "Montserrat-Regular-Italic": Montserrat_400Regular_Italic,
        "Montserrat-Medium-Italic": Montserrat_500Medium_Italic,
        "Montserrat-Light-Italic": Montserrat_300Light_Italic,
        "Montserrat-SemiBold": Montserrat_600SemiBold,
        "Montserrat-Regular": Montserrat_400Regular,
        "Montserrat-Medium": Montserrat_500Medium,
        "Montserrat-Light": Montserrat_300Light
    });

    if(!fontsLoaded && !fontError) {
        return <PageContainer
            scrollable={false}
            style={stylesheet.loadingContainer}
        >
            <ActivityIndicator
                color={colors.primary}
                size="large"
            />
        </PageContainer>;
    }

    return <Navigation/>;
};

const App = () => {
    return <NCore.Provider>
        <ContextAPI/>
    </NCore.Provider>;
};
export default App;
