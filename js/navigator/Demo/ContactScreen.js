import React ,{Component} from 'react';
import {
    View,
    Button,
    StyleSheet,
    Text, StatusBar,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {StackNavigator} from 'react-navigation';
export default class ContactScreen extends Component{
    static  navigationOptions=({navigation}) =>  ({
        title:"Contact",
        headerLeft:(

            <Button  title="add"
                     color='#e7eeec'
                     style={{textColor:'#000000'}}

                         onPress={()=>{
                            Alert.alert('123');
                         }}/>

        ),
        headerTitleStyle: {
            flex:1,
            textAlign: 'center',
            color: '#000000',
        },
        headerRight: (
            <Icon.Button name='chevron-thin-right'
         size={20} style={{backgroundColor:'#e7eeec',}} color= '#000000'
                         onPress={()=>{
                             navigation.goBack();
                         }}
            />
        ),
        headerStyle:{
            backgroundColor:'#e7eeec',
            height:35,
        }
    })git
    componentDidMount(){
        this._navListener=this.props.navigation.addListener('didFocus',()=>{
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#e7eeec');

        });
    }
    componentWillUnmount(){
        this._navListener.remove();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>ContactScreen</Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})