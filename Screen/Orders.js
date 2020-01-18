import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class Orders extends Component {
    static navigationOptions = {
        headerTitleAlign: {
            textAlign: 'center'
        }
    };

    render() {
        return (
            <View>
                <Text>Orders</Text>
            </View>
        )
    }
}