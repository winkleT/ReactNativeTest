import React from 'react';
import {
    View,
    Text,
    Button,
    Image
}from 'react-native';
import {createStackNavigator} from 'react-navigation';
class LogoTitle extends React.Component{
    render(){
        return(
            <Image
                source={require('../../img/111.png')}
                style={{width:30,height:30}}
            />
        );
    }
}
class HomeScreen extends React.Component{
    static navigationOptions=({navigation})=> {
        return {
            headerTitle: <LogoTitle/>,
            headerRight: (
                <Button
                    onPress={navigation.getParam('increaseCount')}
                    title="+1"
                    color='#20000000'
                />
            ),
            headerLeft:(
                <Button
                    onPress={()=>navigation.navigate('MyModal')}
                    title='info'
                    color='#90000000'
                />
            )
        };
    };
    componentDidMount(){
        this.props.navigation.setParams({increaseCount:this._increaseCount});
    }
    state={
        count:0,
    }
    _increaseCount=()=>{
        this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Home Screen</Text>
                <Text>{this.state.count}</Text>
                <Button
                    title="Go to Details"
                    onPress={()=>this.props.navigation.navigate('Details',{
                        itemId:86,
                        otherParam:'anything you want here',
                    })}
                />
            </View>
        );

    }
}
class ModalScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:30}}>this is a model</Text>
                <Button
                onPress={()=>this.props.navigation.goBack()}
                title="dismiss"/>
            </View>
        )
    }
}
class DetailsScreen extends React.Component{
    static navigationOptions=({navigation,navigationOptions})=>{
        console.log(navigationOptions);
        const {params}=navigation.state;
        return{
            title:params?params.otherParam:'A Nested Details Screen',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };
    render(){
        const {navigation} =this.props;
        const itemId=navigation.getParam('itemId','NO-ID');
        const otherParam=navigation.getParam('otherParam','some default value');
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Details Screen</Text>
                <Text>itemId:{JSON.stringify(itemId)}</Text>
                <Text>otherParam:{JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details"
                    onPress={()=>this.props.navigation.push('Details',
                    {
                        itemId:Math.floor(Math.random()*100),
                    })}
                />
                <Button
                    title="Go to Home"
                    onPress={()=>this.props.navigation.popToTop()}
                />
                <Button
                    title="Go Back"
                    onPress={()=>this.props.navigation.goBack()}
                />
                <Button
                    title="update the title"
                    onPress={()=>this.props.navigation.setParams({otherParam:'Update'})}
                />
            </View>
        )
    }
}
const MainStack=createStackNavigator({

    Home:{
        screen:HomeScreen,
    },
    Details:{
        screen:DetailsScreen,
    }

},{
        initialRouteName:'Home',
        navigationOptions:{
            headerStyle: {
                backgroundColor:'#000000',
            },
            headerTintColor:'#123eee',
            headerTitleStyle:{
                fontWeight:'bold',
                fontSize:24,
            }
        }
    }
)
const RootStack = createStackNavigator({
        Main:{screen:MainStack},
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },

);
export default RootStack;