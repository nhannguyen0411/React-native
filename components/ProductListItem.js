import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductListItem(props) {
    const { product, onAddToCart } = props;

    return (
        <View>
            <View style={styles.container}>
                <Image resizeMode='contain' style={styles.img} source={{ uri: product.images[0].url }}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>
                            {product.price}
                        </Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => onAddToCart(product)}>
                            <Text style={styles.cartText}>Mua +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#DDD'
    },
    info: {
        padding: 8
    },
    img: {
        height: 150,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    name: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center'
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    },
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    }
})