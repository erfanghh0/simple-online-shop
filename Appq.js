

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
 import Pro from './pro';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
class apppq extends React.Component{
    constructor(props){
      super(props);
      this.state={
        tt:0
      }
    }
    render(){
      return<Pro />
    }
  
  }

  const map=(state)=>{
      return{
          state:state
      }
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
      addItemToCart:(Products1)=>dispatch({type:'Add',payload:Products1,link:"https://dkstatics-public.digikala.com/digikala-products/3142b2c673ba6dbaa7bc68fd48b1ad6d98435597_1618918882.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",prev3:"https://dkstatics-public.digikala.com/digikala-products/7cc5d6a64fd4aba6368ea70535774f876e977dbb_1618918885.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15"})
    }
   }

  export default connect(null,mapDispatchToProps)(apppq);