import {createSwitchNavigator,createStackNavigator} from'react-navigation';
import React,{Component} from 'react';
import {
    View,
    Button,
}from 'react-native';

class HomeScreen extends Component{
    static navigationOptions={
        headerTitle:'Welcome to the app!'
    }
    render(){
        return(
            <View>
            <Button onPress={()=>this.props.navigation.navigate('OtherScreen')}
                    title="SHOW ME MORE OF THE APP"/>
            <Button onPress={()=>this.props.navigation.goBack()}
        title="ACTUALLY,SIGN ME OUT"/>
            </View>
        )
    }
}
class OtherScreen extends Component{
    static navigationOptions={
        headerTitle:"I'M DONE"
    }

    render(){
        return(
            <Button onPress={()=>this.props.navigation.navigate('HomeScreen')}
                    title="SIGN OUT"/>

        )
    }
}
class SignInScreen extends Component{
    static navigationOptions={
        headerTitle: ''
    }
    render(){
        return
    }

}
class AuthLoadingScreen extends Component{
    static navigationOptions={
       Title: 'Please sign in'
    }
    render(){
        return(
            <Button onPress={()=>this.props.navigation.navigate('HomeScreen')}
            title="123"/>
        )
    }
}
const AppStack=createStackNavigator({
    Home:HomeScreen,
    Other:OtherScreen,
})
const AuthStack=createStackNavigator({
    SignIn:SignInScreen,
})
 const NavigatorDemo=createSwitchNavigator({
    AuthLoading:AuthLoadingScreen,
     App:AppStack,
     Auth:AuthStack,
},
     {
         initialRouteName:'AuthLoading',
     })
export default NavigatorDemo;