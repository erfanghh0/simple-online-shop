

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
 var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 const data  = [{name:"erfan",id:1},{name:"erfan",id:2},{name:"erfan",id:3}]
import { connect } from 'react-redux';
class Texx1 extends React.Component{

    constructor(props){
        super(props);
        this.state={
          tt:0
        }
      }

    render(){
        return<Text style={{position:"absolute",marginTop:height-height/16,marginLeft:width/2.9,borderRadius:10,backgroundColor:"#ff6363",color:"white",width:width/25,height:width/25,fontSize:11  ,textAlignVertical:"top",textAlign:"center"}} >{this.props.deff1.length}</Text>
    }



}
const mapDisp=(state12)=>{
    return{
      deff1:state12
    }
   }
export default connect(mapDisp)(Texx1);