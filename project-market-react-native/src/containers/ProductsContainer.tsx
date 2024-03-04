import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native"
import { Product, useProductContext } from "../context/ProductContext";
import { useEffect, useState } from "react";
import ProductItem from "../components/items/ProductItem";

interface ProductsContainerProps {
    navigation: any;
    categoryId: number
}

export default function ProductsContainer({ navigation, categoryId }: ProductsContainerProps) {


    const productContext = useProductContext()
    let [products, setProducts] = useState([] as Product[])

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProducts = await productContext.fetchProductsByCategoryId(categoryId);
            setProducts(fetchedProducts);
        };

        fetchData();
    }, [categoryId, productContext]);



    const renderItem = ({ item }: ListRenderItemInfo<Product>) => (
        <ProductItem style={styles.itemStyle} navigation={navigation} productItem={item} key={item.id.toString()} />
    );

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}

        />
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        padding: 16
    }
})