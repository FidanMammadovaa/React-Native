import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MarketPage from "../../screens/MarketScreen";
import FeedPage from "../../screens/FeedScreen";
import ContentPage from "../../screens/ContentScreen";
import Header from "../../components/Header";
import MarketIcon from "../../icons/MarketIcon";
import ContentIcon from "../../icons/ContentIcon";
import FeedIcon from "../../icons/FeedIcon";
const Tab = createBottomTabNavigator()

export default function BottomTabNavigation () {
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
                    tabBarIcon: MarketIcon
                })}
                name="Market"
                component={MarketPage} />
            <Tab.Screen options={({ route }) => ({
                header: ({ previous, navigation }) => (
                    <Header
                        pageName={route.name}
                        previousPageName={previous}
                        navigation={navigation}
                    />
                ),
                tabBarIcon: FeedIcon
            })} name="Feed" component={FeedPage} />
            <Tab.Screen options={({ route }) => ({
                header: ({ previous, navigation }) => (
                    <Header
                        pageName={route.name}
                        previousPageName={previous}
                        navigation={navigation}
                    />
                ),
                tabBarIcon: ContentIcon
            })} name="Content" component={ContentPage} />
        </Tab.Navigator>
    )
}
