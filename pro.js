

 import React from 'react';
 //import type {Node} from 'react';
 //import Icon1 from 'react-native-vector-icons/FontAwesome';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   Text,
   StyleSheet,
   AsyncStorage,
   TextInput,
   useColorScheme,
   View,
   Image,
   Dimensions,
   Button,
   Alert
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Profile from './Tabs/Profile';
 const Stack = createNativeStackNavigator();

 import reducer from './REDUCERS/Cartitems'

 import datasend from './datasendrec.json'
 //import {} from 'react-navigation-material-bottom-tabs'
 import Apps from './Apps'
 //import Icon from 'react-native-vector-icons/Ionicons'
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 const data  = [{name:"erfan",id:1},{name:"nikan",id:2},{name:"haid",id:3},{name:"kamal",id:4},{name:"hoda",id:5},{name:"hamedd",id:6},{name:"hasad",id:7},{name:"hamid",id:8},]
{/*<Text style={{width:"50%",height:100,margin:5,backgroundColor:"red"}} onPress={()=>{this.props.addItemToCart(data[1])}}>seedsdsd</Text>*/ }



import { connect } from 'react-redux';


import Pro2 from './pro2';
class apppq extends React.Component{
    constructor(props){
      super(props);
      this.state={
        tt:0
      }
    }
    render(){
      return<ScrollView>{data.map((data)=><Text style={{width:"50%",height:100,margin:5,backgroundColor:"red"}} onPress={()=>{this.props.addItemToCart(data)}}>seedsdsd</Text>)}<Pro2/></ScrollView>
    }
  
  }

  const map=(state)=>{
      return{
          state:state
      }
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
      addItemToCart:(Products1)=>dispatch({type:'Add',payload:Products1})
    }
   }

  export default connect(null,mapDispatchToProps)(apppq);