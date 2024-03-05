import { useEffect, useState } from "react";
import { CartItem } from "../../context/CartContext";
import { Product, useProductContext } from "../../context/ProductContext";
import { Image, StyleSheet, View } from "react-native";
import BackDrop from "../../containers/BackDrop";
import { BaseText } from "../Unknown/DesignSystem";
import Item from "../../screens/ProductDetails";

interface ShoppingCartItemProps {
    cartItem: CartItem;
    navigation?: any;
}

export default function ShoppingCartItem({ cartItem, navigation }: ShoppingCartItemProps) {

    const productContext = useProductContext()
    const [product, setProduct] = useState({} as Product)

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProduct = await productContext.fetchProductById(cartItem.productId);
            setProduct(fetchedProduct);
        };

        fetchData();
    }, [cartItem.id]);

    return (
        product && product.imageUrl ?
            (
                <View>
                    <View style={styles.container}>
                        <Image source={{ uri: product.imageUrl }} style={styles.imgStyle} />
                        <BaseText
                            text={`Price for 1 ${product.unitOfMeasurement}: ${product.price}`}
                            color="#2D0C57"
                            fontSize={26}
                            weight="semiBold700" />
                        <BaseText
                            text={`Amount: ${cartItem.count} ${product.unitOfMeasurement}`}
                            color="#2D0C57"
                            fontSize={26}
                            weight="semiBold700" />
                        <BaseText
                            text={`Total price: ${product.price * cartItem.count}`}
                            color="#2D0C57"
                            fontSize={32}
                            weight="semiBold700" />
                        <BaseText
                            text={product.description}
                            color="#9586A8"
                            fontSize={22}
                            weight="normal" />
                    </View>
                </View>
            ) : <></>
    )
}

const styles = StyleSheet.create({
    container:
    {
        padding: 16
    },
    imgStyle: {
        width: 250,
        height: 250
    }
});
