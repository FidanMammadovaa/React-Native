import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Category, useCategoryContext } from '../../context/CategoryContext';
import BackDrop from '../../containers/BackDrop';
import { BaseText } from '../Unknown/DesignSystem';

interface CategoryItemProps {
    categoryItem: Category;
    navigation?: any;
}

export default function CategoryItem({categoryItem, navigation }: CategoryItemProps) {
    
    const categoryContext = useCategoryContext();
    const [count, setCount] = useState<number>(0);
    

    useEffect(() => {
        const fetchData = async () => {
            const fetchedCount = await categoryContext.fetchProductsCountByCategoryId(categoryItem.id);
            setCount(fetchedCount);
        };

        fetchData();
    }, [categoryItem.id, categoryContext]);


    const navigateToProductScreen = () =>
    {
        navigation.navigate('Products', {
            categoryId: categoryItem.id
          });
    }
    return (
        categoryItem && categoryItem.imageUrl ? (
            <BackDrop
                width={176}
                height={210}
                borderColor="#DBD8DD"
                backgroundColor="#FFFFFF"
                borderRadius={8}
                marginBottom={10}
            >
                <View style={styles.container}>
                    <Pressable onPress={navigateToProductScreen}>
                        <Image
                            style={styles.imgStyle}
                            source={{ uri: categoryItem.imageUrl }} />
                    </Pressable>
                    <BaseText
                        text={categoryItem.name}
                        weight="bold"
                        fontSize={18}
                        color="#2D0C57"
                        textStyles={{ paddingLeft: 10 }}
                    />
                    {count !== null ?
                        <BaseText
                            weight='normal'
                            fontSize={16}
                            color='#9586A8'
                            textStyles={{ paddingLeft: 10 }}
                            text={`(${count.toString()})`} />
                        : <BaseText
                            weight={'normal'}
                            fontSize={16}
                            color='#9586A8'
                            text='Out of stock' />}
                </View>
            </BackDrop>
        ) : <></>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    imgStyle: {
        alignSelf: 'flex-start',
        width: 174,
        height: 150,
        borderRadius: 8,
    }
});