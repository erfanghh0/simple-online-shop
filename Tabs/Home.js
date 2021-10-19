/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 //import type {Node} from 'react'asasas;
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
   TouchableOpacity,
   Keyboard,
   Modal
 } from 'react-native';
 //import { createStore } from 'react-native-async-image-store'
 import searchhome from './homescreens/searchhome'
 import Ionn from 'react-native-vector-icons/Ionicons'
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { CommonActions } from "@react-navigation/native";
 import Profile from './Profile';
 const Stack = createNativeStackNavigator();
 import datasend from '../datasendrec.json'
 //import {} from 'react-navigation-material-bottom-tabs'
 import Apps from '../Apps'
 import search from './homescreens/search'
 //import Icon from 
 import apppq from '../Appq';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 const width1 = Dimensions.get("window").width;
 var erg;
//import Shop from './Shopping';
 const {width}=Dimensions.get("window")
 const height1=Dimensions.get("window").height
 const height=width*0.6;
 const images =[
   'https://wallpapercave.com/wp/wp2960877.jpg',
   'https://wallpapercave.com/wp/wp2960877.jpg',
   'https://wallpapercave.com/wp/wp2960877.jpg',
   'https://wallpapercave.com/wp/wp2960877.jpg',
   'https://wallpapercave.com/wp/wp2960850.jpg',
   'https://wallpapercave.com/wp/wp2960890.jpg',
   'https://wallpapercave.com/wp/wp2960890.jpg'
   ,
 ]

 import {Data} from '../Data'
import Productscreen from './homescreens/ProductScreen'
 import Cart12 from '../Cart-json.json'
import { connect } from 'react-redux';
import Appq from '../Appq';

