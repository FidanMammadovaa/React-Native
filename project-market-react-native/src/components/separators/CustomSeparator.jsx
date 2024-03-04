import React from "react";
import { View, StyleSheet } from "react-native";

const ShoppingCartItemSeparator = () => {
    return <View style={styles.separatorStyle} />;
};

const styles = StyleSheet.create({
    separatorStyle: {
        height: 1,
        backgroundColor: "#2D0C57",
        marginVertical: 10,
    },
});

export default ShoppingCartItemSeparator;
