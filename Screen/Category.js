import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import Shirt from '../image/t-shirt.png';
import Pants from '../image/pants.png';
import Hoodie from '../image/hoodie.png';
import Skirt from '../image/skirt.png';
import Dress from '../image/dress.png';
class Category extends Component {

    state = {
        categories: [
            {
                id: 1,
                name: 'Shirt',
                img: Shirt
            },
            {
                id: 2,
                name: 'Pants',
                img: Pants
            },
            {
                id: 3,
                name: 'Hoodie',
                img: Hoodie
            },
            {
                id: 4,
                name: 'Skirt',
                img: Skirt
            },
            {
                id: 5,
                name: 'Dress',
                img: Dress
            }
        ]
    } 

    render() {
        const { categories } = this.state
        return (
            <FlatList 
                data={categories}
                renderItem={({ item }) => <CategoryListItem category={item} />}
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={{paddingHorizontal: 16}}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 16
    }
});

export default Category;