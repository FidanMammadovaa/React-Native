import { ScrollView } from 'react-native';
import TrendingSection from '../components/sections/TrendingSection';
import HotDealsSection from '../components/sections/HotDealsSection';
import SearchBar from '../components/SearchBar';
import PopularSection from '../components/sections/PopularSection';
import HitsSection from '../components/sections/HitsSection';
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

