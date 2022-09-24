import React, {
    useEffect
} from "react";
import {
    Image
} from "react-native";
import stylesheet from "./stylesheet";
import {
    useNCoreLocalization,
    PageContainer,
    useNCoreTheme,
    Button,
    Text
} from "ncore-mobile";
import {
    useNavigation 
} from "@react-navigation/native";

const LOGO: Record<NCore.ThemeKey, any> = {
    "dark": require("../../assets/logo/darklogo.png"),
    "light": require("../../assets/logo/lightlogo.png")
};

const Home = () => {
    const navigation = useNavigation();

    const {
        activeLocale,
        switchLocale,
        localize
    } = useNCoreLocalization();

    const {
        activeTheme,
        switchTheme,
        spaces
    } = useNCoreTheme();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    });

    return <PageContainer
        style={{
            paddingTop: spaces.container
        }}
    >
        <Image
            source={LOGO[activeTheme]}
            style={stylesheet.logo}
            height={200}
            width={200}
        />
        <Text
            variant="header2"
            style={[
                stylesheet.title,
                {
                    marginBottom: spaces.content * 4
                }
            ]}
        >
            {localize("appName")}
        </Text>
        <Button
            title={`${localize("activeTheme")}: ${activeTheme}`}
            spreadBehaviour="stretch"
            variant="outline"
            onPress={() => {
                switchTheme(activeTheme === "dark" ? "light" : "dark");
            }}
            style={{
                marginBottom: spaces.content * 2
            }}
        />
        <Button
            title={`${localize("activeLanguage")}: ${activeLocale}`}
            spreadBehaviour="stretch"
            variant="outline"
            color="attention"
            onPress={() => {
                switchLocale(activeLocale === "en" ? "tr" : "en");
            }}
            style={{
                marginBottom: spaces.content * 4
            }}
        />
        <Button
            title={localize("textTypo")}
            spreadBehaviour="stretch"
            onPress={() => {
                // @ts-ignore
                navigation.navigate("Text");
            }}
            color="layer3"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
        />
        <Button
            title={localize("colors")}
            spreadBehaviour="stretch"
            onPress={() => {
                // @ts-ignore
                navigation.navigate("Colors");
            }}
            color="layer3"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
        />
        <Button
            title={localize("button")}
            spreadBehaviour="stretch"
            onPress={() => {
                // @ts-ignore
                navigation.navigate("Button");
            }}
            color="layer3"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
        />
    </PageContainer>;
};
export default Home;
