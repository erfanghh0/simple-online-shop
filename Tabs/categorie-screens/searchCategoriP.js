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
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Profile from '../Profile';
 import { CommonActions } from "@react-navigation/native";
 const Stack = createNativeStackNavigator();
 import datasend from '../../datasendrec.json'
 //import {} from 'react-navigation-material-bottom-tabs'
 import Apps from '../../Apps'
 import Ionn from 'react-native-vector-icons/Ionicons'
 import apppq from '../../Appq';
 import { useRoute } from '@react-navigation/native';
 
 //const {navigation,route}=this.props
    /* 2. Get the param */
    //const { itemId,otherParam } = route.params;

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
 var color12name;
 var count = 0;
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

 import {Data} from '../../Data'

 import Cart12 from '../../Cart-json.json'
import { connect } from 'react-redux';


function Mypar(){
    const route = useRoute();

    return<Text>{ this.props.navigation.params.caption}</Text>
}


 class App extends React.Component{
 constructor(props){
   super(props);
   this.state={
     tt:0,
     images :[{uri:Data[this.props.route.params.id].prev1,},{uri:Data[this.props.route.params.id].prev2,id:this.props.route.params.id,},{uri:Data[this.props.route.params.id].prev1,id:this.props.route.params.id,}],id:this.props.route.params.id,
     selectedindex:0,
     footeritemscolor:"#333",
     item1:false,
     item2:false,
     item3:false,
     item4:1,
     itemcolor1:"#333",
     itemcolor2:"#333",
     itemcolor3:"#333",
     itemcolor4:"#333",colors:Data[this.props.route.params.id].colors,color12name:"مشکی",colorname:"black",savee:0,totalprice:0
   }
 }
 
   
   
   setselectedindex= ( event )=>{
     const viewsize=event.nativeEvent.layoutMeasurement.width;
     const contentoffset=event.nativeEvent.contentOffset.x;
     const selectedindex = Math.floor(contentoffset/viewsize)
     this.setState({selectedindex:selectedindex})
   }
   
   check1 =(selectedid)=>{
    this.props.addItemToCart(this.props.route.params.id,this.state.color12name,this.state.colorname,Data[selectedid].price,this.props)
    }

    
   
  

   render(){
   const productprops = this.props.route.params;
    const images2 = [productprops.prev1,productprops.prev2,productprops.prev3]


    var state1={
     
      
    }
   
    //const {navigation,route}=this.props
    //const { route } = this.props;

    

     return(
       <View>
         <TouchableOpacity onPress={()=>{if(Data[this.props.route.params.id].added == 0){this.check1(this.props.route.params.id);Data[this.props.route.params.id].added = 1;}else{Alert.alert("این آیتم در سبد خرید شما موجود است")};console.log(Data[this.props.route.params.id].added) ; }} style={{backgroundColor:"#85d9de",height:height1/15,width:height1/15,borderRadius:50,alignContent:"center",alignItems:"center",position:"absolute",elevation:3,zIndex:3,top:height1-height1/4.6,right:width1/10,justifyContent:"center",borderWidth:1,borderColor:"gray"}} ><Text style={{justifyContent:"center",fontSize:20,alignContent:"center",textAlign:"center",alignItems:"center",textAlignVertical:"center"}}>+سبد </Text></TouchableOpacity>
         <StatusBar backgroundColor="#e5f5f7"      barStyle="dark-content"/>
         <View style={{height:height1}} >
       <ScrollView style={{backgroundColor:"#e5f5f7",}}>
      <ScrollView style={styles.Other}>
      <View style={{height:height+15}}>
        <View style={{height:height+30}}>
        <ScrollView onScroll={this.change}  pagingEnabled horizontal onMomentumScrollEnd={this.setselectedindex} showsHorizontalScrollIndicator={false} style={{backgroundColor:"#ffffff",height,width,}}>
           {
             this.state.images.map((image,index) =>(
               <View key={index} style={{}} >
               <Image
              
               resizeMode="contain" 
               key={index}
               source={{uri:image.uri}}
               style={{width:width-20,height:height1/3,borderRadius:2,marginBottom:10,alignContent:"center",justifyContent:"center",alignSelf:"center"}}

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
          } title={"Dd"} >aa</Text></View>
         ) )
        }
        </View>
      </View>
    
        
      </ScrollView>
     {/*onPress={()=>{this.props.col.map((input)=>{if (input.id ==)})}}
     this.props.addItemToCart(this.props.route.params.id)
     if (input.id ==this.props.route.params.id){Alert.alert("امکان خرید این ایتم وجود ندارد چون در سبد خرید شما موجود است")}if (this.props.col.length == 0){Alert.alert("hello")}
     */ }
     <View style={{flexDirection:"row-reverse"}} style={{paddingHorizontal:width1/20,marginTop:10}}><TouchableOpacity><Text style={{color :"#56bae2",fontSize:20}}>{Data[this.props.route.params.id].cate} /  {Data[this.props.route.params.id].cate_1}  / برند {Data[this.props.route.params.id].brand}</Text></TouchableOpacity></View>
     <Text style={{paddingHorizontal:width1/20,fontSize:20,paddingVertical:5}} onPress={()=>{}}>محصول : {Data[this.props.route.params.id].name}</Text>
      <ScrollView style={{marginVertical:10,height:550}}><View style={{paddingHorizontal:10,}}></View>
      <View style={{height:height+15}}>
        <View style={{height:height+15}}>
        <Text onPress={()=>{}}
      style={{fontSize:height1/30}}>قیمت : {Data[this.props.route.params.id].price} <Text style={{textDecorationLine:"line-through",color:"gray",fontSize:height1/40}}>{Data[this.props.route.params.id].oldprice}</Text> تومان</Text>
        <Text style={{fontSize:height1/30}}> رنگ : {this.state.color12name}</Text>
        <View style={{width:"100%",height:height1/13,backgroundColor:"white",flexDirection:"row-reverse"}}>{Data[this.props.route.params.id].colors.map((items)=><TouchableOpacity onPress={()=>{this.setState({color12name:items.name,colorname:items.color1})}} style={{width:"15%",borderRadius:20,height:height1/20,borderWidth:1,borderColor:"gray",justifyContent:"center",alignContent:"center",alignItems:"center",margin:5}} ><View style={{flexDirection:"row"}}><Text  style={{backgroundColor:items.color1,height:width1/20,width:width1/20,borderRadius:15,textAlign:"center",textAlignVertical:"center"}}></Text><Text style={{margin:1}}>{items.name}</Text></View></TouchableOpacity>)}</View>
        <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}><TouchableOpacity onPress={()=>{Alert.alert("هنوز در این بخش چیزی تعبیه نشده!")}} style={{borderRadius:width1/30,width:"90%",height:height1/10,marginTop:10,backgroundColor:"#85d9de",flexDirection:"row"}}><View style={{flex:1,alignyItems:"flex-start",justifyContent:"center"}}><Ionn name="arrow-back" style={{marginLeft:10}} size={30}></Ionn></View><View style={{flex:1,alignItems:"center",justifyContent:"center"}}><Text style={{color:"white",width:"98%",marginRight:width1/20,textAlign:"center",fontSize:width1/15,marginLeft:5}}>مشاهده مشخصات</Text></View></TouchableOpacity></View>
        </View>
      </View>
      <View><Ionn></Ionn></View>
      </ScrollView>

      </ScrollView>
      {/* this.props.addItemToCart(this.props.route.params.id,this.state.color12name,this.state.colorname) */}
      </View>
      <View style={{width:"100%",height:height1/10,backgroundColor:"white"}}><Text>sss</Text></View>
       </View>
     )
   }
 }
{/* <ScrollView style={{height:height1/7,backgroundColor:"#e7f4f4",padding:5,margin:5}}   ref={ref => this.scrollView = ref} horizontal={true}>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#7e3e4f",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>پوشاک</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#a4005d",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>لوازم دیجیتال</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#0859b0",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجیکالا مگ</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#c8303f",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی پی</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#67bb8a",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی ادز</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#e1dfa6",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی گیمز</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#e1dfa6",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی گیمز</Text></View>
      <View style={{margin:5,justifyContent:"center",alignSelf:"center"}}><Text style={{backgroundColor:"#e1dfa6",width:width1/7,borderRadius:50,height:width1/7,textAlign:"center"}}></Text><Text style={{textAlign:"center",fontSize:12}}>دیجی گیمز</Text></View>

      </ScrollView>
      <ScrollView horizontal={true} style={{height:height1/3,backgroundColor:"#e5f5f7",padding:10}}>
        <View style={{height:height1/3-20,width:width1/3,alignItems:"center",justifyContent:"center",borderRadius:15,marginHorizontal:5}} ><Text style={{alignSelf:"center",fontSize:35,textAlign:"center",textAlignVertical:"center",justifyContent:"center",alignContent:"center",marginHorizontal:5}}  title="Go to Jane's profile"
      onPress={() =>
        
       {
         datasend[0].height = 0
        //AsyncStorage.setItem('Key_27', JSON.stringify( datasend[0].height));
        
        //Alert.alert("Value Stored Successfully.")
     
        //Alert.alert(datasend[0].clicked)
        console.log(datasend[0].height)
        this.props.navigation.navigate('apppq',{name:'sss'})}
      }> پیشنهاد شگفت انگیز</Text></View>
        

        {Data.map((items)=> {

if(items.place== "home"){
  return <View style={{height:height1/3-20,width:width1/3,alignItems:"center",justifyContent:"center",backgroundColor:"white",borderRadius:15,marginHorizontal:5}} ><Image source={{uri:items.uri}} style={{width:"100%",resizeMode:"contain",height:height1/7,marginHorizontal:5,borderRadius:5}}/><Text style={{fontSize:10,marginTop:15}}>تلویزیون ال ای دی جی پلاس مدل GTV-42MH412N سایز 42 اینچ</Text><View style={{flexDirection:"row",marginTop:15}}><View style={{flex:1}}><Text style={{paddingLeft:5,textDecorationLine:"line-through",color:"gray"}}>۶,۵۹۰,۰۰۰</Text><Text style={{paddingLeft:5}}>۶,۳۲۵,۰۰۰</Text></View><View><Text style={{textAlign:"center",backgroundColor:"#7fc3e0",borderRadius:10,color:"white",marginTop:10,marginRight:5,padding:2}}>45%</Text></View></View></View>
}

})}
        

        
        


      
      </ScrollView>*/}
const App1 =({Propss})=>{
  return (
 
    
    <Stack.Navigator screenOptions={{backgroundColor:"red"}} >
        <Stack.Screen 
          name="Home"
          component={App}
          options={ {header:()=>null} }
        />
        <Stack.Screen name="apppq" component={apppq}  options={{title:"hey", tabBarVisible: false,headerStyle: {
            backgroundColor: 'red',
          },}}/>
      </Stack.Navigator>

  );
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
 export default connect(mapstt,mapDispatchToProps11)(App);
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
