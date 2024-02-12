import { StyleSheet } from 'react-native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <AppNavigator />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
