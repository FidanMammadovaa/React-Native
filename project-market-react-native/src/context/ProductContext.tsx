import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  categoryId: number;
  country: string;
  unitOfMeasurement: string;
  unitQuantity: number;
  imageUrl: string;
}

type ProductContextType = {
  baseUrl?: string;
  fetchProductsByCategoryId: (id: number) => Promise<Product[]>;
  fetchProductById: (id: number) => Promise<Product>;

};

export const useProductContext = () => {
  return useContext(ProductContext);
};

const getProductsByCategoryId = async (baseUrl: string, id: number) => {
  try {
    const response = await axios.get<Product[]>(`${baseUrl}/Category/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching data: ", error);
    throw error;
  }
};

const getProductById = async (baseUrl: string, id: number) => {
  try {
    const response = await axios.get<Product>(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching data: ", error);
    throw error;
  }
};


const baseUrl = "https://localhost:7219/Product";

export const ProductContext = createContext<ProductContextType>({
  baseUrl: baseUrl,
  fetchProductsByCategoryId: async () => {
    throw new Error("fetchProductsByCategoryId is not implemented");
  },
  fetchProductById: async () => 
  {
    throw new Error("fetchProductById is not implemented");
  }
});

export default function ProductProvider({ children }: { children: ReactNode }) {
  const fetchProductsByCategoryId = async (id: number) => {
    try {
      const fetchedProducts = await getProductsByCategoryId(baseUrl, id);
      return fetchedProducts;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  const fetchProductById = async (id: number) => {
    try {
      const fetchedProduct = await getProductById(baseUrl, id);
      return fetchedProduct;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  const contextValue = {
    baseUrl,
    fetchProductsByCategoryId,
    fetchProductById
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
