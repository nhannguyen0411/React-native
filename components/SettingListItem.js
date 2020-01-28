import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class SettingListItem extends Component {
    render() {
        const { list, index, switchScreen } = this.props
        return (
            <ListItem
                onPress={() => switchScreen(index)}
                title={list.title}
                leftIcon={{ name: list.icon, type: 'ionicon' }}
                bottomDivider
                chevron
            />
        )
    }
}