import React,{Component} from 'react';
import {
    View,
    Button,
    Text,
    StatusBar,
    SafeAreaView,
    StyleSheet,
    TabBarTop,
} from 'react-native';
import {TabBarBottom,TabNavigator,createStackNavigator,createDrawerNavigator,createTabNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import StackDemo from './StackDemo';
class Screen1 extends Component{
    componentDidMount(){
        this._navListener=this.props.navigation.addListener('didFocus',()=>{
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor('#6a51ae');

        });
    }
    componentWillUnmount(){
        this._navListener.remove();
    }
    render(){
        return(
            <SafeAreaView style={[styles.container,{backgroundColor:'#6a51ae'}]}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor='#aaea55'
                />
                <Text style={{color:'#fff',textAlign:'center'}}>
                    Light Screen
                </Text>
                <Button
                    title="Next Screen"
                    onPress={()=>this.props.navigation.navigate('Screen2')}
                    color='blue'
                />
                {/*  <Button
                    title="Toggle Drawer"
                    onPress={() => this.props.navigation.openDrawer()}
                    color="blue"
                />*/}
            </SafeAreaView>
        )
    }

}
class Screen2 extends Component{
    componentDidMount(){
        this._navListener=this.props.navigation.addListener('didFocus',()=>{
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#ecf0f1');
        })
    }
    componentWillUnmount(){
        this._navListener.remove()
    }
    render() {
        return (
            <SafeAreaView style={[styles.container,{backgroundColor:'#ecf0f1'}]}>

                <Text style={{textAlign:'center'}}>Dark Screen</Text>
                <Button
                    title="Next Screen(Drawer)"
                    onPress={()=>this.props.navigation.navigate('Screen1')}

                />
                {/* <Button
                    title="Toggle Drawer"
                    onPress={() => this.props.navigation.openDrawer()}
                />*/}
            </SafeAreaView>
        );
    }
}
class Screen3 extends Component{
    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Screen 3</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    img:{
        height:30,
        width:30
    },
});

const NavigationDemo=TabNavigator({
        Screen1:{
            screen:StackDemo,
            navigationOptions:({navigation}) => ({
                tabBarIcon: ({ focused, tintColor }) => {

                    return     <Icon name='ios-home' size={25} color={tintColor} />

                },
            }),
        },
        Screen2:{
            screen:Screen2,
            navigationOptions: ({navigation})=>({
                tabBarIcon: ({ focused, tintColor }) => {

                    return  <Icon name='ios-chatboxes' size={25} color={tintColor} />;
                },
            })
        },
        Screen3:{
            screen:Screen3,
            navigationOptions: ({navigation})=>({
                tabBarIcon: ({ focused, tintColor }) => {

                    return  <Icon name='ios-menu' size={25} color={tintColor} />;
                },
            })
        }

    },
    {


        tabBarOptions: {
            style: {
                height:49
            },
            /*  showIcon: true,*///android 默认不显示 icon, 需要设置为 true 才会显示
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel:false,

        },
        forceTitlesDisplay: true,
        tabBarPosition: 'bottom',
        tabBarComponent:TabBarBottom,
        swipeEnabled:false,
        animationEnabled:false,
    }
)
export default NavigationDemo;