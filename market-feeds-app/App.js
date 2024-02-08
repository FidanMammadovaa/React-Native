import { StyleSheet } from 'react-native';
import AppNavigator from './src/components/AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  return (
    // <View >
    //   <MarketPage />
    // </View>
    <SafeAreaView style={styles.container}>
      <AppNavigator />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex',
    // justifyContent: 'center',
  },
});
