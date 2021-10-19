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
   Alert,
   TouchableOpacity
 } from 'react-native';
 //import {} from 'react-navigation-material-bottom-tabs'
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 //import { NavigationContainer } from '@react-navigation/native';
 //import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();
 import Ionn from 'react-native-vector-icons/Ionicons'
 //import Icon from 'react-native-vector-icons/Ionicons'
 import { Data } from '../../Data';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import SMS from '../profilescreens/SMS'
import ProductScreen from '../homescreens/ProductScreen';
import Productscreencategori from './Productscreencategori';
 const width1 = Dimensions.get("window").width;
//import Shop from './Shopping';
 const {width}=Dimensions.get("window")
 const height1=Dimensions.get("window").height

  class Categori extends React.Component{
    constructor(props){
      super(props)
      this.state={currentdid:0,cate :""}
    }
     render(){
      const productprops = this.props.route.params;
      //console.warn(productprops.catename)
      //console.warn(productprops)
         return <View style={{width:"100%",height:height1}}>
           <View style={{height:height1/12,borderColor:"#7fc3e0",borderBottomWidth:2,padding:5,marginTop:5,backgroundColor:"white"}}><TextInput  placeholder="در دیجیکالا جست و جو کنید" placeholderTextColor="#5295df"  style={{height:height1/13-15,backgroundColor:"#e5f5f7",borderRadius:5}} /></View>
           <Text style={{fontSize:width1/12,backgroundColor:"white",borderBottomWidth:1,borderColor:"cyan"}}>{productprops.catename}</Text>
           <ScrollView style={{height:height1/4,width:"100%"}}>{Data.map((items)=> {
            //console.warn( this.props.route.params.catename)
            
          if(items.cate_1 == this.props.route.params.catename){
           
            return <ScrollView>
              
              <TouchableOpacity onPress={()=>{this.setState({cate: items.cate_1});this.props.navigation.navigate('ProductScreens11',{id:items.id})}}><View style={{flexDirection:"row"}} ><Image source={{uri:Data[items.id].prev1}}   style={{height:height1/5,width:width1/3}}/><View style={{backgroundColor:"white",width:width/1.5,padding:5}} ><Text  style={{backgroundColor:"white",textAlign:"right",width:"100%",fontSize:12,alignSelf:"flex-start"}} numberOfLines={2}>{Data[items.id].name}</Text><Text onPress={()=>{console.log(this.props.deff)}} style={{alignSelf:"flex-end"}}>رنگ {items.colors.length} مورد موجود <View style={{backgroundColor:items.colorname,borderRadius:50,height:15,width:15}}></View><Text>  {items.color}  </Text></Text><Text>قیمت {Data[items.id].price}</Text></View></View></TouchableOpacity>
            </ScrollView> 
          }else if(items.cate == this.props.route.params.catename){
            //Alert.alert("adssa")
            return<ScrollView>
              
              <TouchableOpacity onPress={()=>{this.setState({cate: items.cate_1});this.props.navigation.navigate('ProductScreens11',{id:items.id})}}><View style={{flexDirection:"row"}} ><Image source={{uri:Data[items.id].prev1}}   style={{height:height1/5,width:width1/3}}/><View style={{backgroundColor:"white",width:width/1.5,padding:5}} ><Text  style={{backgroundColor:"white",textAlign:"right",width:"100%",fontSize:12,alignSelf:"flex-start"}} numberOfLines={2}>{Data[items.id].name}</Text><Text onPress={()=>{console.log(this.props.deff)}} style={{alignSelf:"flex-end"}}>رنگ {items.colors.length} مورد موجود <View style={{backgroundColor:items.colorname,borderRadius:50,height:15,width:15}}></View><Text>  {items.color}  </Text></Text><Text>قیمت {Data[items.id].price}</Text></View></View></TouchableOpacity>
            </ScrollView> 
          }
          
          })}
          </ScrollView></View>
     }
 }

 class App1 extends React.Component{

  render(){
    return (
 
    
      <Stack.Navigator screenOptions={{backgroundColor:"red"}}>
          <Stack.Screen 
            name="Home1"
            component={Categori}
            options={ {header:()=>null} }
          />
               
          <Stack.Screen name="ProductScreens" component={Productscreencategori} Pro="hello"  screenOptions={{ headerStyle: {
            backgroundColor: 'red',
          }}}  options={{header:()=><View style={{flexDirection:"row",width:"100%",height:height1/15,backgroundColor:"#e5f5f7"}}><Ionn name="close" onPress={()=>{this.props.navigation.goBack()}} size={30} style={{alignSelf:"center",margin:3,color:"gray"}}></Ionn><View style={{justifyContent:"center"}}><Ionn onPress={()=>{this.props.navigation.navigate("Cart1")}} name="cart" size={30} style={{alignSelf:"center",marginLeft:5,color:"gray"}}></Ionn><Text  style={{position:"absolute",borderRadius:15,width:18,height:18,top:5,backgroundColor:"#ff6363",color:"white",fontSize:12,textAlignVertical:"top",textAlign:"center"} }>{this.props.defff.length}
          </Text></View></View>}} />
         
        </Stack.Navigator>
  
    );
  }

}
 
  export default Categori;