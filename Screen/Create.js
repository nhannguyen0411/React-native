import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CreateItem from '../components/CreateItem';

class ScreenCreate extends Component {

    static navigationOptions = {
        headerShown: false
    };

    render() {
        return (
            <View style={styles.container}>
                <CreateItem navigation={this.props.navigation}/>
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

export default ScreenCreate;