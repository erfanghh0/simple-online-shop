/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 var value =[{erfan:"name"}]
 import Categorishow from './categorie-screens/categorishow'
 //import type {Node} from 'react';
 import * as Animatable from 'react-native-animatable';
 import {
   Alert,
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,Image,
   StyleSheet,
   Text,Keyboard,
   TextInput,TouchableOpacity,
   useColorScheme,
   View,Picker,
   Dimensions,
 } from 'react-native';
 import searchcategori from './categorie-screens/searchcategori'
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Productscreencategori from './categorie-screens/Productscreencategori';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 //import { NavigationContainer } from '@react-navigation/native';
 //import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();

 const height1=Dimensions.get("window").height
 const width1 = Dimensions.get("window").width
 get =[{erfam:'name'}]
 //import * as Animatable from 'react-native-animatable'
 import { Data } from '../Data';
 import { DataCategori } from '../Data';
 import Ionn from 'react-native-vector-icons/Ionicons';
 import searchcategoriP from './categorie-screens/searchCategoriP';
import { connect } from 'react-redux';
//import { TouchableOpacity } from 'react-native-gesture-handler';
 //const Stack = createNativeStackNavigator();
 class App extends React.Component{
   constructor(){
     super();
     this.state={
       get:[{erfan:"name"}],text:"مشاهده همه >",cate:0,keyboard : 0,input:"sdsdee",searchuser:"@",cate_1:''
     }
   }
   press =()=>{
    
     console.log(value)
    this.setState({get:this.state.push({name:"sdsd"})})
     console.log(value.length)
   }
   componentWillUnmount(){
   
   }
   componentDidMount(){

    

   }
   render(){
   

      
      
      
    
     return<View><View style={{height:height1/12,borderColor:"#7fc3e0",borderBottomWidth:2,padding:5,marginTop:5,backgroundColor:"white"}}><TextInput  placeholder="در دیجیکالا جست و جو کنید" onPressIn={()=>{this.props.navigation.navigate("searchcategori")}} placeholderTextColor="#5295df"  style={{height:height1/13-15,backgroundColor:"#e5f5f7",borderRadius:5}} /></View><ScrollView style={{backgroundColor:"white"}}>
    
     <ScrollView>
     {DataCategori.map((items)=><ScrollView style={{width:"100%"}}>
     <View style={{padding:5,flexDirection:
       "row",width:"100%"}}>
       <View style={{flex:1}}><Text onPress={()=>{this.props.navigation.navigate('Categorishow',{catename : items.catename})}} style={{color:"#62b9e3",alignSelf:"flex-start",fontSize:20,padding:2}}>{this.state.text}</Text></View>
        <View style={{flex:1}}><Text onPress={()=>{}} style={{alignSelf:"flex-end",fontSize:20,textAlign:"center",fontStyle:"normal",fontFamily:"Arial"}}>{items.catename}</Text></View>
        </View>
        <ScrollView style={{width:"100%",height:height1/4,backgroundColor:"white",padding:5}} horizontal={true}>
         
         <TouchableOpacity style={{borderRadius:5,paddingVertical:5,backgroundColor:"#e3edef",marginHorizontal:2,width: width1/3,elevation:1,zIndex:2}} onPress={()=>{}} onPress={()=>{this.props.navigation.navigate('Categorishow',{catename : items.catenamerefer1});console.warn(items.catenamerefer1)}} ><View><Image style={{width:80,height:80,marginHorizontal:20}} source={{uri:items.uri1}}/><Text style={{textAlign:"center",}}>{items.catenamerefer1}</Text></View></TouchableOpacity>
         <TouchableOpacity style={  items.catenamerefer2 === undefined ? styles.paging1:  styles.paging} onPress={()=>{Alert.alert("sdsaaaaaad")}} onPress={()=>{this.props.navigation.navigate('Categorishow',{catename : items.catenamerefer2})}}><View><Image style={{width:80,height:80,margin:2,marginHorizontal:20}} source={{uri:items.uri2}}/><Text style={{textAlign:"center",alignContent:"center"}}>{items.catenamerefer2}</Text></View></TouchableOpacity>
         <TouchableOpacity style={  items.catenamerefer3 === undefined ? styles.paging2:  styles.paging3} onPress={()=>{Alert.alert("sdsaaaaaad")}} onPress={()=>{}} onPress={()=>{this.props.navigation.navigate('Categorishow',{catename : items.catenamerefer3})}}><View><Image style={{width:80,height:80,margin:2,marginHorizontal:20}} source={{uri:items.uri3}}/><Text style={{alignContent:"center",textAlign:"center"}}>{items.catenamerefer3}</Text></View></TouchableOpacity>
          
          
 
          
          </ScrollView>
          </ScrollView>)}
     
      </ScrollView></ScrollView></View>
   }
 }
 {/*<View style={{width:"100%",height:500,flexDirection:"row"}}><View><Image style={{width:100,height:100}} source={{uri:"https://dkstatics-public.digikala.com/digikala-products/77f6b5b39b58f0b81c7707e3626f55b74ee348aa_1623857594.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"}}/><Text style={{textAlign:"center"}}>گوشی موبایل</Text></View>
        <View><Image style={{width:100,height:100}} source={{uri:"https://dkstatics-public.digikala.com/digikala-products/77f6b5b39b58f0b81c7707e3626f55b74ee348aa_1623857594.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"}}/><Text style={{textAlign:"center"}}>گوشی موبایل</Text></View>
        <View><Image style={{width:100,height:100}} source={{uri:"https://dkstatics-public.digikala.com/digikala-products/112142499.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"}}/><Text style={{textAlign:"center"}}>گوشی موبایل</Text></View>
        <View><Image style={{width:100,height:100}} source={{uri:"https://dkstatics-public.digikala.com/digikala-products/112142499.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"}}/><Text style={{textAlign:"center"}}>گوشی موبایل</Text></View>
        
        </View>*/}
 const styles = StyleSheet.create({
  paging1: {
     backgroundColor:"white",height:height1/4,width:0,marginHorizontal:2
   },paging: {
    backgroundColor:"#e3edef",borderRadius:5,paddingVertical:5,height:height1/4,width:width1/3,marginHorizontal:2,borderRadius:5,marginHorizontal:5
  },
  paging2: {
    backgroundColor:"white",borderRadius:5,paddingVertical:5,height:height1/4,width:0,marginHorizontal:2
  },
  paging3: {
    backgroundColor:"#e3edef",borderRadius:5,paddingVertical:5,height:height1/4,width:width1/3,marginHorizontal:2
  },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 class App1 extends React.Component{

  render(){
    return (
 
    
      <Stack.Navigator screenOptions={{backgroundColor:"red"}}>
          <Stack.Screen 
            name="Categori"
            component={App}
            options={ {header:()=>null} }
          />
      
          <Stack.Screen 
            name="Categorishow"
            component={Categorishow}
            options={ {header:()=>null} }
          />
          <Stack.Screen name="ProductScreens11" component={Productscreencategori} Pro="hello"  screenOptions={{ headerStyle: {
            backgroundColor: 'red',
          }}}  options={{header:()=><View style={{flexDirection:"row",width:"100%",height:height1/15,backgroundColor:"#e5f5f7"}}><Ionn name="close" onPress={()=>{this.props.navigation.navigate("Categori")}} size={30} style={{alignSelf:"center",margin:3,color:"gray"}}></Ionn><View style={{justifyContent:"center"}}><Ionn onPress={()=>{console.warn(this.props.navigation.navigate('Cart'))}} name="cart" size={30} style={{alignSelf:"center",marginLeft:5,color:"gray"}}></Ionn><Text  style={{position:"absolute",borderRadius:15,width:18,height:18,top:5,backgroundColor:"#ff6363",color:"white",fontSize:12,textAlignVertical:"top",textAlign:"center"} }>{this.props.col.length}
          </Text></View></View>}} />
          <Stack.Screen name="searchcategori" component={searchcategori} options={{header:()=>null}}/>
          <Stack.Screen name="searchcategoriP" component={searchcategoriP} options={{header:()=><View style={{flexDirection:"row",width:"100%",height:height1/15,backgroundColor:"#e5f5f7"}}><Ionn name="close" onPress={()=>{this.props.navigation.navigate("Categori")}} size={30} style={{alignSelf:"center",margin:3,color:"gray"}}></Ionn><View style={{justifyContent:"center"}}><Ionn onPress={()=>{console.warn(this.props.navigation.navigate('Cart'))}} name="cart" size={30} style={{alignSelf:"center",marginLeft:5,color:"gray"}}></Ionn><Text  style={{position:"absolute",borderRadius:15,width:18,height:18,top:5,backgroundColor:"#ff6363",color:"white",fontSize:12,textAlignVertical:"top",textAlign:"center"} }>{this.props.col.length}
          </Text></View></View> }}/>
        </Stack.Navigator>
  
    );
  }

}
const mapstt=(dispatch)=>{
  return{
  col:dispatch
  }
 }
 const mapDispatchToProps11=(dispatch)=>{
  return{
    addItemToCart:(Products1,color11,colorname,price,oldprice,col)=>dispatch({type:'Add',payload:{id:Products1,color:color11,colorname:colorname,price:price,col:col}})
  }
 }

 const sss =()=>{
     
 }
 export default connect(mapstt)(App1);
 