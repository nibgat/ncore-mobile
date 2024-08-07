import React from "react";
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
    Text
} from "ncore-mobile";
import stylesheet from "./stylesheet";
import {
    CompositeScreenProps,
    useNavigation
} from "@react-navigation/native";

const lightIcon = require("../../../assets/lightlogo.png");
const darkIcon = require("../../../assets/darklogo.png");

const Welcome = () => {
    const {
        activeTheme,
        colors,
        spaces
    } = NCoreTheme.useContext();

    const {
        activeLocale,
        localize
    } = NCoreLocale.useContext();

    const navigation = useNavigation<CompositeScreenProps<any, any>["navigation"]>();

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

        <View
            style={[
                stylesheet.seperator,
                {
                    backgroundColor: colors.seperator,
                    marginBottom: spaces.content * 2,
                    marginTop: spaces.content
                }
            ]}
        />

        <Button
            spreadBehaviour="stretch"
            title="Text"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("Text");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Button"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("Button");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Page Container"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("PageContainer");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Dialog"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("Dialog");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Bottom Sheet"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("BottomSheet");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Header"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("Header");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Text Input"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("TextInput");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Switch"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("Switch");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="State Card"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("StateCard");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Search Box"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("SearchBox");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Row Item"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("RowItem");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Chip"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("Chip");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Select Box"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("SelectBox");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Check Box"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("CheckBox");
            }}
        />
        <Button
            spreadBehaviour="stretch"
            title="Radio Button"
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                navigation.navigate("RadioButton");
            }}
        />
    </PageContainer>;
};
export default Welcome;
