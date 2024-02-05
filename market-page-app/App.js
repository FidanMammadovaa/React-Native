import {  StyleSheet,  View } from 'react-native';
import MarketPage from './src/pages/MarketPage';

export default function App() {
  return (
    <View >
      <MarketPage />
    </View>

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