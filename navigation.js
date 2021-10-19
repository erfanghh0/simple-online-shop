

 import React from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack'
 import { NavigationContainer } from '@react-navigation/native';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import Home from './Home'
 import Profile  from './Profile';
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 const Stack = createNativeStackNavigator();
 class App extends React.Component{
   render(){
     return (<NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
           name="Home"
           component={Home}
           options={{ title: 'Welcome' }}
         />
         <Stack.Screen name="Profile" component={Profile} />
       </Stack.Navigator>
     </NavigationContainer>
     );
   }
 }
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
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
 
 export default App;
 {/* 
 
   
 
 
  import React from 'react';
  //import type {Node} from 'react';
  //import Icon1 from 'react-native-vector-icons/FontAwesome';
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
  
  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  const width1 = Dimensions.get("window").width;
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
  
  class Home extends React.Component{
  
    state={
      images :[
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/be01cfe96bd06940731ef18ec744ff4d097e87cb_1629205613.jpg?x-oss-process=image/quality,q_80',
        "https://www.digikala.com/static/files/c4cc3441.png",
         "https://dkstatics-public.digikala.com/digikala-adservice-banners/904db8a169ce8fdc6493e21b6948d3e32a19ae68_1626258276.jpg?x-oss-process=image/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/1171b68c30d1f579a3a1bea30cad4265ef5703bf_1626608832.jpg?x-oss-process=image/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/3292dc43aa6df1143292145c26dbf59282d21914_1622033545.jpg",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/308c1ef1767aaa78be751958fef8bf3f99c8200f_1629098437.jpg",
        
        ,
      ],
      selectedindex:0,
      footeritemscolor:"#333",
      item1:false,
      item2:false,
      item3:false,
      item4:1,
      itemcolor1:"#333",
      itemcolor2:"#333",
      itemcolor3:"#333",
      itemcolor4:"#333",
      
    }
    setselectedindex= ( event )=>{
      const viewsize=event.nativeEvent.layoutMeasurement.width;
      const contentoffset=event.nativeEvent.contentOffset.x;
      const selectedindex = Math.floor(contentoffset/viewsize)
      this.setState({selectedindex})
    }
    
    
    render(){
    
      
      return(<View>
         <View style={{height:height1/12,borderColor:"#7fc3e0",borderBottomWidth:2,}}><TextInput  placeholder="در دیجیکالا جست و جو کنید" placeholderTextColor="#5295df"  style={{margin:5,height:height1/13-10,backgroundColor:"#cef6d5",borderRadius:5}} /></View>
        <ScrollView>
       <ScrollView style={styles.Other}>
       <View style={{height:height+15}}>
         <View style={{height:height+15}}>
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
         <View  style={{flexDirection:"row",position:"absolute",alignSelf:"flex-start",height:0,bottom:0,backgroundColor:"red"}}>
         {
           this.state.images.map((image,index) =>(
           <View><Text deletee={this.delett} key={index} style={  index === this.state.selectedindex ? styles.paging1:  styles.paging} onPress={this.clicked
           } title={"Dd"} >aa</Text></View>
          ) )
         }
         </View>
       </View>
     
         
       </ScrollView>
       <ScrollView style={{height:height1/7,backgroundColor:"#e7f4f4",padding:5,margin:5}} horizontal={true}>
       <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#7e3e4f",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>پوشاک</Text></View>
       <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#a4005d",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>لوازم دیجیتال</Text></View>
       <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#0859b0",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجیکالا مگ</Text></View>
       <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#c8303f",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی پی</Text></View>
       <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#67bb8a",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی ادز</Text></View>
       <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#e1dfa6",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی گیمز</Text></View>
       <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#e1dfa6",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی گیمز</Text></View>
       <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#e1dfa6",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی گیمز</Text></View>
 
       </ScrollView>
       <ScrollView horizontal={true} style={{height:height1/3,backgroundColor:"#e7f4f4",padding:10}}>
         <View style={{height:height1/3-20,width:width1/3,alignItems:"center",justifyContent:"center",borderRadius:15,marginHorizontal:5}} ><Text style={{alignSelf:"center",fontSize:35,textAlign:"center",textAlignVertical:"center",justifyContent:"center",alignContent:"center",marginHorizontal:5}}> پیشنهاد شگفت انگیز</Text></View>
         
 
         <View style={{height:height1/3-20,width:width1/3,alignItems:"center",justifyContent:"center",backgroundColor:"white",borderRadius:15,marginHorizontal:5}} ><Image source={{uri:"https://dkstatics-public.digikala.com/digikala-products/f07c2dea65409c38a170c73a7984ddebaac95e5b_1627710789.jpg?x-oss-process=image/resize,m_lfit,h_115,w_115/quality,q_60"}} style={{width:height1/6-5,height:height1/10,alignSelf:"flex-start",marginHorizontal:5,borderRadius:5}}/><Text style={{fontSize:10,marginTop:15}}>تلویزیون ال ای دی جی پلاس مدل GTV-42MH412N سایز 42 اینچ</Text><View style={{flexDirection:"row",marginTop:15}}><View style={{flex:1}}><Text style={{alignSelf:"flex-start",paddingLeft:5,textDecorationLine:"line-through",color:"gray"}}>۶,۵۹۰,۰۰۰</Text><Text style={{paddingLeft:5}}>۶,۳۲۵,۰۰۰</Text></View><View><Text style={{alignSelf:"center",textAlign:"center",backgroundColor:"#ef7267",borderRadius:10,color:"white",marginTop:10,marginRight:5,padding:2}}>45%</Text></View></View></View>
         <View style={{height:height1/3-20,width:width1/3,alignItems:"center",justifyContent:"center",backgroundColor:"white",borderRadius:15,marginHorizontal:5}} ><Image source={{uri:"https://dkstatics-public.digikala.com/digikala-products/e9aaee18db388e56f0ca095f4f58f97e52a0fdda_1627137445.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"}} style={{width:height1/6-5,height:height1/10,alignSelf:"flex-start",marginHorizontal:5,borderRadius:5}}/><Text style={{fontSize:10,marginTop:15}}>تلویزیون ال ای دی جی پلاس مدل GTV-42MH412N سایز 42 اینچ</Text><View style={{flexDirection:"row",marginTop:15}}><View style={{flex:1}}><Text style={{alignSelf:"flex-start",paddingLeft:5,textDecorationLine:"line-through",color:"gray"}}>۶,۵۹۰,۰۰۰</Text><Text style={{paddingLeft:5}}>۶,۳۲۵,۰۰۰</Text></View><View><Text style={{alignSelf:"center",textAlign:"center",backgroundColor:"#ef7267",borderRadius:10,color:"white",marginTop:10,marginRight:5,padding:2}}>45%</Text></View></View></View>
         <View style={{height:height1/3-20,width:width1/3,alignItems:"center",justifyContent:"center",backgroundColor:"white",borderRadius:15,marginHorizontal:5}} ><Image source={{uri:"https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1607433995.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"}} style={{resizeMode:"contain",width:"100%",height:height1/8,alignSelf:"flex-start",marginHorizontal:5,borderRadius:5}}/><Text style={{fontSize:10,marginTop:15}}>تلویزیون ال ای دی جی پلاس مدل GTV-42MH412N سایز 42 اینچ</Text><View style={{flexDirection:"row",marginTop:15}}><View style={{flex:1}}><Text style={{alignSelf:"flex-start",paddingLeft:5,textDecorationLine:"line-through",color:"gray"}}>۶,۵۹۰,۰۰۰</Text><Text style={{paddingLeft:5}}>۶,۳۲۵,۰۰۰</Text></View><View><Text style={{alignSelf:"center",textAlign:"center",backgroundColor:"#ef7267",borderRadius:10,color:"white",marginTop:10,marginRight:5,padding:2}}>45%</Text></View></View></View>
         <View style={{height:height1/3-20,width:width1/3,alignItems:"center",justifyContent:"center",backgroundColor:"white",borderRadius:15,marginHorizontal:5}} ><Image source={{uri:"https://dkstatics-public.digikala.com/digikala-products/7b59f46b818b118303b0fdd30a9b7ced61f57b68_1617442107.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"}} style={{resizeMode:"contain",width:"100%",height:height1/8,alignSelf:"flex-start",marginHorizontal:5,borderRadius:5}}/><Text style={{fontSize:10,marginTop:15}}>تلویزیون ال ای دی جی پلاس مدل GTV-42MH412N سایز 42 اینچ</Text><View style={{flexDirection:"row",marginTop:15}}><View style={{flex:1}}><Text style={{alignSelf:"flex-start",paddingLeft:5,textDecorationLine:"line-through",color:"gray"}}>۶,۵۹۰,۰۰۰</Text><Text style={{paddingLeft:5}}>۶,۳۲۵,۰۰۰</Text></View><View><Text style={{alignSelf:"center",textAlign:"center",backgroundColor:"#ef7267",borderRadius:10,color:"white",marginTop:10,marginRight:5,padding:2}}>45%</Text></View></View></View>
         <View style={{height:height1/3-20,width:width1/3,alignItems:"center",justifyContent:"center",backgroundColor:"white",borderRadius:15,marginHorizontal:5}} ><Image source={{uri:"https://dkstatics-public.digikala.com/digikala-products/3307128.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"}} style={{width:height1/6-5,height:height1/10,alignSelf:"flex-start",marginHorizontal:5,borderRadius:5}}/><Text style={{fontSize:10,marginTop:15}}>تلویزیون ال ای دی جی پلاس مدل GTV-42MH412N سایز 42 اینچ</Text><View style={{flexDirection:"row",marginTop:15}}><View style={{flex:1}}><Text style={{alignSelf:"flex-start",paddingLeft:5,textDecorationLine:"line-through",color:"gray"}}>۶,۵۹۰,۰۰۰</Text><Text style={{paddingLeft:5}}>۶,۳۲۵,۰۰۰</Text></View><View><Text style={{alignSelf:"center",textAlign:"center",backgroundColor:"#ef7267",borderRadius:10,color:"white",marginTop:10,marginRight:5,padding:2}}>45%</Text></View></View></View>
         <View style={{height:height1/3-20,width:width1/3,alignItems:"center",justifyContent:"center",backgroundColor:"white",borderRadius:15,marginHorizontal:5}} ><Image source={{uri:"https://dkstatics-public.digikala.com/digikala-products/121798896.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"}} style={{width:height1/6-5,height:height1/10,alignSelf:"flex-start",marginHorizontal:5,borderRadius:5}}/><Text style={{fontSize:10,marginTop:15}}>تلویزیون ال ای دی جی پلاس مدل GTV-42MH412N سایز 42 اینچ</Text><View style={{flexDirection:"row",marginTop:15}}><View style={{flex:1}}><Text style={{alignSelf:"flex-start",paddingLeft:5,textDecorationLine:"line-through",color:"gray"}}>۶,۵۹۰,۰۰۰</Text><Text style={{paddingLeft:5}}>۶,۳۲۵,۰۰۰</Text></View><View><Text style={{alignSelf:"center",textAlign:"center",backgroundColor:"#ef7267",borderRadius:10,color:"white",marginTop:10,marginRight:5,padding:2}}>45%</Text></View></View></View>
         <View style={{height:height1/3-20,width:width1/3,alignItems:"center",justifyContent:"center",backgroundColor:"white",borderRadius:15,marginHorizontal:5}} ><Image source={{uri:"https://dkstatics-public.digikala.com/digikala-products/5395868.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"}} style={{width:height1/6-5,height:height1/10,alignSelf:"flex-start",marginHorizontal:5,borderRadius:5}}/><Text style={{fontSize:10,marginTop:15}}>تلویزیون ال ای دی جی پلاس مدل GTV-42MH412N سایز 42 اینچ</Text><View style={{flexDirection:"row",marginTop:15}}><View style={{flex:1}}><Text style={{alignSelf:"flex-start",paddingLeft:5,textDecorationLine:"line-through",color:"gray"}}>۶,۵۹۰,۰۰۰</Text><Text style={{paddingLeft:5}}>۶,۳۲۵,۰۰۰</Text></View><View><Text style={{alignSelf:"center",textAlign:"center",backgroundColor:"#ef7267",borderRadius:10,color:"white",marginTop:10,marginRight:5,padding:2}}>45%</Text></View></View></View>
         
 
         
         
 
 
       
       </ScrollView>
       <ScrollView style={{marginVertical:10,height:550}}><View style={{paddingHorizontal:10,}}><Text>پرفروش ترین کالاها</Text></View>
       <View style={{height:height+15}}>
         <View style={{height:height+15}}>
         <ScrollView onScroll={this.change}  pagingEnabled horizontal onMomentumScrollEnd={this.setselectedindex} showsHorizontalScrollIndicator={false} style={{backgroundColor:"#ffffff",height:height1,width}}>
            {
              this.state.images.map((image,index) =>(
                <View key={index} style={{height:height1}} >
                <View style={{width:width,height:height1,flexDirection:"row"}}><View style={{height:height1,backgroundColor:"red"}}>
                  <View style={{flexDirection:"row"}}><Image style={{width:width1/8,height:height1/7}} source={{uri:"https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1607433995.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"}}/>
                  <Text style={{textAlign:"center",textAlignVertical:"center",fontSize:height1/25}}>1</Text>
                  <Text style={{textAlign:"center",textAlignVertical:"center",fontSize:height1/65,margin:2}}> iphone12pro گوشی موبایل  </Text>
                  </View>
                  <Text>sdsd</Text>
                  <Text>sdsd</Text>
                  </View></View>
               </View>
              ) )
            }
            
           
         </ScrollView>
         
         </View>
       </View>
       </ScrollView>
       </ScrollView>
       </View>
      )
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
  
  export default Home;
  
  
 
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
   
   export default App;
 
 
 */}