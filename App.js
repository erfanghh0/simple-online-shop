import * as React from 'react';
import { Text, TouchableOpacity,View ,Dimensions, Alert, AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
//import AsyncStorage from '@react-native-community/async-storage';
import Home from './Tabs/Home'
import Profile from './Tabs/Profile';
import Categories from './Tabs/Categories'
import Cart from './Tabs/Cart'
import { Provider } from 'react-redux';
import Cartjson from './Cart-json.json'

//import { PersistGate } from 'redux-persist/es/integration/react';
//import { persistStore,persistReducer } from 'redux-persist';
import storage from "redux-persist/es/storage"; 
// ...
//import localStorage from 'redux-persist/es/storage';
import CartItems from './REDUCERS/Cartitems'
import Product from './Tabs/homescreens/ProductScreen'
import { createStore ,combineReducers} from 'redux';
import Texx from './Texx';
import datasend from './datasendrec.json'
const heightbb = height/16
import Ionn from 'react-native-vector-icons/Ionicons'
import MyTabs from './Mytabs1';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
const reducers = combineReducers({CartItems1:CartItems})
const store=createStore(reducers)
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
//const persistor =persistStore(store)
const customTabBarStyle = {
  activeTintColor: 'red',
  inactiveTintColor: 'blue',innerHeight:500,
  backgroundColor:"red",
  style: {backgroundColor: 'blue' },
}




//var erf  ;






export default function App() {

  
  //const persistedReducer = persistReducer(persistConfig, CartItems)
  //const store = createStore(CartItems)
  
  console.log( "rrrrrrrrrrrr "+store)
  return (
    <NavigationContainer  >
      <Provider store={store}>
      
         <MyTabs />
        
         </Provider>
  
      </NavigationContainer>
  );
}
