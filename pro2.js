

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
 const data  = [{name:"erfan",id:1},{name:"erfan",id:2},{name:"erfan",id:3}]
import { connect } from 'react-redux';
class apppq extends React.Component{
    constructor(props){
      super(props);
      this.state={
        tt:0
      }
    }
    render(){
      return<View>{this.props.deff.map((tes)=><Text onPress={()=>this.props.remove(tes)}>{tes.name}</Text>)}<Text onPress={()=>{console.log(this.props.deff)}}>{this.props.deff.length}</Text></View>
    }
  
  }

  const map=(state)=>{
      return{
          state:state
      }
  }
  const mapDispatchToProps=(state)=>{
    return{
      deff:state
    }
   }
   const mapDispatchTodelete=(dispatch)=>{
    return{
      remove:(Products1)=>dispatch({type:'Remove',payload:Products1})
    }
   }
  export default connect(mapDispatchToProps,mapDispatchTodelete)(apppq);