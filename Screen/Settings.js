import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class Setting extends Component {
    static navigationOptions = {
        headerTitleAlign: {
            textAlign: 'center'
        }
    };

    render() {
        return (
            <View>
                <Text>Setting</Text>
            </View>
        )
    }
}