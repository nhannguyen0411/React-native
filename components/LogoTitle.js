import React, { Component } from 'react';
import { Image } from 'react-native';
import Brand from '../image/Brand-white.png';

export default class LogoTitle extends Component {
    render() {
      return (
        <Image
            resizeMode='center'
            source={Brand}
        />
      );
    }
}