import React, { useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
const Stack = createStackNavigator();

export default function RootNavigation() {
    const authContext = useContext(AuthContext)

    let userToken = authContext.userToken
    let navigation = useNavigation()

    console.log(userToken);
    
    console.log(authContext.users);
    
    useEffect(() => {
        const navigateToApp = async () => {
            if (userToken) {
                console.log(userToken);
                navigation.navigate('AppNavigation');
            }
        };

        navigateToApp();
    }, [userToken]);

    return (
        <Stack.Navigator initialRouteName='AuthNavigation'>
            {userToken ? (
                <>
                    <Stack.Screen
                        name="BottomTabNav"
                        options={{ headerShown: false }}
                        component={BottomTabNavigation}
                    />
                    <Stack.Screen
                        name="AppNavigation"
                        options={{ headerShown: false }}
                        component={AppNavigation}
                    />
                </>
            ) : (
                <Stack.Screen
                    name="AuthNavigation"
                    options={{ headerShown: false }}
                >
                    {props => <AuthNavigation {...props} />}
                </Stack.Screen>
            )}
        </Stack.Navigator>
    );
}
