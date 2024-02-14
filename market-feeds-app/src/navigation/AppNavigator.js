import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MarketPage from '../pages/MarketPage';
import FeedPage from '../pages/FeedPage';
import Header from '../components/Header';
import ContentPage from '../pages/ContentPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Content">
        <Stack.Screen
          name="Market"
          options={({ route }) => ({
            header: ({ previous, navigation }) => (
              <Header
                pageName={route.name}
                previousPageName={previous}
                navigation={navigation}
              />
            ),
          })}
          component={MarketPage}
        />
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
          component={FeedPage}
        />
        <Stack.Screen
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
          component={ContentPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
