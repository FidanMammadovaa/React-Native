
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Checkout from "../../screens/Checkout";
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
import SignOut from "../../screens/SignOut";


const Tab = createBottomTabNavigator()

interface BottomTabNavigationProps {
    navigation?: any
}

export default function BottomTabNavigation({ navigation }: BottomTabNavigationProps) {


    return (
        <Tab.Navigator initialRouteName="Main" screenOptions={{ tabBarShowLabel: false }}>
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
                            textStyles={{ fontSize: 16, fontWeight: '600', alignItems: 'center' }}
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
                    headerShown: false,
                    tabBarIcon: UserIcon,
                }}
                name="Sign Out"
                component={SignOut} />

        </Tab.Navigator>
    )
}