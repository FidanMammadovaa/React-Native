import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import HomeNavigation from './HomeNavigation';

const Stack = createStackNavigator();

export default function RootNavigation() {
    return (
        <Stack.Navigator initialRouteName="Content">
            <Stack.Screen
                name="BottomTabNav"
                options={{ headerShown: false }}
                component={BottomTabNavigation}/>
            <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={HomeNavigation}/>
        </Stack.Navigator>
    );
}
