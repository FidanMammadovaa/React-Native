import React, { useEffect, useState } from "react";
import { ScrollView, FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import { Category, useCategoryContext } from "../context/CategoryContext";
import CategoryItem from "../components/items/CategoryItem";

interface CategoriesContainerProps {
  navigation?: any;
}

export default function CategoriesContainer({ navigation }: CategoriesContainerProps) {
  const categoryContext = useCategoryContext();
  const [categories, setCategories] = useState<Category[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await categoryContext.fetchCategories();
      setCategories(fetchedCategories);
    };

    fetchData();
  }, [categoryContext]);

  const renderItem = ({ item }: ListRenderItemInfo<Category>) => (
    <CategoryItem navigation={navigation} categoryItem={item} key={item.id.toString()} />
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        categories ?
          (
            <FlatList
              contentContainerStyle={styles.containerStyle}
              data={categories}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()
              }
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 8 }
              }
            />
          )
          : <></>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'space-between',
    padding: 16
  },

});
