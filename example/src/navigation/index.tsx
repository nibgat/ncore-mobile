import React from "react";
import {
    NavigationContainer
} from "@react-navigation/native";
import {
    createNativeStackNavigator
} from '@react-navigation/native-stack';

import {
    PageContainerPage,
    BottomSheetPage,
    TextInputPage,
    StateCardPage,
    SearchBoxPage,
    SelectBoxPage,
    CheckBoxPage,
    RowItemPage,
    WelcomePage,
    ButtonPage,
    DialogPage,
    HeaderPage,
    SwitchPage,
    ChipPage,
    TextPage
} from "../pages";
import {
    NCoreTheme
} from "../../../src/core";

const RootStack = createNativeStackNavigator();

const Root = () => {
    const {
        colors
    } = NCoreTheme.useContext();

    return <NavigationContainer>
        <RootStack.Navigator
            screenOptions={{
                animation: "slide_from_right",
                headerStyle: {
                    backgroundColor: colors.layer1
                },
                headerTitleStyle: {
                    color: colors.body
                },
                headerTintColor: colors.body
            }}
        >
            <RootStack.Screen
                name="Welcome"
                component={WelcomePage}
                options={{
                    headerShown: false,
                }}
            />
            <RootStack.Screen
                name="Text"
                component={TextPage}
            />
            <RootStack.Screen
                name="Button"
                component={ButtonPage}
            />
            <RootStack.Screen
                name="PageContainer"
                component={PageContainerPage}
            />
            <RootStack.Screen
                name="Dialog"
                component={DialogPage}
            />
            <RootStack.Screen
                name="BottomSheet"
                component={BottomSheetPage}
            />
            <RootStack.Screen
                name="Header"
                component={HeaderPage}
            />
            <RootStack.Screen
                name="TextInput"
                component={TextInputPage}
            />
            <RootStack.Screen
                name="Switch"
                component={SwitchPage}
            />
            <RootStack.Screen
                name="StateCard"
                component={StateCardPage}
            />
            <RootStack.Screen
                name="SearchBox"
                component={SearchBoxPage}
            />
            <RootStack.Screen
                name="RowItem"
                component={RowItemPage}
            />
            <RootStack.Screen
                name="Chip"
                component={ChipPage}
            />
            <RootStack.Screen
                name="SelectBox"
                component={SelectBoxPage}
            />
            <RootStack.Screen
                name="CheckBox"
                component={CheckBoxPage}
            />
        </RootStack.Navigator>
    </NavigationContainer>;
};
export default Root;
