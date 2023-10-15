import React from 'react';
import {
    StatusBar,
    Image,
    View
} from 'react-native';
import {
    PageContainer,
    NCoreLocale,
    NCoreTheme,
    Button,
    NCore,
    Text
} from "ncore-mobile";
import stylesheet from './stylesheet';

const lightIcon = require("../assets/lightlogo.png");
const darkIcon = require("../assets/darklogo.png");

const ContextAPI = () => {
    const {
        activeTheme,
        colors,
        spaces
    } = NCoreTheme.useContext();

    const {
        activeLocale,
        localize
    } = NCoreLocale.useContext();

    return <PageContainer
        contentContainerStyle={stylesheet.contentContainer}
    >
        <StatusBar
            barStyle={activeTheme === "dark" ? "light-content" : "dark-content"}
            backgroundColor={colors.layer1}
        />

        <Image
            source={activeTheme === "dark" ? darkIcon : lightIcon}
            resizeMode="contain"
            style={stylesheet.logo}
        />

        <Text
            variant="header2"
            style={{
                marginBottom: spaces.content
            }}
        >
            {localize("ncore-mobile")}
        </Text>
        <Text
            variant="header6"
            color="hideBody"
            style={[
                stylesheet.welcomeText,
                {
                    marginBottom: spaces.content * 4
                }
            ]}
        >
            {localize("welcome-description")}
        </Text>

        <View
            style={[
                stylesheet.toolsContainer,
                {
                    marginBottom: spaces.content
                }
            ]}
        >
            <Button
                spreadBehaviour="free"
                color={activeTheme === "dark" ? "constrastBody" : "body"}
                textColor={activeTheme === "dark" ? "body" : "constrastBody"}
                title={`${localize("active-theme")}: ${activeTheme.charAt(0).toLocaleUpperCase()}${activeTheme.slice(1)}`}
                style={[
                    stylesheet.toolButtonLeft,
                    {
                        paddingRight: spaces.container / 2,
                        paddingLeft: spaces.container / 2,
                        marginRight: spaces.content / 2
                    }
                ]}
                onPress={() => {
                    NCoreTheme.setTheme(activeTheme === "dark" ? "light" : "dark");
                }}
            />
            <Button
                spreadBehaviour="free"
                color="constrastBody"
                textColor="body"
                title={`${localize("active-language")}: ${activeLocale.toLocaleUpperCase()}`}
                style={[
                    stylesheet.toolButtonRight,
                    {
                        paddingRight: spaces.container / 2,
                        paddingLeft: spaces.container / 2,
                        marginLeft: spaces.content / 2
                    }
                ]}
                onPress={() => {
                    NCoreLocale.switchLocale(activeLocale === "en" ? "tr" : "en");
                }}
            />
        </View>

        <Button
            spreadBehaviour="stretch"
            title={localize("button")}
            onPress={() => {
                NCoreTheme.setTheme(activeTheme === "dark" ? "light" : "dark");
            }}
        />
    </PageContainer>;
};

const App = () => {
    return <NCore.Provider>
        <ContextAPI/>
    </NCore.Provider>;
};
export default App;
