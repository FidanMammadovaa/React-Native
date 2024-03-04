import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CustomHeader from "../../components/Unknown/CustomHeader"
import Categories from "../../screens/Categories"
import Products from "../../screens/Products"
import Item from "../../screens/Item"





interface MarketNavigationProps {
    route?: any,
    navigation?: any
}


const Stack = createNativeStackNavigator()

export default function MarketNavigation({ route, navigation }: MarketNavigationProps) {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen
                options={{
                    header: (props) => <CustomHeader onPress={() => navigation.navigate('Main')} {...props} title={'Categories'} />,
                }}
                name="Categories"
                component={Categories} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Products"
                component={Products} />
            <Stack.Screen 
                options={{headerShown: false}}
                name="Item"
                component={Item}/>
        </Stack.Navigator>
    )
}