import { ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import FeedContainer from '../components/FeedContainer';

export default function FeedPage() {
  let feedsArray = [
    {
      id: 1,
      image: 'https://yt3.googleusercontent.com/ytc/AIf8zZQFIav-CGDM-djgxKpkTT8jUhM3bRxLTKfjPpzd=s900-c-k-c0x00ffffff-no-rj',
      title: 'Exciting News in Tech World',
      feedContent: 'A groundbreaking discovery in the tech industry has just been announced, promising to revolutionize the way we interact with digital devices.',
      publishTime: '7m ago',
    },
    {
      id: 2,
      image: 'https://static.toiimg.com/thumb/66461463/adventure-tourism.jpg?width=1200&height=900',
      title: 'Travel Adventures: Exploring Hidden Gems',
      feedContent: 'Embark on a virtual journey to explore the hidden gems and breathtaking landscapes discovered by travel enthusiasts around the globe.',
      publishTime: '7m ago',
    },
    {
      id: 3,
      image: 'https://yt3.googleusercontent.com/ytc/AIf8zZTNQrWCDYvqABMHJYgZ4Bt_WpbzRrcNAeP13ld2yQ=s900-c-k-c0x00ffffff-no-rj',
      title: 'Culinary Delights: Mouthwatering Recipes',
      feedContent: 'Discover delectable recipes from various cuisines, each crafted to tantalize your taste buds and inspire your culinary adventures.',
      publishTime: '7m ago',
    },
    {
      id: 4,
      image: 'https://media.self.com/photos/6398b36c72eb56f726777d06/1:1/w_2400,h_2400,c_limit/weekly-workout-schedule.jpeg',
      title: 'Fitness Tips for a Healthier You',
      feedContent: 'Get motivated with fitness experts sharing valuable tips on staying active, maintaining a healthy lifestyle, and achieving your fitness goals.',
      publishTime: '7m ago',
    },
  ];

  return (
    <ScrollView>
      <SearchBar />
      <FeedContainer feedsArray={feedsArray} />
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex',
  },
});
