import React, {
    useEffect,
    useState
} from "react";
import {
    Image
} from "react-native";
import stylesheet from "./stylesheet";
import {
    useNCoreLocalization,
    PageContainer,
    useNCoreTheme,
    SearchBox,
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

const BUTTONS: Array<{
    title: keyof NCore.Translation | string;
    useTranslationForTitle: boolean;
    spreadBehaviour: "stretch" | "baseline" | "free";
    navigationName: string;
    color: keyof NCore.Colors;
    textColor: keyof NCore.Colors;
    style: any;
}> = [
    {
        title: "textTypo",
        useTranslationForTitle: true,
        spreadBehaviour: "stretch",
        navigationName: "Text",
        color: "layer3",
        textColor: "body",
        style: (spaces: NCore.SpacesTokens) => ({
            marginBottom: spaces.content
        })
    },
    {
        title: "colors",
        useTranslationForTitle: true,
        spreadBehaviour: "stretch",
        navigationName: "Colors",
        color: "layer3",
        textColor: "body",
        style: (spaces: NCore.SpacesTokens) => ({
            marginBottom: spaces.content
        })
    },
    {
        title: "button",
        useTranslationForTitle: true,
        spreadBehaviour: "stretch",
        navigationName: "Button",
        color: "layer3",
        textColor: "body",
        style: (spaces: NCore.SpacesTokens) => ({
            marginBottom: spaces.content
        })
    },
    {
        title: "TextInput",
        useTranslationForTitle: false,
        spreadBehaviour: "stretch",
        navigationName: "TextInput",
        color: "layer3",
        textColor: "body",
        style: (spaces: NCore.SpacesTokens) => ({
            marginBottom: spaces.content * 4
        })
    }
];

const Home = () => {
    // const navigation = useNavigation();

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

    const [data, setData] = useState<Array<{
        title: keyof NCore.Translation | string;
        useTranslationForTitle: boolean;
        spreadBehaviour: "stretch" | "baseline" | "free";
        navigationName: string;
        color: keyof NCore.Colors;
        textColor: keyof NCore.Colors;
        style: any;
    }>>(BUTTONS);

    useEffect(() => {
        
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
        <SearchBox
            placeholder={localize("search")}
            onChangeText={searchText => {
                if(searchText && searchText.length) {
                    setData(BUTTONS.filter(e => {
                        if(e.useTranslationForTitle) {
                            // @ts-ignore
                            return localize(e.title).match(searchText);
                        } else {
                            return e.title.match(searchText);
                        }
                    }));
                } else {
                    setData(BUTTONS);
                }
            }}
            cleanable={true}
            style={{
                marginBottom: spaces.content * 4
            }}
        />
        {
            data.map((item, index) => {
                return <Button
                    key={`button-${index}`}
                    // @ts-ignore
                    title={item.useTranslationForTitle ? localize(item.title) : item.title}
                    spreadBehaviour={item.spreadBehaviour}
                    onPress={() => {
                        // @ts-ignore
                        navigation.navigate(item.navigationName);
                    }}
                    color={item.color}
                    textColor={item.textColor}
                    style={item.style(spaces)}
                />;
            })
        }
    </PageContainer>;
};
export default Home;
