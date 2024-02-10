import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MarketPage from '../pages/MarketPage';
import FeedPage from '../pages/FeedPage';
import Header from '../components/Header';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Market">
        <Stack.Screen
          name="Market"
          options={({ route }) => ({
            header: ({ navigation }) => (
              <Header
                pageName={route.name}
                navigation={navigation}
              />
            ),
          })}
        >
          {props => <MarketPage {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Feed"
          options={({ route }) => ({
            header: ({ previous, navigation }) => (
              <Header
                pageName={route.name}
                previousPageName={previous}
                navigation={navigation}
              />
            ),
          })}
        >
          {props => <FeedPage {...props} />}
        </Stack.Screen>
        {/* <Stack.Screen
          name="Content"
          options={({ route }) => ({
            header: ({ previous, navigation }) => (
              <Header
                pageName={route.name}
                previousPageName={previous}
                navigation={navigation}
              />
            ),
          })}
        >
          {props => <FeedPage {...props} />}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
