import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MarketPage from '../../screens/MarketScreen';
import FeedPage from '../../screens/FeedScreen';
import Header from '../../components/Header';
import ContentPage from '../../screens/ContentScreen';

const Stack = createStackNavigator();

export default function AppNavigation () {
  return (
      <Stack.Navigator>
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
  );
};

