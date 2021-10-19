/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
 const Stack = createNativeStackNavigator();
 import Ionn from 'react-native-vector-icons/Ionicons'
 //import Icon from 'react-native-vector-icons/Ionicons'
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import SMS from './profilescreens/SMS'
 const width1 = Dimensions.get("window").width;
//import Shop from './Shopping';
 const {width}=Dimensions.get("window")
 const height1=Dimensions.get("window").height
 const height=width*0.6;
 //import DataBase from './Data base/dummy.db'
 import datasend from '../datasendrec.json'
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
 
 class Profile extends React.Component{
 
   constructor(){
       super();
    this.state={
      value:0,//Database:DataBase
    }
   }
   
   render(){
   
   // this.props.navigation.setOptions({tabBarVisible:false})
     return(<ScrollView  keyboardShouldPersistTaps='handled' style={{alignSelf:"flex-end",height:height1,width:"100%",alignContent:"flex-start",flexDirection:"column-reverse",backgroundColor:"white"}}>
       <View style={{width:"100%",height:height1/1.5,justifyContent:"center",}}><Text style={{textAlignVertical:"center",textAlign:"center",fontSize:height1/8}}>دیجیکالا</Text></View>
       <View style={{margin:5}}><Text style={{fontSize:height1/35}}>برای ورود به دیجیکالا اطلاعات خود را وارد کنید</Text></View>
       <StatusBar backgroundColor="white"      barStyle="dark-content"/>
        
        <View style={{marginHorizontal:5,backgroundColor:"white",padding:5}}>
          <TouchableOpacity style={{backgroundColor:"#85d9de",height:height1/15,borderRadius:10}} onPress={()=>{
           
              //Alert.alert(this.state.value)
              this.props.navigation.navigate('gotosms',{phonenumber:this.state.value})
          }}>
            <Text style={{width:"100%",height:height1/15,borderRadius:10,textAlign:"center",textAlignVertical:"center",fontSize:height1/35}}>ورود به پروفایل{"   >"}</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
     )
   }
 }{/*"#76ccb2"*/}
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

        class Navv extends React.Component{

          render(){
            return <Stack.Navigator screenOptions={{backgroundColor:"red"}}>
          
               
          <Stack.Screen name="Profile" component={Profile} Pro="hello"  screenOptions={{ headerStyle: {
            backgroundColor: 'red',
          }}}  options={{header:()=>null}} />
          
          <Stack.Screen 
            name="gotosms"
            component={SMS}
            options={ {header:()=>null} }
          />
        </Stack.Navigator>
      
          }

        }
 export default Navv;
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
  
  export default App;*/
