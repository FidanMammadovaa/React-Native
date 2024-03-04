import { Image, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Product } from "../../context/ProductContext";
import { BaseText } from "../Unknown/DesignSystem";
import FavoriteIcon from "../../icons/FavoriteIcon";
import CustomButton from "../Unknown/CustomButton";
import SmallShoppingCart from "../../icons/SmallShoppingCart";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

interface ProductItemProps {
    navigation?: any;
    productItem: Product;
    style?: StyleProp<ViewStyle>
}



export default function ProductItem({ style, navigation, productItem }: ProductItemProps) {

    const cartContext = useCart()
    const authContext = useAuth()

    const addItemToCart = () => {
        console.log(authContext.currentUserId);
        console.log(productItem.id);
        
        cartContext.fetchAddItem(authContext.currentUserId, productItem.id)
    };

    const navigateToProductItem = () => {
        navigation.navigate("Item",
        {
            productId: productItem.id
        })
    }

    return (
        <View>
            {productItem && productItem.imageUrl ? (
                <View style={[styles.container, style]} >
                    <View style={styles.imgContainerStyle}>
                        <Pressable onPress={navigateToProductItem}>
                            <Image
                                style={styles.imgStyle}
                                source={{ uri: productItem.imageUrl }} />
                        </Pressable>
                    </View>
                    <View>
                        <BaseText
                            text={`${productItem.name}`}
                            weight="semiBold"
                            color="#2D0C57"
                            fontSize={18} />
                        <View style={styles.container}>
                            <BaseText
                                text={`${productItem.price} `}
                                weight="semiBold700"
                                color="#2D0C57"
                                alignSelf="center"
                                fontSize={22} />
                            <BaseText
                                text={`${productItem.currency}/${productItem.unitOfMeasurement}`}
                                weight="normal"
                                alignSelf="center"
                                color="#9586A8"
                                fontSize={18} />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <CustomButton
                                onPress={() => { }}
                                width={78}
                                height={40}
                                borderRadius={8}
                                backgroundColor="#FFFFFF">
                                <FavoriteIcon />
                            </CustomButton>
                            <CustomButton
                                onPress={addItemToCart}
                                width={78}
                                height={40}
                                borderRadius={8}
                                backgroundColor="#0ACF83">
                                <SmallShoppingCart fill="#FFFFFF" />
                            </CustomButton>
                        </View>
                    </View>
                </View >
            ) : <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flexDirection: 'row',
    },
    imgStyle: {
        alignSelf: 'flex-start',
        width: 178,
        height: 128,
        borderRadius: 8,
    },
    imgContainerStyle:
    {
        paddingRight: 20
    },
    buttonsContainer:
    {
        flexDirection: 'row',
        top: 34,
        gap: 10
    },
});