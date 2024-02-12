import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";
import Header from "../components/Header";

const Stack = createStackNavigator();

const CustomHeader = ({ route, navigation }) => {
  return <Header pageName={route.name} navigation={navigation} />;
};

export const AppNavigator = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Log In'>
        <Stack.Screen
          name="Log In"
          options={{
            header: (props) => <CustomHeader {...props} />,
          }}
          component={LoginPage}
        />
        <Stack.Screen
          name="Sign Up"
          options={{
            header: (props) => <CustomHeader {...props} />,
          }}
          component={RegistrationPage}
        />
        <Stack.Screen
          name="Home"
          options={{
          }}
          component={HomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