import Cart from './Cart'
import search1 from './Cart-screens/search1';
var refa;
//import database from "./Database/Datasource.sql"
//import { Icon } from 'react-native-vector-icons/Icon';
 class App extends React.Component{

   
   state={
    images :[
      'https://dkstatics-public.digikala.com/digikala-adservice-banners/be01cfe96bd06940731ef18ec744ff4d097e87cb_1629205613.jpg?x-oss-process=image/quality,q_80',
      "https://www.digikala.com/static/files/c4cc3441.png",
       "https://dkstatics-public.digikala.com/digikala-adservice-banners/904db8a169ce8fdc6493e21b6948d3e32a19ae68_1626258276.jpg?x-oss-process=image/quality,q_80",
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/1171b68c30d1f579a3a1bea30cad4265ef5703bf_1626608832.jpg?x-oss-process=image/quality,q_80",
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/3292dc43aa6df1143292145c26dbf59282d21914_1622033545.jpg",
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/308c1ef1767aaa78be751958fef8bf3f99c8200f_1629098437.jpg",
      
      
    ],
     tt:0,selectedindex:0,selectedindex:0,
     footeritemscolor:"#333",
     item1:false,
     item2:false,
     item3:false,
     item4:1,
     itemcolor1:"#333",
     itemcolor2:"#333",
     itemcolor3:"#333",
     itemcolor4:"#333",keyboard : 0,input:"sdsdee",searchuser:"@",cate:'',visiblity:false
   }
 
   
   
   setselectedindex= ( event )=>{
     const viewsize=event.nativeEvent.layoutMeasurement.width;
     const contentoffset=event.nativeEvent.contentOffset.x;
     const selectedindex = Math.floor(contentoffset/viewsize)
     this.setState({selectedindex})
   }
   
   handleEmail = (text) => {
    this.setState({ input: text })
    console.log(this.state.input)
 }
 componentDidMount(){
   const {uri} = this.props;
   //   const name  = shorthal.unique
 }
   render(){
    
    
    
    
     //erg =this.props.defff.length
     
     return(<View style={{backgroundColor:"white"}}>
         <StatusBar backgroundColor="black"></StatusBar>
       
        <View style={{height:height1/12,borderColor:"#7fc3e0",borderBottomWidth:2,padding:5,marginTop:5}}><TextInput title="dsdsd" onPressIn={()=>{this.props.navigation.navigate('searchhome',{id:1}); console.log(this.state.visiblity) }} placeholder="در دیجیکالا جست و جو کنید" placeholderTextColor="#5295df"  style={{height:height1/13-15,backgroundColor:"#e5f5f7",borderRadius:5}} /></View>
       <ScrollView>
         <StatusBar backgroundColor="#e5f5f7"      barStyle="dark-content"/>
      <ScrollView >
      <View style={{height:height+15}}>
        <View style={{height:height+15,borderBottomWidth:2,borderColor:"#7fc3e0"}}>
        <ScrollView onScroll={this.change}  pagingEnabled horizontal onMomentumScrollEnd={this.setselectedindex} showsHorizontalScrollIndicator={false} style={{backgroundColor:"#ffffff",height:height,width}}>
        {
           this.state.images.map((image,index) =>(
               <View key={index}  >
               <Image
              
               resizeMode="contain" 
               key={index}
               source={{uri:image}}
               style={{width:width-20,height,borderRadius:15,margin:10,alignContent:"center",justifyContent:"center",alignSelf:"center"}}
               
                />
              </View>
             ) )
           }
           
          
        </ScrollView>
        
        </View>
        <View  style={{flexDirection:"row",position:"absolute",height:0,bottom:0,backgroundColor:"red"}}>
        {
          this.state.images.map((image,index) =>(
          <View><Text deletee={this.delett} key={index} style={  index === this.state.selectedindex ? styles.paging1:  styles.paging} onPress={this.clicked
          } title={"Dd"} ></Text></View>
         ) )
        }
        </View>
      </View>
    
        
      </ScrollView>
      <ScrollView style={{height:height1/7,backgroundColor:"white",padding:5,marginVertical:5,borderBottomWidth:2,borderColor:"#7fc3e0"}}   ref={ref => this.scrollView = ref} horizontal={true}>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#7e3e4f",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>پوشاک</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#a4005d",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>لوازم دیجیتال</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#0859b0",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجیکالا مگ</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#c8303f",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی پی</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#67bb8a",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی ادز</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#e1dfa6",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی گیمز</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#e1dfa6",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی گیمز</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#e1dfa6",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی گیمز</Text></View>
          
      </ScrollView>
      <ScrollView horizontal={true} style={{height:height1/3,backgroundColor:"#e7f4f4",padding:10}} >
        <View style={{height:height1/3-20,width:width1/3,alignItems:"center",justifyContent:"center",borderRadius:15,marginHorizontal:5}} ><Text style={{alignSelf:"center",fontSize:35,textAlign:"center",textAlignVertical:"center",justifyContent:"center",alignContent:"center",marginHorizontal:5}}  title="Go to Jane's profile"
      onPress={() =>
        
       {
         datasend[0].height = 0
        //AsyncStorage.setItem('Key_27', JSON.stringify( datasend[0].height));
        
        //Alert.alert("Value Stored Successfully.")
     
        //Alert.alert(datasend[0].clicked)
        console.log(datasend[0].height)
        //this.setState({visiblity:true})
        }
      }> پیشنهاد شگفت انگیز</Text></View>
        

        {Data.map((items)=> {

if(items.place== "home-suggestions"){
  //Alert.alert("sdsd")
  return <TouchableOpacity key={items.id} onPress={() =>
        
    {
      //datasend[0].height = 0
     //AsyncStorage.setItem('Key_27', JSON.stringify( datasend[0].height));
     
     //Alert.alert("Value Stored Successfully.")
  
     //Alert.alert(datasend[0].clicked)
    // console.log(datasend[0].height)
    this.props.navigation.dispatch(
      CommonActions.setParams({
        tabBarVisible: false,
      })
    );
    this.setState({visiblity:false})
    //Alert.alert("sasas")
     this.props.navigation.navigate('ProductScreens',{id:items.id,colorr:"مشکی"})}
   } ><View  style={{height:height1/3-20,width:width1/3,alignItems:"center",backgroundColor:"white",borderRadius:15,marginHorizontal:5}}  ><Image  source={{uri:items.uri}} style={{width:"100%",resizeMode:"contain",height:height1/7,marginHorizontal:5,borderRadius:5}}/><Text numberOfLines={2} style={{fontSize:height1/65,marginTop:15,textAlign:"right",height:height1/25}}>{items.name}</Text><View style={{flexDirection:"row",marginTop:15}}><View style={{flex:1}}><Text style={{paddingLeft:5,textDecorationLine:"line-through",color:"gray"}}>{items.oldprice}</Text><Text style={{paddingLeft:5}}>{items.price}</Text></View><View><Text style={{textAlign:"center",backgroundColor:"#7fc3e0",borderRadius:10,color:"white",marginTop:10,marginRight:5,padding:2}}>45%</Text></View></View></View></TouchableOpacity>
}

})}
        

        {/* 
        onPress={() =>
        
       {
         datasend[0].height = 0
        //AsyncStorage.setItem('Key_27', JSON.stringify( datasend[0].height));
        
        //Alert.alert("Value Stored Successfully.")
     
        //Alert.alert(datasend[0].clicked)
        console.log(datasend[0].height)
        this.props.navigation.navigate('apppq')}
      }
        */}
        


      
      </ScrollView>
      
      </ScrollView>
      <Modal visible={this.state.visiblity}><Button onPress={()=>{this.setState({visiblity:false})}} title="sdsd"/><Button title="hello" onPress={()=>{this.props.navigation.navigate('search',{id:1})}}/></Modal>
      </View>
     )
   }
 }

