import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import TitleHome from '../components/TitleHome';

class ScreenHome extends Component {
    static navigationOptions = {
        // headerTitle: () => <TitleHome />
        headerShown: false
    }

    _handleOnPress = () => {
        this.props.navigation.navigate('About');
    }
    render() {
        return (
            <View>
                {/* <Button onPress={this._handleOnPress} title='Press' color='red' /> */}
            </View>
        )
    }
}

export default ScreenHome;