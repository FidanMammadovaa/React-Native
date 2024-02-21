import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MarketPage from "../../screens/MarketScreen";
import FeedPage from "../../screens/FeedScreen";
import ContentPage from "../../screens/ContentScreen";
import Header from "../../components/Header";
const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen
                options={({ route }) => ({
                    header: ({ previous, navigation }) => (
                        <Header
                            pageName={route.name}
                            previousPageName={previous}
                            navigation={navigation}
                        />
                    ),
                })}
                name="Market" component={MarketPage} />
            <Tab.Screen options={({ route }) => ({
                header: ({ previous, navigation }) => (
                    <Header
                        pageName={route.name}
                        previousPageName={previous}
                        navigation={navigation}
                    />
                ),
            })} name="Feed" component={FeedPage} />
            <Tab.Screen options={({ route }) => ({
                header: ({ previous, navigation }) => (
                    <Header
                        pageName={route.name}
                        previousPageName={previous}
                        navigation={navigation}
                    />
                ),
            })} name="Content" component={ContentPage} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;