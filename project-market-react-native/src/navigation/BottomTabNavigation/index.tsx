
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../../screens/Categories";
import Checkout from "../../screens/Checkout";
import AuthNavigation from "../AuthNavigation";
import UserIcon from "../../icons/UserIcon";
import ShoppingCartIcon from "../../icons/ShoppingCartIcon";
import GridIcon from "../../icons/GridIcon";
import { useAuth } from "../../context/AuthContext";
import MainIcon from "../../icons/MainIcon";
import Main from "../../screens/Main";


const Tab = createBottomTabNavigator()


export default function BottomTabNavigation() {


    const authContext = useAuth()

    let userToken = authContext.userToken

    return (
        <Tab.Navigator initialRouteName="Auth">
            {userToken ? (
                <>
                    <Tab.Screen
                        options={{ tabBarIcon: GridIcon }}
                        name="Categories"
                        component={Categories} />
                    <Tab.Screen
                        options={{ tabBarIcon: ShoppingCartIcon }}
                        name="Checkout"
                        component={Checkout} />
                    <Tab.Screen
                        options={{ tabBarIcon: UserIcon }}
                        name="Auth">
                        {props => <AuthNavigation  {...props} />}
                    </Tab.Screen>
                </>
            ) :
                <>
                    <Tab.Screen
                        options={{ tabBarIcon: MainIcon }}
                        name="Main">
                        {props => <Main {...props} />}

                    </Tab.Screen>
                    <Tab.Screen
                        options={{ tabBarIcon: UserIcon }}
                        name="Auth">
                        {props => <AuthNavigation {...props} />}
                    </Tab.Screen>
                </>
            }
        </Tab.Navigator>
    )
}