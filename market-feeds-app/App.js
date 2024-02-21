import { StyleSheet } from 'react-native';
import RootNavigation from './src/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <RootNavigation /> */}
        <BottomTabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'flex',
    // justifyContent: 'center',
  },
});