class App1 extends React.Component{

  render(){
    return (
 
    
      <Stack.Navigator screenOptions={{backgroundColor:"red"}}>
          <Stack.Screen 
            name="Home1"
            component={App}
            options={ {header:()=>null} }
          />
               
          <Stack.Screen name="ProductScreens" component={Productscreen} Pro="hello"  screenOptions={{ headerStyle: {
            backgroundColor: 'red',
          }}}  options={{header:()=><View style={{flexDirection:"row",width:"100%",height:height1/15,backgroundColor:"#e5f5f7"}}><Ionn name="close" onPress={()=>{this.props.navigation.navigate("Home1")}} size={30} style={{alignSelf:"center",margin:3,color:"gray"}}></Ionn><View style={{justifyContent:"center"}}><Ionn onPress={()=>{this.props.navigation.navigate("Cart1")}} name="cart"  size={30} style={{alignSelf:"center",marginLeft:5,color:"gray"}}></Ionn><Text  style={{position:"absolute",borderRadius:15,width:18,height:18,top:5,backgroundColor:"#ff6363",color:"white",fontSize:12,textAlignVertical:"top",textAlign:"center"} }>{this.props.defff.length}
          </Text></View></View>}} />
          <Stack.Screen name="searchhome" component={searchhome} options={{header:()=>null}}/>
          <Stack.Screen name="seacrch55" component={search} Pro="hello"  screenOptions={{ headerStyle: {
            backgroundColor: 'red',
          }}}  options={{header:()=><View style={{flexDirection:"row",width:"100%",height:height1/15,backgroundColor:"#e5f5f7"}}><Ionn name="close" onPress={()=>{this.props.navigation.navigate("Categori")}} size={30} style={{alignSelf:"center",margin:3,color:"gray"}}></Ionn><View style={{justifyContent:"center"}}><Ionn onPress={()=>{console.warn(this.props.navigation.navigate('Cart'))}} name="cart" size={30} style={{alignSelf:"center",marginLeft:5,color:"gray"}}></Ionn><Text  style={{position:"absolute",borderRadius:15,width:18,height:18,top:5,backgroundColor:"#ff6363",color:"white",fontSize:12,textAlignVertical:"top",textAlign:"center"} }>{this.props.defff.length}
          </Text></View></View>}} />
        </Stack.Navigator>
  
    );
  }

}

 const styles = StyleSheet.create({
   SearchInput:{
     zIndex:1,
     width:"100%",
     height:"100%",
     backgroundColor:"#d8dadc",
     borderRadius:2,
     elevation:15,shadowOffset:{width:10,height:10},shadowColor:"#000",shadowOpacity:0.1,shadowRadius:30
   },
   Container:{
     width:width,
     height:"100%",
     backgroundColor:"#fff",paddingTop:20
   },
   Other:{
     backgroundColor:"#ffffff",
     //opacity:0.5
   }
   ,
   Slideshow:{
     backgroundColor:"#ffffff"
     ,width:width,
     height:500
 
 
   }
   ,
   highlight: {
     fontWeight: '700',
   },
   paggingtext:{
     color:"#53514d"
   },
   paging:{bottom:height/9, backgroundColor:"#cfd1d4",borderRadius:10,width:7,height:7,margin:3,left:5,},
   paging1:{bottom:height/9,left:5,
     backgroundColor:"#4bb4f4",borderRadius:10,width:7,height:7,margin:3,
   },
   footer:{alignSelf:"center",
     justifyContent:"center",
     width:"80%"
     ,height:"8%",backgroundColor:"#d1d1cf",borderWidth: 1,
     //borderRadius: 20,
     borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 10,
      backgroundColor:"#ff0000",
      
      shadowRadius: 40,
      elevation: 3,
      
   },footeritems:{
    color :"#333",fontSize:200,width:"25%",alignItems:"center",alignContent:"center",textAlign:"center"
   },footeritems1:{
    color :"#ff0000",fontSize:200,width:"25%",alignItems:"center",alignContent:"center",textAlign:"center"
   }
 });
 const Mapdiss=(Real)=>{
   return{
    defff:Real
   }
 }
 export default connect(Mapdiss)(App1);
 /*/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* import React from 'react';
 //import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   Text,
   StyleSheet,
   
   TextInput,
   useColorScheme,
   View,
   Image,
   Dimensions,
   Button,
   Alert
 } from 'react-native';
 //import {} from 'react-navigation-material-bottom-tabs'
 
 //import Icon from 'react-native-vector-icons/Ionicons'
 

 <a href="https://www.digikala.com/landings/lucky-draw/?&amp;promo_name=%DA%AF%D8%B1%D8%AF%D9%88%D9%86%D9%87+%D8%B4%D8%A7%D9%86%D8%B3&amp;promo_position=home_slider_new&amp;promo_creative=71918&amp;bCode=71918" class="c-main-slider__slide swiper-slide js-main-page-slider-image swiper-slide-active" title="گردونه شانس" data-id="71918" data-is-trackable="" target="_blank" style="background-image: url(&quot;https://dkstatics-public.digikala.com/digikala-adservice-banners/3292dc43aa6df1143292145c26dbf59282d21914_1622033545.jpg?x-oss-process=image/quality,q_80&quot;); width: 883px; transition-duration: 0ms; opacity: 0.998867; transform: translate3d(884px, 0px, 0px);" data-gtm-vis-first-on-screen-9070001_346="1844" data-gtm-vis-total-visible-time-9070001_346="100" data-gtm-vis-has-fired-9070001_346="1" data-swiper-slide-index="0"></a>


 const {width}=Dimensions.get("window")
 const height=width*0.6;
 const images =[
   'https://wallpapercave.com/wp/wp2960877.jpg',
   'https://wallpapercave.com/wp/wp2960877.jpg',
   'https://wallpapercave.com/wp/wp2960877.jpg',
   'https://wallpapercave.com/wp/wp2960877.jpg',
   'https://wallpapercave.com/wp/wp2960850.jpg',
   'https://wallpapercave.com/wp/wp2960890.jpg',
   'https://wallpapercave.com/wp/wp2960890.jpg'
   ,
 ]
 
 class App extends React.Component{
 
   state={
     images :[
       'http://www.picsartphotoediting.com/wp-content/uploads/2018/11/PicsArt_1447172412100-300x188.jpg',
       "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
        "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
       "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
       "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
       "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
       "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
       "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
       "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
       ,
     ],
     selectedindex:0,
   }
   setselectedindex= ( event )=>{
     const viewsize=event.nativeEvent.layoutMeasurement.width;
     const contentoffset=event.nativeEvent.contentOffset.x;
     const selectedindex = Math.floor(contentoffset/viewsize)
     this.setState({selectedindex})
   }
   
   render(){
     return(
       <View name="main" style={styles.Container}>
         <View flexDirection="row" style={{margin:5}}>
        <TextInput placeholder="Search in here!" style={styles.SearchInput}  />
           
         </View>
         <ScrollView style={styles.Other}>
         <View style={{height:height+40,}}>
           <View style={{height:height+40,}}>
           <ScrollView onScroll={this.change}  pagingEnabled horizontal onMomentumScrollEnd={this.setselectedindex} showsHorizontalScrollIndicator={false} style={{backgroundColor:"#ffffff",height,width}}>
              {
                this.state.images.map((image,index) =>(
                  <View key={index} style={{}} >
                  <Image
                 
                  resizeMode="contain" 
                  key={index}
                  source={{uri:image}}
                  style={{width:width-20,height,borderRadius:2,margin:10,alignContent:"center",justifyContent:"center",alignSelf:"center"}}
                  
                   />
                 </View>
                ) )
              }
              
             
           </ScrollView>
           
           </View>
           <View  style={{flexDirection:"row",position:"absolute",alignSelf:"flex-start",bottom:10}}>
           {
             this.state.images.map((image,index) =>(
              <Text deletee={this.delett} key={index} style={  index === this.state.selectedindex ? styles.paging1:  styles.paging} onPress={this.clicked
            } title={"Dd"} > </Text>
            ) )
           }
           
           </View>
         </View>
           <ScrollView style={{backgroundColor:"#ffffff",}}>
           <View flexDirection="row" style={{height:height-height/10,width:"100%",backgroundColor:"#000",alignItems:"center",alignContent:"center",alignSelf:"center",textAlign:"center",justifyContent:"center",margin:10}}>
           <Text style={{borderColor:"#c1c2c5",borderWidth:5,alignContent:"center",borderRadius:10,width:"45%",height:"80%",marginTop:0,margin:10,marginBottom:0}}>ssss</Text>
           <Text style={{borderColor:"#c1c2c5",borderWidth:5,alignContent:"center",borderRadius:10,width:"45%",height:"80%",margin:10,marginBottom:0}}>ssss</Text>
           </View>
             </ScrollView>
         </ScrollView>
         <View style={{ borderWidth: 0,padding:0,borderRadius: 5,
            borderColor: '#000',
            borderBottomWidth: 0,
            shadowColor: '#000',
            //shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 1,
            elevation: 3,}}  >
        <View style={{
          width:"100%",
          height:"100",
          
           
            borderRadius: 5,
            borderColor: '#000',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 20,
            elevation: 3,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: this.props.overflow ? this.props.overflow : 'hidden',
            width: "100%",margin:0,
            height: 50,flexDirection:"row"}} justifyContent="center" >
             <Text style={{width:"25%",alignItems:"center",alignContent:"center",textAlign:"center"}}>ss</Text>
             <Text style={{width:"25%",alignItems:"center",alignContent:"center",textAlign:"center"}}>ss</Text>
             <Text style={{width:"25%",alignItems:"center",alignContent:"center",textAlign:"center"}}>ss</Text>
             <Text style={{width:"25%",alignItems:"center",alignContent:"center",textAlign:"center"}}>ss</Text>
        </View>
      
      </View>
       </View>
     )
   }
 }
 const styles = StyleSheet.create({
   SearchInput:{
     
     width:"100%",
     height:50,
     backgroundColor:"#d1d5d9",
     borderRadius:5,marginRight:15,
     elevation:15,shadowOffset:{width:10,height:10},shadowColor:"#000",shadowOpacity:0.1,shadowRadius:30
   },
   Container:{
     paddingTop:"5%",
     width:width,
     height:"100%",
     backgroundColor:"#fff"
   },
   Other:{
     backgroundColor:"#ffffff",
     //opacity:0.5
   }
   ,
   Slideshow:{
     backgroundColor:"#ffffff"
     ,width:width,
     height:500
 
 
   }
   ,
   highlight: {
     fontWeight: '700',
   },
   paggingtext:{
     color:"#53514d"
   },
   paging:{ backgroundColor:"#cfd1d4",borderRadius:10,width:10,height:10,margin:3,},
   paging1:{
     backgroundColor:"#888",borderRadius:10,width:10,height:10,margin:3
   },
   footer:{alignSelf:"center",
     justifyContent:"center",
     width:"80%"
     ,height:"8%",backgroundColor:"#d1d1cf",borderWidth: 1,
     //borderRadius: 20,
     borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 10,
      backgroundColor:"#ff0000",
      
      shadowRadius: 40,
      elevation: 3,
      
   }
 });
 
 export default App;*/
