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
        image1: '',
        image2: '',
        language: 'Shirt',
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
            this.setState({ image1: result.uri });
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
        this.setState({ image1: result.uri });
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
        //const formData = new formData();
        const { name, image1, price } = this.state;
        let formData = new FormData()
        formData.append('image', image1)
        fetch(`${HOST}/upload`, {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "multipart/form-data"
            },
            body: formData
        })
        .then(res => res.json())
        .then(json => {
            if(json.success) {
                this.setState({image2: json.data})
            } else {
                console.log('Error')
            }
        })
    };

    render() {
        const { onSignIn, name, price, errorPrice, errorName, errorPassword, image1, image2, language } = this.state;
        const { navigation } = this.props;
        return (
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.container}>
                    <Image resizeMode='contain' source={Logo} style={styles.logo}/>
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
                            selectedValue={language}
                            prompt={language}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                        }>
                            <Picker.Item label="Shirt" value="Shirt" />
                            <Picker.Item label="Skirt" value="Skirt" />
                        </Picker>
                    </View>
                    <Button title='Choose' onPress={this._handleChoose}/>
                    {image1 ?
                    <Image resizeMode='contain' source={{ uri: image1 }} style={{ width: 200, height: 200 }} /> : null}
                    {image2 ?
                    <Image resizeMode='contain' source={{ uri: image2 }} style={{ width: 50, height: 50 }} /> : null}
                    <Button title='Sell' onPress={this._handleOnSale}/>
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
    }
});

export default CreateItem;