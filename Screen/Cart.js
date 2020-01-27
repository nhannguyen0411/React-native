import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CartContext } from '../contexts/Cart';
import CartListItem from '../components/CartListItem';
import { _changeFormatToVND } from '../utils/Number';
export default class Cart extends Component {
    static navigationOptions = {
        headerTitleAlign: {
            textAlign: 'center'
        }
    };

    render() {
        return (
            <CartContext.Consumer>
                {   
                    ({ cartItems, countIncrease, removeFromCart, sum }) => (
                        cartItems.length < 1 ? 
                        <View style={[styles.container_indicator, styles.horizontal]}>
                            <Text style={styles.text}>Thêm đồ vào giỏ hàng đi nào</Text>
                        </View> :
                        <ScrollView>
                            {/* <FlatList
                                data={cartItems}
                                renderItem={({ item }) => 
                                    <CartListItem cart={item} onCountIncrease={countIncrease} onRemoveFromCart={removeFromCart}/>
                                }
                                keyExtractor={(item) => `${item.id}`}
                                contentContainerStyle={styles.container}
                            /> */}
                            <View style={styles.container}>{
                                cartItems.map( (item, index) => (
                                    <CartListItem key={index} cart={item} onCountIncrease={countIncrease} onRemoveFromCart={removeFromCart}/>
                                ))
                            }</View>
                            <View style={styles.bottom}>
                                <View style={styles.contentLeft}>
                                    <Text style={[styles.text, {marginBottom: 8}]}>Tổng giá:</Text>
                                    <Text style={{fontSize: 15, color:'#999', letterSpacing: 2}}>{_changeFormatToVND(sum)}</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.5} style={styles.contentRight}>
                                    <Text style={styles.btn}>Thanh Toán</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                        
                    )
                }
            </CartContext.Consumer>
        )
    }
}

const styles = StyleSheet.create({
    container_indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        paddingHorizontal: 8,
        paddingVertical: 16
    },
    bottom: {
        position: 'relative',
        bottom: 0,
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentLeft: {
        flex: 1,
        justifyContent: 'center'
    },
    contentRight: {
        backgroundColor: '#2089dc',
        padding: 16,
        borderRadius: 5,
        width: '50%'
    },
    text: {
        fontSize: 16, 
        fontWeight: '700'
    },
    btn: {
        textAlign: 'center', 
        color: '#FFF', 
        fontSize: 16
    }
});