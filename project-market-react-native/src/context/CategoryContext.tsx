import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

type CategoryContextType = {
  baseUrl?: string;
  fetchCategories: () => Promise<Category[]>;
  fetchProductsCountByCategoryId: (id: number) => Promise<number>;
  fetchCategoryById: (id: number) => Promise<Category>;
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};

const getAllCategories = async (baseUrl: string) => {
  try {
    const response = await axios.get(baseUrl);
    // console.log(baseUrl);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching data: ", error);
    throw error;
  }
};


const getCategoryById = async (baseUrl: string, id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    // console.log(baseUrl);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching data: ", error);
    throw error;
  }
};
const getProductsCountByCategoryId = async (baseUrl: string, id: number) => {
  try {
    const response = await axios.get<number>(`${baseUrl}/${id}/ProductsCount`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching data: ", error);
    throw error;
  }
};

const baseUrl = "https://localhost:7219/Category";

export const CategoryContext = createContext<CategoryContextType>({
  baseUrl: baseUrl,
  fetchCategories: async () => [],
  fetchProductsCountByCategoryId: async (id: number) => 0,
  fetchCategoryById: async (id: number) => ({
    id: 0,
    name: "",
    imageUrl: ""
  } as Category)
});

export default function CategoryProvider({ children }: { children: ReactNode }) {

  const fetchCategories = async () => {
    try {
      const fetchedCategories = await getAllCategories(baseUrl);
      // console.log(fetchedCategories);
      return fetchedCategories
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchCategoryById = async (id: number) => {
    try {
      const fetchedCategory = await getCategoryById(baseUrl, id);
      return fetchedCategory;
    } catch (error) {
      console.error("Error fetching category:", error);
      throw error;
    }
  };

  const fetchProductsCountByCategoryId = async (id: number) => {
    try {
      const response = await getProductsCountByCategoryId(baseUrl, id);
      return response;
    } catch (error) {
      console.error("Error occurred while fetching data: ", error);
      throw error;
    }
  };


  const contextValue = {
    baseUrl,
    fetchCategories,
    fetchProductsCountByCategoryId,
    fetchCategoryById
  };

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
}