//  
/*/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
{/*  
 *  strict-local
 */

  /*import React from 'react';
  //import type {Node} from 'react';
  import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    StyleSheet,
    
    TextInput,
    useColorScheme,
    View,
    Image,
    Dimensions,
    Button,
    Alert
  } from 'react-native';
  //import {} from 'react-navigation-material-bottom-tabs'
  
  import Icon from 'react-native-vector-icons/Ionicons'
  
 
  const {width}=Dimensions.get("window")
  const height=width*0.6;
  const images =[
    'https://wallpapercave.com/wp/wp2960877.jpg',
    'https://wallpapercave.com/wp/wp2960877.jpg',
    'https://wallpapercave.com/wp/wp2960877.jpg',
    'https://wallpapercave.com/wp/wp2960877.jpg',
    'https://wallpapercave.com/wp/wp2960850.jpg',
    'https://wallpapercave.com/wp/wp2960890.jpg',
    'https://wallpapercave.com/wp/wp2960890.jpg'
    ,
  ]
  
  class App extends React.Component{
  
    state={
      images :[
        'http://www.picsartphotoediting.com/wp-content/uploads/2018/11/PicsArt_1447172412100-300x188.jpg',
        "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
         "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
        "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
        "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
        "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
        "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
        "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
        "http://www.picsartphotoediting.com/wp-content/uploads/2018/11/R15v2-IAMABIKER-01-300x181.jpg",
        ,
      ],
      selectedindex:0,
    }
    setselectedindex= ( event )=>{
      const viewsize=event.nativeEvent.layoutMeasurement.width;
      const contentoffset=event.nativeEvent.contentOffset.x;
      const selectedindex = Math.floor(contentoffset/viewsize)
      this.setState({selectedindex})
    }
    
    render(){
      return(
        <View name="main" style={styles.Container}>
          <View flexDirection="row" style={{margin:5}}>
         <TextInput placeholder="Search in here!" style={styles.SearchInput}  />
            
          </View>
          <ScrollView style={styles.Other}>
          <View style={{height:height+40,}}>
            <View style={{height:height+40,}}>
            <ScrollView onScroll={this.change}  pagingEnabled horizontal onMomentumScrollEnd={this.setselectedindex} showsHorizontalScrollIndicator={false} style={{backgroundColor:"#ffffff",height,width}}>
               {
                 this.state.images.map((image,index) =>(
                   <View key={index} style={{}} >
                   <Image
                  
                   resizeMode="contain" 
                   key={index}
                   source={{uri:image}}
                   style={{width:width-20,height,borderRadius:2,margin:10,alignContent:"center",justifyContent:"center",alignSelf:"center"}}
                   
                    />
                  </View>
                 ) )
               }
               
              
            </ScrollView>
            
            </View>
            <View  style={{flexDirection:"row",position:"absolute",alignSelf:"flex-start",bottom:10}}>
            {
              this.state.images.map((image,index) =>(
               <Text deletee={this.delett} key={index} style={  index === this.state.selectedindex ? styles.paging1:  styles.paging} onPress={this.clicked
             } title={"Dd"} > </Text>
             ) )
            }
            
            </View>
          </View>
            <ScrollView style={{backgroundColor:"#fff",padding:0}}>
              <View flexDirection="row" style={{height:height-height/10,width:"100%",backgroundColor:"#fff",alignItems:"center",alignContent:"center",alignSelf:"center",textAlign:"center",justifyContent:"center"}}>
            <Text style={{textAlign:"center",justifyContent:"center",alignItems:"center",textAlignVertical:"center",borderColor:"#c1c2c5",borderWidth:2,alignContent:"center",borderRadius:10,width:"45%",height:"98%",marginHorizontal:5,marginBottom:0}}>ssss</Text>
            <Text style={{textAlign:"center",justifyContent:"center",alignItems:"center",textAlignVertical:"center",borderColor:"#c1c2c5",borderWidth:2,alignContent:"center",borderRadius:10,width:"45%",height:"98%",marginHorizontal:5,marginBottom:0}}>ssss</Text>
            </View>
            <View flexDirection="row" style={{textAlign:"center",justifyContent:"center",alignItems:"center",textAlignVertical:"center",height:height-height/10,width:"100%",backgroundColor:"#fff",alignItems:"center",alignContent:"center",alignSelf:"center",textAlign:"center",justifyContent:"center"}}>
            <Text style={{textAlign:"center",justifyContent:"center",alignItems:"center",textAlignVertical:"center",borderColor:"#c1c2c5",borderWidth:2,alignContent:"center",borderRadius:10,width:"45%",height:"98%",marginHorizontal:5,marginBottom:0}}>ssss</Text>
            <Text style={{textAlign:"center",justifyContent:"center",alignItems:"center",textAlignVertical:"center",borderColor:"#c1c2c5",borderWidth:2,alignContent:"center",borderRadius:10,width:"45%",height:"98%",marginHorizontal:5,marginBottom:0,fontSize:50}}>Item shop</Text>
            </View>
              </ScrollView>
          </ScrollView>
          <View style={{ borderWidth: 0,padding:0,borderRadius: 5,
             borderColor: '#000',
             borderBottomWidth: 0,
             shadowColor: '#000',
             //shadowOffset: { width: 0, height: 2 },
             shadowOpacity: 0.08,
             shadowRadius: 1,
             elevation: 3,}}  >
         <View style={{
           width:"100%",
           height:"100",
           
            
             borderRadius: 5,
             borderColor: '#000',
             borderBottomWidth: 0,
             shadowColor: '#000',
             shadowOffset: { width: 0, height: 2 },
             shadowOpacity: 0.8,
             shadowRadius: 20,
             elevation: 3,
             justifyContent: 'center',
             alignItems: 'center',
             overflow: this.props.overflow ? this.props.overflow : 'hidden',
             width: "100%",margin:0,
             height: 50,flexDirection:"row"}} justifyContent="center" >
              <Text style={{width:"25%",alignItems:"center",alignContent:"center",textAlign:"center"}}>ss</Text>
              <Text style={{width:"25%",alignItems:"center",alignContent:"center",textAlign:"center"}}>ss</Text>
              <Text style={{width:"25%",alignItems:"center",alignContent:"center",textAlign:"center"}}>ss</Text>
              <Text style={{width:"25%",alignItems:"center",alignContent:"center",textAlign:"center"}}>ss</Text>
         </View>
       
       </View>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    SearchInput:{
      
      width:"100%",
      height:50,
      backgroundColor:"#d1d5d9",
      borderRadius:5,marginRight:15,
      elevation:15,shadowOffset:{width:10,height:10},shadowColor:"#000",shadowOpacity:0.1,shadowRadius:30
    },
    Container:{
      paddingTop:"5%",
      width:width,
      height:"100%",
      backgroundColor:"#fff"
    },
    Other:{
      backgroundColor:"#ffffff",
      //opacity:0.5
    }
    ,
    Slideshow:{
      backgroundColor:"#ffffff"
      ,width:width,
      height:500
  
  
    }
    ,
    highlight: {
      fontWeight: '700',
    },
    paggingtext:{
      color:"#53514d"
    },
    paging:{ backgroundColor:"#cfd1d4",borderRadius:10,width:10,height:10,margin:3,},
    paging1:{
      backgroundColor:"#888",borderRadius:10,width:10,height:10,margin:3
    },
    footer:{alignSelf:"center",
      justifyContent:"center",
      width:"80%"
      ,height:"8%",backgroundColor:"#d1d1cf",borderWidth: 1,
      //borderRadius: 20,
      borderBottomWidth: 0,
       shadowColor: '#000',
       shadowOffset: { width: 3, height: 5 },
       shadowOpacity: 10,
       backgroundColor:"#ff0000",
       
       shadowRadius: 40,
       elevation: 3,
       
    }
  });
   [1, {"uri": "https://dkstatics-public.digikala.com/digikala-products/caa4e7d9543637cf8921b67f26803827c864e269_1618918880.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15"}, {"uri": "https://dkstatics-public.digikala.com/digikala-products/caa4e7d9543637cf8921b67f26803827c864e269_1618918880.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15"}, {"uri": "https://dkstatics-public.digikala.com/digikala-products/caa4e7d9543637cf8921b67f26803827c864e269_1618918880.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15"}, {"uri": "https://dkstatics-public.digikala.com/digikala-products/caa4e7d9543637cf8921b67f26803827c864e269_1618918880.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15"}, {"uri": "https://dkstatics-public.digikala.com/digikala-products/caa4e7d9543637cf8921b67f26803827c864e269_1618918880.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15"}, 1, 1, 3, 3, 3]
  export default App;*/
