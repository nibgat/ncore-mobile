import React from "react";
import {
    NavigationContainer 
} from "@react-navigation/native";
import {
    createNativeStackNavigator 
} from "@react-navigation/native-stack";

import HomeScreen from "../pages/home";
import TextScreen from "../pages/text";
import ColorsScreen from "../pages/colors";
import ButtonScreen from "../pages/button";

const Stack = createNativeStackNavigator();

const RootNav = () => {
    return <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                name="Text"
                component={TextScreen}
            />
            <Stack.Screen
                name="Colors"
                component={ColorsScreen}
            />
            <Stack.Screen
                name="Button"
                component={ButtonScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>;
};
export default RootNav;
