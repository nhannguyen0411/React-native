import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
class Login extends Component {
    render() {
        const { param, onLogin, onShow, onPressName, onPressPass, onInputUser, onInputPass } = this.props;
        return (
            <View style={styles.container_body}>
                <View style={{marginVertical: 15}}>
                    <View style={{position: "relative", marginTop: 10}}>
                        <Text style={[param.isLabelName && styles.label, !param.isLabelName && styles.labelFocus]} for='username'>Username</Text>
                        <TextInput
                            id='username'
                            value={param.username}
                            onFocus={onPressName}
                            onBlur={onPressName}
                            onChangeText={onInputUser}
                            style={[styles.input, , !param.isLabelName && styles.inputFocus]}
                        />
                    </View>
                    { param.isLoginName && <Text style={[styles.text, {color: "red"}]}>{err}</Text>}
                    <View style={styles.viewStyle}>
                        <Text style={[param.isLabelPass && styles.label, !param.isLabelPass && styles.labelFocus]} for='password'>Password</Text>
                        <TextInput
                            id='password'
                            value={param.password}
                            onFocus={onPressPass}
                            onBlur={onPressPass}
                            onChangeText={onInputPass}
                            secureTextEntry={ !param.hidden ? true : false}
                            style={[styles.inputPass, , !param.isLabelPass && styles.inputFocus]}
                        />
                        <TouchableOpacity style={{position: 'absolute', right: 0, bottom: 10}} onPress={onShow}>
                            <Text>
                                { param.hidden ? 'Show' : 'Hide'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    { param.isLoginPass && <Text style={[styles.text, {color: "red"}]}>{err}</Text>}
                    <TouchableOpacity style={styles.btnLogin} onPress={onLogin} activeOpacity={0.7}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>Login</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity>
                    <Text style={[styles.text, {color: 'rgb(33, 150, 243)'}]}>Quên mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Hoặc đăng nhập với</Text>
                </TouchableOpacity>
                
                {/* <View style={styles.container_loginOther}>
                    <TouchableOpacity style={styles.buttonOther}>
                        <Image style={styles.iconImage} source={Chat} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOther}>
                        <Image style={styles.iconImage} source={Chat} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOther}>
                        <Image style={styles.iconImage} source={Chat} />
                    </TouchableOpacity>
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container_body: {
        paddingHorizontal: 10
    },
    input: {
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: '#bbb'
    },
    inputFocus: {
        borderBottomWidth: 1,
        borderColor: 'blue',
        borderStyle: "solid"
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginTop: 10
    },
    label: {
        position: 'absolute',
        bottom: 20,
        left: 5
    },
    labelFocus: {
        position: 'absolute', 
        top: -5, 
        left: 5
    },
    inputPass: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 14,
        lineHeight: 23,
        flex: 2
    },
    btnLogin: {
        marginTop: 10,
        paddingVertical: 12,
        fontWeight: '700',
        backgroundColor: '#f00'
    },
    container_loginOther: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    text: {
        textAlign: 'center', 
        paddingVertical: 10
    },
    buttonOther: {
        backgroundColor: '#49a8f9',
        paddingVertical: 12,
        paddingHorizontal: 48
    },
    iconImage: {
        width: 32,
        height: 32
    }
});

export default Login;