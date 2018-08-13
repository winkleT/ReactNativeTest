import React,{Component,PropTypes}from 'react';
import {
    View,
    Text,


}from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class TabIcon extends Component{
    render() {
        return (
            <View style={{flex:1,alignItems:'center'}}>
                <Text>123</Text>
                <Icon name="ios-settings" size={15} color="blue" />
                <Icon name="ios-settings" size={25} color="yellow" />
                <Icon name="ios-settings" size={35} color="black" />
            </View>
    );
    }
}


