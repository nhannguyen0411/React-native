import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import SignInItem from '../components/SignInItem';
import FB from '../image/fb.png';
import TT from '../image/twitter.png';
import IG from '../image/insta.png';

class ScreenLogin extends Component {

    static navigationOptions = {
        // headerTitle: 'Sign In',
        // headerTitleAlign: {
        //     textAlign: 'center'
        // }
        headerShown: false
    };

    state = {
        username: '',
        password: '',
    }

    componentDidMount() {
        
    }

    _handleOnLogin = () => {
        
    }

    onInputLabelPressed = () => {
        this.setState({ hidden: !this.state.hidden });
    };

    render() {
        const { username, password } = this.state;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <SignInItem />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: '100%'
    }
});

export default ScreenLogin;