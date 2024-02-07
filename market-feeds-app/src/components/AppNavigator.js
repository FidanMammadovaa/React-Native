import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MarketPage from '../pages/MarketPage';
import FeedPage from '../pages/FeedPage';
import Header from './Header';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Market">
        <Stack.Screen
          name="Market"
          component={MarketPage}
          options={({ route }) => ({
            header: ({ navigation }) => (
              <Header
                pageName={route.name}
                navigation={navigation}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Feed"
          component={FeedPage}
          options={({ route }) => ({
            header: ({ previous, navigation }) => (
              <Header
                pageName={route.name}
                previousPageName={previous}
                navigation={navigation}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
