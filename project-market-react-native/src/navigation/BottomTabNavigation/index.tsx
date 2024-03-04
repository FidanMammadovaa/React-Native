
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Checkout from "../../screens/Checkout";
import AuthNavigation from "../AuthNavigation";
import UserIcon from "../../icons/UserIcon";
import ShoppingCartIcon from "../../icons/ShoppingCartIcon";
import GridIcon from "../../icons/GridIcon";
import { useAuth } from "../../context/AuthContext";
import MainIcon from "../../icons/MainIcon";
import Main from "../../screens/Main";
import MarketNavigation from "../MarketNavigation";
import ShoppingCart from "../../screens/ShoppingCart";
import CheckoutIcon from "../../icons/CheckoutIcon";
import CustomHeader from "../../components/Unknown/CustomHeader";


const Tab = createBottomTabNavigator()

interface BottomTabNavigationProps {
    navigation?: any
}

export default function BottomTabNavigation({ navigation }: BottomTabNavigationProps) {


    const authContext = useAuth()

    let userToken = authContext.userToken

    return (
        <Tab.Navigator initialRouteName="Auth" screenOptions={{ tabBarShowLabel: false }}>
            {userToken ? (
                <>
                    <Tab.Screen
                        options={{
                            tabBarIcon: MainIcon,
                            headerShown: false
                        }}
                        name="Main">
                        {props => <Main {...props} />}

                    </Tab.Screen>
                    <Tab.Screen
                        options={{
                            tabBarIcon: GridIcon,
                            headerShown: false
                        }}
                        name="MarketNavigation">
                        {props => <MarketNavigation {...props} />}
                    </Tab.Screen>
                    <Tab.Screen
                        options={{
                            header: (props) => (
                                <CustomHeader
                                    {...props}
                                    textStyles={{fontSize: 16, fontWeight: '600', alignItems: 'center'}}
                                    flexDirection="row"
                                    title="Checkout"
                                    onPress={() => {
                                        navigation.navigate("MarketNavigation")
                                    }}
                                />
                            ),
                            tabBarIcon: CheckoutIcon
                        }}
                        name="Checkout"
                        component={Checkout}
                    />
                    <Tab.Screen
                        options={{
                            headerShown: false,
                            tabBarIcon: ShoppingCartIcon,
                        }}
                        name="ShoppingCart"
                        component={ShoppingCart} />
                    <Tab.Screen
                        options={{
                            tabBarIcon: UserIcon
                        }}
                        name="Auth">
                        {props => <AuthNavigation  {...props} />}
                    </Tab.Screen>
                </>
            ) :
                <>
                    <Tab.Screen
                        options={{
                            tabBarIcon: MainIcon,
                        }}
                        name="Main">
                        {props => <Main {...props} />}

                    </Tab.Screen>
                    <Tab.Screen
                        options={{
                            tabBarIcon: UserIcon
                        }}
                        name="Auth">
                        {props => <AuthNavigation {...props} />}
                    </Tab.Screen>
                </>
            }
        </Tab.Navigator>
    )
}