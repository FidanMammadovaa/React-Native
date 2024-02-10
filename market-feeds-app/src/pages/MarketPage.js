import { ScrollView } from 'react-native';
import TrendingSection from '../components/TrendingSection';
import HotDealsSection from '../components/HotDealsSection';
import SearchBar from '../components/SearchBar';
import PopularSection from '../components/PopularSection';
import HitsSection from '../components/HitsSection';
export default function MarketPage() {
  return (
    <ScrollView>
      <SearchBar />
      <HotDealsSection />
      <TrendingSection />
      <PopularSection/>
      <HitsSection/>
    </ScrollView>

  );
}

