import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import bg from '../image/bgSignIn.png';

export default function WallPaper(props) {
    return (
        <ImageBackground source={bg} style={styles.picture}>
            {props.children}
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
});