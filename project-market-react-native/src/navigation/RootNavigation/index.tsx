import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "../BottomTabNavigation";
import AuthNavigation from "../AuthNavigation";
import { useAuth } from "../../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {

  const authContext = useAuth()
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigation">
      {authContext.userToken ?
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        :
        <>
          <Stack.Screen
            name="Auth">
            {props => <AuthNavigation  {...props} />}
          </Stack.Screen>
        </>
      }
    </Stack.Navigator>

  );
}
