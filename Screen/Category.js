import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CategoryListItem />
                <CategoryListItem />
                <CategoryListItem />
            </View>
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