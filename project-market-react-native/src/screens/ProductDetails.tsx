import { useEffect, useState } from "react";
import { Product, useProductContext } from "../context/ProductContext";
import { StyleSheet, View } from "react-native";
import BackDrop from "../containers/BackDrop";
import { BaseText } from "../components/Unknown/DesignSystem";
import Layout from "../components/Layouts/Layout";
import CustomButton from "../components/Unknown/CustomButton";
import FavoriteIcon from "../icons/FavoriteIcon";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import CheckoutIcon from "../icons/CheckoutIcon";

interface ProductDetailsProps {
    route: any;
    navigation: any;
};

export default function ProductDetails({ route, navigation }: ProductDetailsProps) {
    const productContext = useProductContext()
    const { productId } = route.params
    const [product, setProduct] = useState({} as Product)

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProduct = await productContext.fetchProductById(productId);
            setProduct(fetchedProduct);
        };

        fetchData();
    }, [productId]);

    const cartContext = useCart()
    const authContext = useAuth()

    const addItemToCart = () => {
        console.log(authContext.currentUserId);
        
        cartContext.fetchAddItem(authContext.currentUserId, productId)
    };

    return (
        <Layout imageSource={product.imageUrl}>
            <BackDrop
                style={{ padding: 16 }}
                height={420}
                alignItems="flex-start"
                justifyContent="space-between"
                backgroundColor="#FFFFFF"
                borderRadius={8}>
                <BaseText
                    text={product.name}
                    color="#2D0C57"
                    fontSize={30}
                    weight="semiBold700" />
                <View style={styles.rowContainer}>
                    <BaseText
                        text={product.price}
                        color="#2D0C57"
                        fontSize={32}
                        weight="semiBold700" />
                    <BaseText
                        text={` ${product.currency}/${product.unitOfMeasurement}`}
                        color="#9586A8"
                        fontSize={32}
                        weight="normal" />
                </View>
                <BaseText
                    text={`~ ${product.unitQuantity} / ${product.unitOfMeasurement}`}
                    color="#06BE77"
                    fontSize={17}
                    weight="medium" />
                <BaseText
                    text={product.country}
                    color="#2D0C57"
                    fontSize={22}
                    weight="semiBold700" />
                <BaseText
                    text={product.description}
                    color="#9586A8"
                    fontSize={22}
                    weight="normal" />
                <View style={styles.buttonContainer}>
                    <CustomButton
                        style={{ borderColor: '#D9D0E3', borderWidth: 1 }}
                        borderRadius={8}
                        width={78}
                        height={56}
                        backgroundColor="#FFFFFF"
                        onPress={() => { }}>
                        <FavoriteIcon />
                    </CustomButton>
                    <CustomButton
                        borderRadius={8}
                        width={276}
                        height={56}
                        backgroundColor="#0BCE83"
                        onPress={addItemToCart}>
                        <View style={styles.rowContainer}>
                            <CheckoutIcon fill="#FFFFFF" />
                            <BaseText
                                color="#FFFFFF"
                                text=' ADD TO CART'
                                fontSize={16}
                                weight="semiBold" />
                        </View>
                    </CustomButton>
                </View>
            </BackDrop>
        </Layout>

    )
}


const styles = StyleSheet.create({
    rowContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    buttonContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 100
    },
})