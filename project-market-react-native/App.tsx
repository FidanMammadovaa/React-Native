import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/context/AuthContext';
import RootNavigation from './src/navigation/RootNavigation';
import CategoryProvider from './src/context/CategoryContext';
import ProductProvider from './src/context/ProductContext';
import CartProvider from './src/context/CartContext';
export default function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
        <ProductProvider>
          <CartProvider>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </CartProvider>
        </ProductProvider>
      </CategoryProvider>
    </AuthProvider>
  );
}

