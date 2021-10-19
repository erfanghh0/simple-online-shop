/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import seacrhcartp from './Cart-screens/seacrhcartp';
 var value =[{erfan:"name"}]
 const height1=Dimensions.get("window").height
 //import type {Node} from 'react';
 //import * as Animatable from 'react-native-animatable';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import seacrhcart  from './Cart-screens/searchCart';
 const Stack = createNativeStackNavigator();
 import ProductScreen from './homescreens/ProductScreen';
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
 } from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';
 import Cart1 from './Cart-screens/Cart-data';
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
 var keyy =0;
 import Cartjson from '../Cart-json.json'
import { Data } from '../Data';
import Prodeuct13 from './Cart-screens/Productscreen12';
import search1 from './Cart-screens/search1';
 var cart  = Cartjson
 var totalprice = 0;
 let totalprice1 = 0.0;
 //get =[{erfam:'name'}]
 //import * as Animatable from 'react-native-animatable'
 class Cart11 extends React.Component{
   constructor(){
     super();
     this.state={
       get:[{erfan:"name"}],text:"مشاهده همه >",te:0,totalprice:0
       
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
   
   render(){
     
    
     if(this.props.deff.length == 0){
      totalprice1 = 0
       return <View style={{backgroundColor:"white",width:"100%",height:height1}}><StatusBar backgroundColor="white"      barStyle="dark-content"/>
         <View style={{backgroundColor:"white",height:height1/12,borderColor:"#7fc3e0",borderBottomWidth:2,padding:5,marginTop:5}}><TextInput  placeholder="در دیجیکالا جست و جو کنید" placeholderTextColor="#5295df"  style={{height:height1/13-15,backgroundColor:"#e5f5f7",borderRadius:5}} /></View>
         <View style={{width:"100%",height:height1,justifyContent:"center",alignItems:"center"}}>
           <Ionn name="cart" size={height1/6}></Ionn>
         <Text style={{color:"gray",fontSize:width/18}}>سبد خرید شما خالیست</Text>
         </View>
         </View>
     }
     
    // totalprice1 = totalprice + totalprice1;
    totalprice1 = 0
     return <View style={{backgroundColor:"white"}}>
      <View style={{height:height1/12,borderColor:"#7fc3e0",borderBottomWidth:2,backgroundColor:"white",padding:5,marginTop:5}}><TextInput  placeholder="در دیجیکالا جست و جو کنید" placeholderTextColor="#5295df"  style={{height:height1/13-15,backgroundColor:"#e5f5f7",borderRadius:5}} /></View>
      <ScrollView style={{alignContent:"center",height:height-height/4-10}}>
     <View style={{alignItems:"flex-start"}}>
       {this.props.deff.map((inn)=>{
         totalprice1 = totalprice1 + Data[inn.id].price
       return <View  key={inn.id} style={{paddingVertical:5,paddingRight:5}}>
       <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ProductScreens',{id:inn.id})}}><View style={{flexDirection:"row"}} ><Image source={{uri:Data[inn.id].prev1}}   style={{height:height/5,width:width/3}}/><View style={{backgroundColor:"white",width:width/1.5,padding:5}} ><Text  style={{backgroundColor:"white",textAlign:"right",width:"100%",fontSize:12,alignSelf:"flex-start"}} numberOfLines={2}>{Data[inn.id].name}</Text><Text onPress={()=>{console.log(this.props.deff)}} style={{alignSelf:"flex-end"}}>رنگ<View style={{backgroundColor:inn.colorname,borderRadius:50,height:15,width:15}}></View><Text>  {inn.color}  </Text></Text><Ionn onPress={()=>{this.props.removeitems(inn) ;}} style={{width:"10%",color:"red"}} name="close" size={width/12}></Ionn><Text style={{alignSelf:"flex-start",}} onPress={()=>{this.props.removeitems(inn) ;}}>حذف</Text><Text>قیمت {inn.price}</Text></View></View></TouchableOpacity>
         
       </View>}
       )}
     </View> 
     </ScrollView>
     <View style={{height:height/10,width:width,backgroundColor:"white",padding:5,flexDirection:"row",borderTopWidth:2,borderTopColor:"#7fc3e0"}}>
     < Text onPress={()=>{}}
          style={{borderRadius:20,width:80,height:40,alignSelf:"flex-start",backgroundColor:"#85d9de",textAlign:"center",alignContent:"center",textAlignVertical:"center",marginTop:5}} > اتمام خرید {">"}</Text>
          <Text></Text>
          <Text style={{width:"100%",backgroundColor:"white",textAlign:"right",flex:1,alignSelf:"flex-start"}}>شما  {this.props.deff.length} محصول را انتخاب نموده اید{"\n"}قیمت نهایی:{ " "+ totalprice1  }</Text>
          </View>
          
     </View>
     
   }
 }
 {/*<View style={{width:"100%",height:500,flexDirection:"row"}}><View><Image style={{width:100,height:100}} source={{uri:"https://dkstatics-public.digikala.com/digikala-products/77f6b5b39b58f0b81c7707e3626f55b74ee348aa_1623857594.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"}}/><Text style={{textAlign:"center"}}>گوشی موبایل</Text></View>
        <View><Image style={{width:100,height:100}} source={{uri:"https://dkstatics-public.digikala.com/digikala-products/77f6b5b39b58f0b81c7707e3626f55b74ee348aa_1623857594.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"}}/><Text style={{textAlign:"center"}}>گوشی موبایل</Text></View>
        <View><Image style={{width:100,height:100}} source={{uri:"https://dkstatics-public.digikala.com/digikala-products/112142499.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"}}/><Text style={{textAlign:"center"}}>گوشی موبایل</Text></View>
        <View><Image style={{width:100,height:100}} source={{uri:"https://dkstatics-public.digikala.com/digikala-products/112142499.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"}}/><Text style={{textAlign:"center"}}>گوشی موبایل</Text></View>
        

        
         <View style={{height:height/7,width:width,backgroundColor:"white",padding:5,flexDirection:"row",borderTopWidth:2,borderTopColor:"#c6d7e7"}}>
           
           <Text style={{width:"100%",backgroundColor:"white",textAlign:"left",flex:1,alignSelf:"flex-start"}}>شما  {Cartjson.length} محصول را انتخاب نموده اید{"\n"}قیمت نهایی:{ " "+ 500000  }</Text>
           <Text 
           style={{borderRadius:20,width:80,height:40,alignSelf:"flex-start",backgroundColor:"#5fbee7",textAlign:"center",alignContent:"center",textAlignVertical:"center",marginTop:5}} >اتمام خرید</Text>
           <Text></Text>
           </View>


        </View>*/}
 
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
                  class Erfan extends React.Component{
                    render(){
                      return <Stack.Navigator>
                        <Stack.Screen name="Cart1" component={Cart1} options={ {header:()=>null} }/>
                        <Stack.Screen name="Prodeuct13" component={Prodeuct13} options={ {header:()=><View style={{flexDirection:"row",width:"100%",height:height1/15,backgroundColor:"#e5f5f7"}}><Ionn name="close" onPress={()=>{this.props.navigation.navigate("Cart1")}} size={30} style={{alignSelf:"center",margin:3,color:"gray"}}></Ionn><View style={{justifyContent:"center"}}><Ionn onPress={()=>{this.props.navigation.navigate("Cart1")}} name="cart" size={30} style={{alignSelf:"center",marginLeft:5,color:"gray"}}></Ionn><Text  style={{position:"absolute",borderRadius:15,width:18,height:18,top:5,backgroundColor:"#ff6363",color:"white",fontSize:12,textAlignVertical:"top",textAlign:"center"} }>{this.props.deff.length}
                        
          </Text></View></View>} }/>

          <Stack.Screen name="search1" component={search1} options={ {header:()=><View style={{flexDirection:"row",width:"100%",height:height1/15,backgroundColor:"#e5f5f7"}}><Ionn name="close" onPress={()=>{this.props.navigation.navigate("Cart1",{clicke:0})}} size={30} style={{alignSelf:"center",margin:3,color:"gray"}}></Ionn><View style={{justifyContent:"center"}}><Ionn onPress={()=>{this.props.navigation.navigate("Cart1")}} name="cart" size={30} style={{alignSelf:"center",marginLeft:5,color:"gray"}}></Ionn><Text  style={{position:"absolute",borderRadius:15,width:18,height:18,top:5,backgroundColor:"#ff6363",color:"white",fontSize:12,textAlignVertical:"top",textAlign:"center"} }>{this.props.deff.length}
                        
                        </Text></View></View>} }/>
                        <Stack.Screen name="searchcartp" component={seacrhcartp} options={ {header:()=><View style={{flexDirection:"row",width:"100%",height:height1/15,backgroundColor:"#e5f5f7"}}><Ionn name="close" onPress={()=>{this.props.navigation.navigate("Cart1",{clicke:0})}} size={30} style={{alignSelf:"center",margin:3,color:"gray"}}></Ionn><View style={{justifyContent:"center"}}><Ionn onPress={()=>{this.props.navigation.navigate("Cart1")}} name="cart" size={30} style={{alignSelf:"center",marginLeft:5,color:"gray"}}></Ionn><Text  style={{position:"absolute",borderRadius:15,width:18,height:18,top:5,backgroundColor:"#ff6363",color:"white",fontSize:12,textAlignVertical:"top",textAlign:"center"} }>{this.props.deff.length}
                        
                        </Text></View></View>} }/>
                      <Stack.Screen name="searchcart" component={seacrhcart} options={{header:()=>null}}/>
                      </Stack.Navigator>
                    }
                  }

 export default connect(mapDis,Mapdelete)(Erfan)
 {/*<Text style={{position:"absolute",top:height/10,height:30,backgroundColor:"white",elevation:3}}>sdsd</Text>*/}
