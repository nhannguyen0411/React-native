import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { _changeFormatToK } from '../utils/Number';

export default function CartListItem(props) {
    const { cart, onCountIncrease, onRemoveFromCart } = props;
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.cartImg} source={{ uri: cart.images[0].url }}/>
                <View style={styles.title}>
                    <Text style={styles.text}>{cart.name}</Text>
                    <Text style={[styles.text, {color: '#AAA'}]}>{_changeFormatToK(cart.price)}</Text>
                </View>
                <View style={styles.quantity}>
                    <Button
                        onPress={ () => onRemoveFromCart(cart) }
                        icon={
                            <Icon
                            name="ios-arrow-down"
                            size={15}
                            type='ionicon'
                            color="white"
                            />
                        }
                    />
                    <Text style={{paddingHorizontal: 8, minWidth: 20}}>{cart.quantity}</Text>
                    <Button
                        onPress={ () => onCountIncrease(cart) }
                        icon={
                            <Icon
                            name="ios-arrow-up"
                            size={15}
                            type='ionicon'
                            color="white"
                            />
                        }
                    />
                </View>
            </View>
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
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: '700',
        flex: 1,
        paddingLeft: 16
    },
    text: {
        fontSize: 16,
        marginVertical: 4
    },
    cartImg: {
        width: 64,
        height: 64
    },
    quantity: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});