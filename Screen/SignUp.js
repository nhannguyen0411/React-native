import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SignUpItem from '../components/SignUpItem';

class ScreenSignUp extends Component {

    static navigationOptions = {
        headerShown: false
    };

    render() {
        return (
            <View style={styles.container}>
                <SignUpItem navigation={this.props.navigation}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: '100%'
    }
});

export default ScreenSignUp;