import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CategoryListItem(props) {
    const { category, onPress } = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image style={styles.categoryImg} source={{ uri: category.img }} />
            </View>
        </TouchableOpacity>
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