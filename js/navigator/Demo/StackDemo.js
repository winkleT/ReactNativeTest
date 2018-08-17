import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Bottom,
    StatusBar,
    Alert,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import ContactScreen from './ContactScreen';

class Stack1 extends Component{
    static  navigationOptions=({navigation}) =>  ({
        title:"Home",
        headerLeft:(

        <Icon.Button name='user'
        size={20}
        style={{color: 'white',backgroundColor: 'tomato'}}
        onPress={()=>{
            navigation.navigate('Second');
        }}/>

        ),
        headerTitleStyle: {
            flex:1,
            textAlign: 'center',
            color: 'white',
        },
        headerRight: (
        <Icon name='plus' size={20} style={{marginRight: 10,color: 'white'}}

        />
        ),
        headerStyle:{
            backgroundColor:'tomato',
            height:35,
        }
    })
    componentDidMount(){
        this._navListener=this.props.navigation.addListener('didFocus',()=>{
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor('tomato');

        });
    }
    componentWillUnmount(){
        this._navListener.remove();
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>1</Text>
            </View>
        )
    }
}

class Stack2 extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>2</Text>

            </View>
        );
    }

}

class Stack3 extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>3</Text>
            </View>
        );
    }

}
const styles=StyleSheet.create({
    container:{
      flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
const StackDemo=StackNavigator({
    First: {
        screen:Stack1,

    },
    Second:{
        screen: ContactScreen,
    } ,
    Third: {
        screen:Stack3,
    }
})
export default StackDemo;