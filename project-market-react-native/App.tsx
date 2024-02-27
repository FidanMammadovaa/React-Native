import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/context/AuthContext';
import RootNavigation from './src/navigation/RootNavigation';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <NavigationContainer>
          {/* <BottomTabNavigation /> */}
          <RootNavigation />
        </NavigationContainer>
      </AuthProvider>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
