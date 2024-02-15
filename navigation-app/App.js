import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/navigation';
export default function App() {
  return (

    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>

  );
}

