import React,{Component} from 'react';
import {
    View,
    Text,
    Buton,
}from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Home</Text>
            </View>
        )
    }
}
class SettingScreen extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>SettingScreen</Text>
            </View>
        )
    }
}
const TabNavigationTest=createBottomTabNavigator(
    {
        Settings:SettingScreen,
        Home:HomeScreen,

    }
)
export default TabNavigationTest;