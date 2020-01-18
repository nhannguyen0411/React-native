import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../contexts/Cart';
import axios from 'axios';
import ProductListItem from '../components/ProductListItem';
class Category extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('categoryProduct').name,
            headerTitleAlign: {
                textAlign: 'center'
            }
        }
    };

    state = {
        products: []
    }

    componentDidMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('categoryProduct').id;
        axios.get(`/products?category=${id}`)
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        const { products } = this.state;
        return (
            <>
                {   
                    products.length < 1 ? 
                    <View style={[styles.container_indicator, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View> :
                    <CartContext.Consumer>
                        {
                            ({ addToCart }) => (
                                <FlatList
                                    data={products}
                                    numColumns={2}
                                    renderItem={({ item }) => 
                                        <View style={styles.wrapper}>
                                            <ProductListItem product={item} onAddToCart={addToCart} />
                                        </View>
                                    }
                                    keyExtractor={(item) => `${item.id}`}
                                    contentContainerStyle={styles.container}
                                />
                            )
                        }
                    </CartContext.Consumer>
            }
            </>
        )
    }
}

const styles = StyleSheet.create({
    container_indicator: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    container: {
        paddingHorizontal: 8,
        paddingVertical: 16
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
});

export default Category;