import SearchBar from "../components/SearchBar";
import ProductsContainer from "../containers/ProductsContainer";
import CustomHeader from "../components/Unknown/CustomHeader"
import { Category, useCategoryContext } from "../context/CategoryContext";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";

interface ProductsProps {
    navigation?: any;
    route?: any;
}

export default function Products({ route, navigation }: ProductsProps) {
    const { categoryId } = route.params;

    const categoryContext = useCategoryContext();
    const [category, setCategory] = useState<Category>();


    useEffect(() => {
        const fetchData = async () => {
            const fetchedCount = await categoryContext.fetchCategoryById(categoryId);
            setCategory(fetchedCount);
        };

        fetchData();
    }, [categoryId, categoryContext]);


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {category ?
                (
                    <View>
                        <CustomHeader onPress={() => navigation.navigate('Categories')} title={`${category.name}`} />
                        <SearchBar />
                        <ProductsContainer navigation={navigation} categoryId={categoryId} />
                    </View>
                ) : <></>
            }
        </ScrollView>
    )

}