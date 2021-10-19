
import React from 'react';
var value =[{erfan:"name"}]
const height1=Dimensions.get("window").height
//import type {Node} from 'react';
//import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ProductScreen from './ProductScreen';
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
import Cart1 from './Cart1';
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
import Cartjson from '../../Cart-json.json'
import { Data } from '../../Data';
import Prodeuct13 from './Productscreen12';
import search1 from './search1';
var cart  = Cartjson

class App extends React.Component{
    render(){
        return<Text>sdsd</Text>
    }
}

export default App;
