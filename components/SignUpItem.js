import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import Logo from '../image/Brand-white.png';
import { HOST } from '../key';
class SignUpItem extends Component {

    state = {
        email: '',
        password: '',
        name: '',
        phone: '',
        errorEmail: '',
        errorPassword: '',
        errorName: '',
        errorPhone: '',
    }

    _handleOnSignUp = async () => {
        const { email, password, name, phone } = this.state;
        const { navigation } = this.props;
        fetch(`${HOST}/api/account/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                name,
                phone
            })
        })
        .then(res => res.json())
        .then(json => {
            if(json.success) {
                this.setState({
                    errorEmail: '',
                    errorPassword: '',
                    errorName: '',
                    errorPhone: ''
                })
                navigation.navigate('SignIn');
            }
            else {
                this.setState({
                    errorEmail: json.errorEmail,
                    errorPassword: json.errorPassword,
                    errorName: json.errorName,
                    errorPhone: json.errorPhone
                })
            }
        })
    }

    render() {
        const { email, name, phone, password, errorEmail, errorPassword, errorName, errorPhone } = this.state;
        const { navigation } = this.props;
        return (
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.container}>
                    <Image resizeMode='contain' source={Logo} style={styles.logo}/>
                    <Input
                        label='Your name'
                        placeholder='what is your name'
                        value={name}
                        onChangeText={(name) => this.setState({name})}
                        leftIconContainerStyle={styles.icon}
                        errorMessage={errorName}
                    />
                    <Input
                        label='Your Email Address'
                        placeholder='Email'
                        value={email}
                        onChangeText={(email) => this.setState({email})}
                        leftIconContainerStyle={styles.icon}
                        errorMessage={errorEmail}
                        labelStyle={{marginTop: 20}}
                    />
                    <Input
                        label='Password'
                        errorMessage={errorPassword}
                        placeholder='Password'
                        value={password}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
                        leftIconContainerStyle={styles.icon}
                        inputStyle={{width: 200}}
                        labelStyle={{marginTop: 20}}
                    />
                    <Input
                        label='Your phone number'
                        placeholder='Phone'
                        value={phone}
                        onChangeText={(phone) => this.setState({phone})}
                        leftIconContainerStyle={styles.icon}
                        errorMessage={errorPhone}
                        labelStyle={{marginTop: 20}}
                    />
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._handleOnSignUp}>
                        <Text style={styles.btn_text} >Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.text} >Already have account ?</Text>
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

export default SignUpItem;