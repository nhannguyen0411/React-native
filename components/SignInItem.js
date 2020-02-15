import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import Logo from '../image/Brand-white.png';
import { HOST } from '../key';
import { _handleSaveInStorage } from '../utils/Storage';
class SignInItem extends Component {

    state = {
        email: '',
        password: '',
        errorEmail: '',
        errorPassword: '',
        errorMessage: ''
    }

    _handleOnLogin = async () => {
        const { email, password } = this.state;
        fetch(`${HOST}/api/account/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then( async (json) => {
            if(json.success) {
                this.setState({
                    errorEmail: '',
                    errorPassword: ''
                })
                _handleSaveInStorage('token', json.token);
                console.log("about to run");
                this.callApi(json.token);
            }
            else {
                this.setState({
                    errorEmail: json.errorEmail,
                    errorPassword: json.errorPassword,
                    errorMessage: json.message
                })
            }
        })
    }

    callApi = async (token) => {
        console.log('running');
        const bearer = `Bearer ${token}`;
        const { navigation } = this.props;
        await fetch(`${HOST}/api/verify`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': bearer,
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then(json => {
            if(json.success) {
                navigation.navigate('Settings', {name: json.name, token});
            } else {
                console.log("Lỗi ở call api sign item: ", json.message);
            }
            
        })
    }

    render() {
        const { onSignIn, email, password, errorEmail, errorMessage, errorPassword } = this.state;
        const { navigation } = this.props;
        return (
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.container}>
                    <Image resizeMode='contain' source={Logo} style={styles.logo}/>
                    <Input
                        label='Your Email Address'
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='ios-mail'
                                type='ionicon'
                                size={24}
                                color='black'
                            />
                        }
                        value={email}
                        onChangeText={(email) => this.setState({email})}
                        leftIconContainerStyle={styles.icon}
                        inputStyle={styles.input}
                        errorMessage={errorEmail}
                    />
                    <Input
                        label='Password'
                        errorMessage={errorPassword}
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='ios-lock'
                                type='ionicon'
                                size={24}
                                color='black'
                            />
                        }
                        value={password}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
                        leftIconContainerStyle={styles.icon}
                        inputStyle={{width: 200}}
                        labelStyle={{marginTop: 20}}
                    />
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._handleOnLogin}>
                        <Text style={styles.btn_text} >Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={onSignIn}>
                        <Text style={styles.text}>Forgot Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.text} >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        height: `100%`
    },
    logo: {
        width: `100%`,
        height: `20%`
    },
    icon: {
        marginLeft: 0, 
        marginRight: 5
    },
    btn: {
        width: `80%`,
        backgroundColor: `#2089dc`,
        borderRadius: 5,
        marginTop: 20
    },
    btn_text: {
        textAlign: 'center',
        padding: 12,
        fontSize: 16,
        color: '#FFF'
    },
    text: {
        color: `#2089dc`,
        fontSize: 16,
        marginTop: 10
    },
    inputError: {
        
    }
});

export default SignInItem;