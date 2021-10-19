
 import React from 'react';
 var value =[{erfan:"name"}]
 const height1=Dimensions.get("window").height
 //import type {Node} from 'react';
 //import * as Animatable from 'react-native-animatable';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();
 import ProductScreen from '../homescreens/ProductScreen';
 import {
   Alert,
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,Image,
   StyleSheet,
   Text,
   TextInput,
   useColorScheme,TouchableOpacity,
   View,
   AsyncStorage,
   Dimensions,
   Keyboard,
 } from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';
 import search1 from './search1';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Ionn from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
 var height = Dimensions.get('window').height;
 var width = Dimensions.get('window').width;
 var width1 = Dimensions.get('window').width;
 var keyy =0;
 import Cartjson from '../../Cart-json.json'
import { Data } from '../../Data';
import Prodeuct13 from './Productscreen12';
 var cart  = Cartjson
 var totalprice = 0;
 let totalprice1 = 0.0;
let Keyboardh = height1/12;
class Cart1 extends React.Component{
    constructor(){
      super();
      this.state={
        get:[{erfan:"name"}],text:"مشاهده همه >",te:0,totalprice:0,
        Keyboardh:height1/12,searchuser:"@"
      }
    }
    press =()=>{
     
      console.log(value)
     this.setState({get:this.state.push({name:"sdsd"})})
      console.log(value.length)
    }
    read=()=>{
      if (Data[this.props.deff.id].price ){
        return Data[this.props.deff.id].price
      }else{
        return 0
      }
    }
    componentWillUnmount(){
      
     }
     componentDidMount(){
  
      
     }
    render(){
      //if(this.props.route.params.clicke !== 0){Alert.alert("hello")}
    
     
      

      if(this.props.deff.length == 0){
       totalprice1 = 0
        return <View style={{backgroundColor:"white",width:"100%",height:height1}}><StatusBar backgroundColor="white"      barStyle="dark-content"/>
        <View style={{height:height1/12,borderColor:"#7fc3e0",borderBottomWidth:2,padding:5,marginTop:5}}><TextInput onPressIn={()=>{this.props.navigation.navigate("searchcart")}}  placeholder="در دیجیکالا جست و جو کنید" placeholderTextColor="#5295df"  style={{height:height1/13-15,backgroundColor:"#e5f5f7",borderRadius:5}} /></View>
          <View style={{width:"100%",height:height1,justifyContent:"center",alignItems:"center"}}>
            <Ionn name="cart" size={height1/6}></Ionn>
          <Text style={{color:"gray",fontSize:width/18}}>سبد خرید شما خالیست</Text>
          </View>
          </View>
      }
      if(this.props.deff.length !==0 ){
        
          
      //    totalprice1 = Data[this.props.deff[this.props.deff.length-1].id].price+totalprice1
          
        
      }
    
     // totalprice1 = totalprice + totalprice1;
     totalprice1 = 0
     

     

      return <View>
        <View style={{height:height1/12,borderColor:"#7fc3e0",borderBottomWidth:2,padding:5,marginTop:5}}><TextInput onPressIn={()=>{this.props.navigation.navigate("searchcart")}}  placeholder="در دیجیکالا جست و جو کنید" placeholderTextColor="#5295df"  style={{height:height1/13-15,backgroundColor:"#e5f5f7",borderRadius:5}} /></View>
       <ScrollView style={{alignContent:"center",height:height-height/4-10}}>
      <View style={{alignItems:"flex-start"}}>
        {this.props.deff.map((inn)=>{
          totalprice1 = totalprice1 + Data[inn.id].price
        return <View  key={inn.id} style={{paddingVertical:5,paddingRight:5}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Prodeuct13',{id:inn.id})}}><View style={{flexDirection:"row"}} ><Image source={{uri:Data[inn.id].prev1}}   style={{height:height/5,width:width/3}}/><View style={{backgroundColor:"white",width:width/1.5,padding:5}} ><Text  style={{backgroundColor:"white",textAlign:"right",width:"100%",fontSize:12,alignSelf:"flex-start"}} numberOfLines={2}>{Data[inn.id].name}</Text><Text onPress={()=>{console.log(this.props.deff)}} style={{alignSelf:"flex-end"}}>رنگ<View style={{backgroundColor:inn.colorname,borderRadius:50,height:15,width:15}}></View><Text>  {inn.color}  </Text></Text><Ionn onPress={()=>{this.props.removeitems(inn) ;;Data[inn.id].added = 0}} style={{width:"10%",color:"red"}} name="close" size={width/12}></Ionn><Text style={{alignSelf:"flex-start",}} onPress={()=>{this.props.removeitems(inn) ;Data[inn.id].added = 0}}>حذف</Text><Text>قیمت {inn.price}</Text></View></View></TouchableOpacity>
          
        </View>}
        )}
      </View> 
      </ScrollView>
      <View style={{height:height/10,width:width,backgroundColor:"white",padding:5,flexDirection:"row",borderTopWidth:2,borderTopColor:"#7fc3e0"}}>
      < Text onPress={()=>{try {
         fetch('https://webhook.site/4e5eee06-1ddf-4fe3-917e-33f544f1bf24',{
          method:"post",
          mode:"no-cors",headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          },body:JSON.stringify(this.props.deff)
        })
      } catch (error) {
        console.log(error)
      }}}
           style={{borderRadius:20,width:80,height:40,alignSelf:"flex-start",backgroundColor:"#85d9de",textAlign:"center",alignContent:"center",textAlignVertical:"center",marginTop:5}} > اتمام خرید {">"}</Text>
           <Text></Text>
           <Text style={{width:"100%",backgroundColor:"white",textAlign:"right",flex:1,alignSelf:"flex-start"}}>شما  {this.props.deff.length} محصول را انتخاب نموده اید{"\n"}قیمت نهایی:{ " "+ totalprice1  }</Text>
           </View>
           
      </View>
      
    }
  }

  const mapDis=(state1)=>{
    return{
      deff:state1
    }
   }
   const Mapdelete =(dispatch)=>{

    return{
      removeitems:(Products1)=>dispatch({type:'Remove',payload:Products1})
    }

   }

  export default connect(mapDis,Mapdelete)(Cart1);