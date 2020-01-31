import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import Logo from '../image/Brand-white.png';
class SignInItem extends Component {
    render() {
        const { onSignIn } = this.props;
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
                        leftIconContainerStyle={styles.icon}
                        inputStyle={styles.input}
                    />
                    <Input
                        label='Password'
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='ios-lock'
                                type='ionicon'
                                size={24}
                                color='black'
                            />
                        }
                        secureTextEntry={true}
                        leftIconContainerStyle={styles.icon}
                        inputStyle={{width: 200}}
                        labelStyle={{marginTop: 20}}
                        inputContainerStyle={{marginBottom: 20}}
                    />
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={onSignIn}>
                        <Text style={styles.btn_text} >Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.text} activeOpacity={0.5} onPress={onSignIn}>
                        <Text style={styles.btn_text} >Forgot Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.text} activeOpacity={0.5} onPress={onSignIn}>
                        <Text style={styles.btn_text} >Sign Up</Text>
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
        borderRadius: 5
    },
    btn_text: {
        textAlign: 'center',
        padding: 12,
        fontSize: 16,
        color: '#FFF'
    },
    text: {
        color: `#2089dc`,
        fontSize: 16
    }
});

export default SignInItem;