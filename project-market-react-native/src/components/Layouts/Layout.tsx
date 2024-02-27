import { ReactNode } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

interface LayoutProps {
    backgroundColor: string;
    children: ReactNode;
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
}

const width = Dimensions.get('screen').width;

export default function Layout({ backgroundColor, justifyContent, children }: LayoutProps) {
    const styles = StyleSheet.create({
        layoutStyle: {
            flex: 1,
            width: width,
            backgroundColor: backgroundColor,
            justifyContent: justifyContent ? justifyContent : 'space-between',
        },
    });

    return (
        <View style={styles.layoutStyle}>
            {children}
        </View>
    );
}
