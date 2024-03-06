import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import RootNavigation from './src/navigation';
import ToDoProvider from './src/contexts/ToDoContext';

export default function App() {
  return (
    <ToDoProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ToDoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
