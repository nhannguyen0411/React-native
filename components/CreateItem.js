import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert, Picker } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import Logo from '../image/Brand-white.png';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { HOST } from '../key';
import { _handleSaveInStorage } from '../utils/Storage';
class CreateItem extends Component {

    state = {
        image: '',
        category: 'Shirt',
        name: '',
        price: '',
        errorName: '',
        errorPrice: ''
    }

    componentDidMount() {
        this.getPermissionAsync();
        console.log('hi');
    }
    
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }
    
    _pickLibraryImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [6, 7],
            quality: 1
        });
        console.log("Pick Image: ", result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    _pickCameraImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [6, 7],
            quality: 1
        });
        console.log(result);

        if (!result.cancelled) {
        this.setState({ image: result.uri });
        }
    };

    _handleChoose = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Choose image from library', onPress: () => this._pickLibraryImage()},
              {text: 'Take a photo', onPress: () => this._pickCameraImage()},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              }
            ],
            {cancelable: false}
        );
    }

    _handleOnSale = () => {
        const { name, image, price, category } = this.state;
        const { navigation } = this.props;
        const token = navigation.getParam('token');
        const bearer = `Bearer ${token}`;
        let formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('category', category)
        fetch(`${HOST}/api/upload`, {
            method: 'post',
            headers: new Headers({
                'Authorization': bearer,
                "Content-category": "multipart/form-data"
            }),
            body: formData
        })
        .then(res => res.json())
        .then(json => {
            if(json.success) {
                console.log(json);
            } else {
                console.log('Error')
            }
        })
    };

    render() {
        const { name, price, errorPrice, errorName, image, category } = this.state;
        const { navigation } = this.props;
        return (
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.container}>
                    <Image resizeMode='contain' source={Logo} style={styles.logo}/>
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '700', marginBottom: 15}}>What would you like to sell?</Text>
                    <Input
                        label='Name product'
                        placeholder='Name product'
                        value={name}
                        onChangeText={(name) => this.setState({name})}
                        errorMessage={errorName}
                    />
                    <Input
                        label='Price product'
                        placeholder='Price product'
                        value={price}
                        onChangeText={(price) => this.setState({price})}
                        errorMessage={errorPrice}
                    />
                    <View>
                        <Text>Category:</Text>
                        <Picker
                            selectedValue={category}
                            prompt={category}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({category: itemValue})
                        }>
                            <Picker.Item label="Shirt" value="Shirt" />
                            <Picker.Item label="Skirt" value="Skirt" />
                        </Picker>
                    </View>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._handleChoose}>
                        <Text style={styles.btn_text} >Choose Image</Text>
                    </TouchableOpacity>
                    {image ?
                    <Image resizeMode='contain' source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} /> : null}
                    {image ? <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._handleOnSale}>
                        <Text style={styles.btn_text} >Sell</Text>
                    </TouchableOpacity> : null}
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
        height: `15%`
    },
    btn: {
        width: `50%`,
        backgroundColor: `#2089dc`,
        borderRadius: 5,
        marginTop: 20
    },
    btn_text: {
        textAlign: 'center',
        padding: 12,
        fontSize: 16,
        color: '#FFF'
    }
});

export default CreateItem;