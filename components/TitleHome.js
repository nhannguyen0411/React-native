import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Brand from '../image/titi.png';
export default function TitleHome() {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text_header}>
                TiTi
            </Text> */}
            <View style={{flex: 1, width: `100%`, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
                <View style={{height: 50, width: 100, backgroundColor: 'blue'}}></View>
            </View>
            {/* <Image style={styles.img} source={Brand} /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DDD',
        width: `100%`
    },
    text_header: {
        textAlign: 'center',
        fontSize: 40,
        width: '50%',
    },
    img: {
    }
});