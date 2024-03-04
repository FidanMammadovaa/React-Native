import React, { useEffect, useState } from "react";
import { Dimensions, ListRenderItemInfo, Text, View } from "react-native";
import { CartItem, useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ShoppingCartItem from "../components/items/ShoppingCartItem";
import ShoppingCartItemSeparator from "../components/separators/CustomSeparator";
import CustomHeader from "../components/Unknown/CustomHeader";
import CustomButton from "../components/Unknown/CustomButton";
import { BaseText } from "../components/Unknown/DesignSystem";
interface ShoppingCartProps {
    navigation?: any;
    route?: any;
}

export default function ShoppingCart({ navigation, route }: ShoppingCartProps) {
    const cartContext = useCart();
    const authContext = useAuth()

    useEffect(() => {
        const fetchData = async () => {
            await cartContext.fetchGetCartByUserId(authContext.currentUserId);
        };

        fetchData();
    }, []);


    const renderItem = ({ item }: ListRenderItemInfo<CartItem>) => (
        <ShoppingCartItem navigation={navigation} cartItem={item} />
    );


    const navigateToCheckout = () =>
    {
        navigation.navigate('Checkout')
    }

    const width = Dimensions.get('window').width
    return (
        <>
            {cartContext.cart ? (
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <CustomHeader onPress={() => { navigation.navigate("Categories") }} title={'Shopping Cart'} />

                    <FlatList
                        data={cartContext.cart.shoppingCartItems}
                        renderItem={renderItem}
                        ItemSeparatorComponent={ShoppingCartItemSeparator}
                        keyExtractor={(item) => item.id.toString()}
                    />
                    <CustomButton
                        onPress={navigateToCheckout}
                        width={width}
                        height={56}
                        backgroundColor="#0ACF83"
                        borderRadius={8}
                    >
                        <BaseText
                        text='PLACE ORDER'
                            color="#FFFFFF"
                            weight="semiBold"
                            fontSize={15} />
                    </CustomButton>
                </ScrollView>
            ) : (
                <View>
                    <Text>Your cart is empty.</Text>
                </View>
            )}
        </>
    );
}
