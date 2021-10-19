
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
  Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Tabs/Profile';
const Stack = createNativeStackNavigator();
import datasend from './datasendrec.json'
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

const appp =()=>{
    return<View><Text onPress={()=>{ Cart.push({"id": 50557,"name": "گوشی موبایل سامسونگ مدل Galaxy A10s SM-A107F/DS دو سیم کارت ظرفیت 32 گیگابای","img":"https://dkstatics-public.digikala.com/digikala-products/113562469.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"});console.log(Cart)}}>sdsdsd</Text></View>
  }
  export default appp;