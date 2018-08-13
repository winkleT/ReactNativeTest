import React,{Component}from'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
class MyHomeScreen extends Component{
    static navigationOptions={
        drawerLabel:'Home',
        drawerIcon:({tintColor})=>(
            <Image source={require('../../img/home.png')}
            style={[styles.icon,{tintColor:tintColor}]}
            >
            </Image>
        )
    }
    render(){
        return(
            <Button
                onPress={()=>this.props.navigation.navigate('Notifications')}
                title="go to notifications"

            />
        )
    }
}
class MyNotificationsScreen  extends Component{
    static navigationOptions={
        drawerLabel:'Home',
        drawerIcon:({tintColor})=>(
            <Image source={require('../../img/find.png')}
                   style={[styles.icon,{tintColor:tintColor}]}
            >
            </Image>
        )
    }
    render(){
        return(
            <Button
                onPress={()=>this.props.navigation.goBack()}
                title="go back home"

            />
        )
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
const MyApp=createDrawerNavigator({
    Home:{
        screen: MyHomeScreen,
    },
    Notifications: {
        screen:MyNotificationsScreen,
    },
})
export default MyApp;