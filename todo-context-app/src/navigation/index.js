import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ToDoList from "../screens/ToDoList"
import NewTask from "../screens/NewTask"
import HomeScreen from "../screens/HomeScreen"
import { useState } from "react"
const Stack = createNativeStackNavigator()


export default function RootNavigation() {

    return (
        <Stack.Navigator initialRouteName="My Todo List">
            <Stack.Screen
                options={{ headerShown: false }}
                name="My Todo List"
                component={ToDoList}
                initialParams={{ contentText: 'October 20, 2022', titleShown: true }} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Add New Task"
                initialParams={{ contentText: 'Add New Task', titleShown: false }}>
                {props => <NewTask {...props} />}
            </Stack.Screen>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home Screen"
                component={HomeScreen} />
        </Stack.Navigator>
    )
}