import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

class ScreenLoad extends Component {

    _loadData = () => {
        const { navigation } = this.props;
        const index = navigation.getParam('index');
        const token = navigation.getParam('token');
        if(index === 2) {
            token ? navigation.navigate("Create", { token }) : navigation.navigate('SignIn');
        }
    }

    componentDidMount() {
        this._loadData();
    }

    render() {
        return (
            <View style={[styles.container_indicator, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
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
export default ScreenLoad;
