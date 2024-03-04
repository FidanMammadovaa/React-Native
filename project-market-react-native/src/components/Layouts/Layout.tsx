import { ReactNode } from "react";
import { Dimensions, Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface LayoutProps {
    backgroundColor?: string;
    children: ReactNode;
    imageSource?: string;
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    style?: StyleProp<ViewStyle>


}


export default function Layout({ backgroundColor, imageSource, justifyContent, style, children }: LayoutProps) {
    const dimensionWidth = Dimensions.get('window').width;
    const styles = StyleSheet.create({
        layoutStyle: {
            flex: 1,
            width: dimensionWidth,
            backgroundColor: backgroundColor,
            justifyContent: justifyContent ? justifyContent : 'space-between',
        },
        imageStyle: {
            flex: 1,
            width: dimensionWidth,
        },
    });

    return (
        <View style={[style, styles.layoutStyle]}>
            {imageSource && <Image source={{ uri: imageSource }} style={styles.imageStyle} />}
            {children}
        </View>
    );
}
