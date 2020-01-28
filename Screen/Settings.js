import React, { Component } from 'react';
import { FlatList } from 'react-native';
import SettingListItem from '../components/SettingListItem';
export default class Setting extends Component {
    static navigationOptions = {
        headerTitleAlign: {
            textAlign: 'center'
        }
    };

    state = {
        list: [
            {
                id: 1,
                title: 'Sign in',
                icon: 'ios-contact'
            },
            {
                id: 2,
                title: 'Mail',
                icon: 'ios-mail'
            },
            {
                id: 3,
                title: 'Notification',
                icon: 'ios-notifications'
            }
        ]
    }

    switchSignInScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('SignIn');
    }

    switchScreen = (index) => {
        const { navigation } = this.props;
        if(index === 1) {
            navigation.navigate('SignIn');
        }
        else if(index === 2) {
            console.log(Mail);
        }
        else {
            console.log(Notification);
        }
        
    }

    render() {
        const { list } = this.state;
        return (
            <FlatList 
                data={list}
                renderItem={({ item }) => <SettingListItem list={item} index={item.id} switchScreen={this.switchScreen}/>}
                keyExtractor={(item) => `${item.id}`}
            />
        )
    }
}