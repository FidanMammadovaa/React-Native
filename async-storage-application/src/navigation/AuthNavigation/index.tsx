import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../components/Header";
import LoginScreen from "../../screens/LoginScreen";
import RegistrationScreen from "../../screens/RegistrationScreen";
import HomeScreen from "../../screens/HomeScreen";

const Stack = createStackNavigator();

const CustomHeader = ({ route, navigation }) => {
  return <Header pageName={route.name} navigation={navigation} />;
};

export default function AuthNavigation({navigation}) {

  return (
    <Stack.Navigator initialRouteName='Log In'>
      <Stack.Screen
        name="Log In"
        options={{
          header: (props) => <CustomHeader {...props} />,
        }}
      >
        {props => <LoginScreen  {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="Sign Up"
        options={{
          header: (props) => <CustomHeader {...props} />,
        }}
      >
        {props => <RegistrationScreen  {...props}  />}
      </Stack.Screen>
      <Stack.Screen
        name="Home"
        options={{
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

