import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import TrendingSection from '../components/TrendingSection';
import HotDealsSection from '../components/HotDealsSection';
import SearchBar from '../components/SearchBar';

export default function MarketPage() {
  return (
    <SafeAreaView >
      {/* <View style={styles.container}> */}
        <Header />
        <SearchBar />
        <HotDealsSection />
        <TrendingSection />
      {/* </View> */}
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
