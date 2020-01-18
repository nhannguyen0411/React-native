import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import axios from 'axios';
class Categories extends Component {

    static navigationOptions = {
        headerTitleAlign: {
            textAlign: 'center'
        }
    };
    state = {
        categories: []
    }
    

    componentDidMount() {
        axios.get("/categories")
            .then( res => 
                this.setState({ categories: res.data })
            )
            .catch(err => console.log(err));
    }

    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <>
                {
                    categories.length < 1 ? 
                    <View style={[styles.container_indicator, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View> :
                    <FlatList 
                        data={categories}
                        renderItem={({ item }) => <CategoryListItem category={item} onPress={() => navigation.navigate('Category', { categoryProduct: item })}/>}
                        keyExtractor={(item) => `${item.id}`}
                        contentContainerStyle={{paddingHorizontal: 16, backgroundColor: '#fffaff', paddingTop: 16}}
                    />
                }
            </>
            
        )
    }
}

const styles = StyleSheet.create({
    container_indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});

export default Categories;