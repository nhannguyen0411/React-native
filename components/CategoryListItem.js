import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Shirt from '../image/t-shirt.png';


export default function CategoryListItem(props) {
    const { category } = props 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.name}</Text>
            <Image style={styles.categoryImg} source={category.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        borderColor: '#CCC',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: '#FFF',
        marginBottom: 16
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    categoryImg: {
        width: 64,
        height: 64
    }
});