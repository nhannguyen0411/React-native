import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


class ScreenHome extends Component {

    _handleOnPress = () => {
        this.props.navigation.navigate('About');
    }
    render() {
        return (
            <View>
                <Button onPress={this._handleOnPress} title='Press' color='red' />
            </View>
        )
    }
}

export default ScreenHome;