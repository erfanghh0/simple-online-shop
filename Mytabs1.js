
import * as React from 'react';
import { Text, TouchableOpacity, AsyncStorage,View ,Dimensions, Alert, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
import Home from './Tabs/Home'
import Profile from './Tabs/Profile';
import Categories from './Tabs/Categories'
import Cart from './Tabs/Cart'
import { Provider } from 'react-redux';
import Cartjson from './Cart-json.json'
// ...
import CartItems from './REDUCERS/Cartitems'
import Product from './Tabs/homescreens/ProductScreen'
import { createStore } from 'redux';
import Texx from './Texx';
import datasend from './datasendrec.json'
import { connect } from 'react-redux';
const heightbb = height/16
import Ionn from 'react-native-vector-icons/Ionicons'
import App from './App';
//import heii from './heighttab.json'
const store=createStore(CartItems)
const Tab = createBottomTabNavigator();
class MyTabs extends React.Component {
  constructor(props){

    super(props);
    this.state={
      
    }

  }
  
  render(){
    
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="white"/>
      <Tab.Navigator initialRouteName="Home"  screenOptions={{tabBarActiveTintColor:"#7fc3e0",tabBarStyle:{backgroundColor
      :"white",height:height/16}}} >
        <Tab.Screen tete={false} name="Home" component={Home} options={{header:()=>null}} options={{header:()=>null,tabBarIcon:({color,size})=>{return<Ionn name="home" color={color} size={30}></Ionn>},tabBarLabel:"خانه",tabBarActiveTintColor:"#7fc3e0"}} />
        <Tab.Screen name="Cart" component={Cart} options={{header:()=>null}} options={{header:()=>null,tabBarIcon:({color,size})=>{return<Ionn name="cart" color={color} size={30}></Ionn>},tabBarLabel:"سبد خرید",tabBarLabelStyle:{fontSize:12},tabBarActiveTintColor:"#7fc3e0"}} />
        <Tab.Screen name="categories" component={Categories} options={{header:()=>null,tabBarIcon:({color,size})=>{return<Ionn name="list-circle" color={color} size={30}></Ionn>},tabBarLabel:"دسته بندی ها",tabBarActiveTintColor:"#7fc3e0"}} />
        <Tab.Screen  name="پروفایل" component={Profile}  options={{header:()=>{return null},tabBarIcon:({color,size})=>{return<Ionn name="person" color={color} size={30}></Ionn>},tabBarLabel:"پروفایل",tabBarActiveTintColor:"#7fc3e0"}} />
      </Tab.Navigator>
     <Texx/>
     
      </Provider>
    );
  }

  
}

const mapstst=(state1)=>{
  return {state:state1}
}

export default MyTabs;