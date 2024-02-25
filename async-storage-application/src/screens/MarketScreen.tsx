import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import TrendingSection from '../components/sections/TrendingSection';
import HotDealsSection from '../components/sections/HotDealsSection';
import SearchBar from '../components/SearchBar';
import PopularSection from '../components/sections/PopularSection';
import HitsSection from '../components/sections/HitsSection';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
export default function MarketPage() {
  const authContext = useContext(AuthContext)

  const signOut = async () => {
    await authContext.signOut()
  }

  return (
    <ScrollView>
      <SearchBar />
      <Pressable style={styles.buttonStyle} onPress={signOut}><Text style={styles.buttonText}>Log Out</Text></Pressable>
      <HotDealsSection />
      <TrendingSection />
      <PopularSection />
      <HitsSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'green',
    width: 100,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});