import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../../screens/LogIn";
import SignUp from "../../screens/SignUp";
import { useAuth } from "../../context/AuthContext";
import SignOut from "../../screens/SignOut";

interface AuthNavigationProps {
    route: any;
    navigation: any;
}
const Stack = createNativeStackNavigator()
export default function AuthNavigation({ route, navigation }: AuthNavigationProps) {

    const authContext = useAuth()

    // console.log(authContext.users);

    return (
        <Stack.Navigator initialRouteName="Sign Up">
            {authContext.userToken ?
                <>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Sign Out">
                        {props => <SignOut {...props} />}
                    </Stack.Screen>
                </>
                : <>
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
            }

        </Stack.Navigator>
    )
}