import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../../screens/LogIn";
import SignUp from "../../screens/SignUp";
import Main from "../../screens/Main";

interface AuthNavigationProps {
    route: any;
    navigation: any;
}
const Stack = createNativeStackNavigator()
export default function AuthNavigation({ route, navigation }: AuthNavigationProps) {


    // console.log(authContext.users);

    return (
        <Stack.Navigator initialRouteName="Main">
            <>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Main">
                    {props => <Main {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Log In">
                    {props => <LogIn {...props} />}
                </Stack.Screen>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Sign Up">
                    {props => <SignUp {...props} />}
                </Stack.Screen>
            </>

        </Stack.Navigator>
    )
}