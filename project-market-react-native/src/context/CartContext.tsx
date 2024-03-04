import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Product } from "./ProductContext";

export interface Cart {
  id: number;
  shoppingCartItems: CartItem[];
}

export interface CartItem
{
  id: number,
  productId: number;
  cartId: number;
  count: number;
}

type CartContextType = {
  cart: Cart;
  fetchAddItem: (userId: number, productId: number) => Promise<void>
  fetchGetCartByUserId: (userId: number) => Promise<void>
};

interface CartProviderProps {
  children: ReactNode;
}

export const useCart = () => {
  return useContext(CartContext);
};


const baseUrl = 'https://localhost:7219/ShoppingCart'

const addItemToCart = async (userId: number, productId: number, baseUrl: string) => {
  try {
    const url = `${baseUrl}/AddItem`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId, productId: productId }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error occurred while adding item to the cart: ", error);
    throw error;
  }
};

const getCartByUserId = async (userId: number, baseUrl: string) => {
  try {
    const url = `${baseUrl}/${userId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error occurred while getting shopping cart by user id: ", error);
    throw error;
  }
}


export const CartContext = createContext<CartContextType>({
  cart: {} as Cart,
  fetchAddItem: async (productId: number, userId: number) => { },
  fetchGetCartByUserId: async (userId: number) => {}
});


export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart>({} as Cart);

  useEffect(() => {
    console.log(cart);
  }, [cart])

  

  const fetchAddItem = async (userId: number, productId: number, ) => {
    try {
      let response = await addItemToCart(userId, productId, baseUrl);
      console.log(response.message);
      await fetchGetCartByUserId(userId)

    } catch (error) {
    }
  };


  const fetchGetCartByUserId = async (userId: number) => {
    try {
      let response = await getCartByUserId(userId, baseUrl);

      if (response.cart)
      {
        setCart(response.cart)
      }

    } catch (error) {
    }
  };

  const contextValue: CartContextType = {
    cart,
    fetchAddItem,
    fetchGetCartByUserId
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
