import { SafeAreaView } from 'react-native';
import TrendingSection from '../components/TrendingSection';
import HotDealsSection from '../components/HotDealsSection';
import SearchBar from '../components/SearchBar';

export default function MarketPage() {
  return (
    <SafeAreaView >
        <SearchBar />
        <HotDealsSection />
        <TrendingSection />
    </SafeAreaView>

  );
}

