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
   AsyncStorage,Modal,
   TextInput,
   useColorScheme,
   View,
   Image,
   Dimensions,
   Button,
   Alert,
   TouchableOpacity,Animated,Scroll, TouchableHighlightBase, ActivityIndicator, ToastAndroid
 } from 'react-native';
 import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
 //import { launchImageLibrary,launchCamera} from "react-native-image-picker";
 import { PermissionsAndroid } from 'react-native';
 //import {} from 'react-navigation-material-bottom-tabs'
 import RBSheet from "react-native-raw-bottom-sheet";
 //import Icon from 'react-native-vector-icons/Ionicons'
 import Ionn from 'react-native-vector-icons/Ionicons'
 import Toast from 'react-native-toast-message';
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
 import * as Animatable from 'react-native-animatable';
 import datasend from '../../datasendrec.json'
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
      value1:'',
      animValue:30,
      name:"", namecolor:"#7fc3e0",
      lastname:"",lastnamecolor:"#7fc3e0",
      adress:"",adresscolor:"#7fc3e0",
      email:"",
      telephone:"0",telephonecolor:"#7fc3e0",
      gender:0,
      picAdress:"",picAdresscolor:'#7fc3e0',
      UserInfo1:{},modalVisible:false,dataputed:"0",modal2:false,modal3:false,
       flag:false,modal4:false
      
        

      
        
      
    }
   }
   componentDidMount() {
    
    AsyncStorage.getItem("name").then((value)=>{this.setState({name:value})})
    AsyncStorage.getItem("lastname").then((value)=>{this.setState({lastname:value})})
    AsyncStorage.getItem("email").then((value)=>{this.setState({email:value})})
    AsyncStorage.getItem("adress").then((value)=>{this.setState({adress:value})})
    AsyncStorage.getItem("picadress").then((value)=>{this.setState({picAdress:value})})
    AsyncStorage.getItem("telephone").then((value)=>{this.setState({telephone:Number(value)})})
    AsyncStorage.getItem("gender").then((value)=>{this.setState({gender:Number(value)})})
    AsyncStorage.getItem("dataputed").then((value)=>{this.setState({dataputed:value})})

    console.log("Sdsdd"+this.state.UserInfo1)
  }
  
   render(){
    if(this.state.flag){
      Alert.alert("فیلد های قرمز را پر کنید")
      this.setState({flag:false})
    }
    if(this.state.dataputed==null){
      return <ScrollView>
                 <View><View><Text style={{fontSize:width1/20,marginVertical:10}}>لطفا اطلاعات زیر را تکمیل و ذخیره کنید</Text></View>
              {/*<Text onPress={()=>{console.warn(UserInfo)}}>{this.state.name +"\n"+this.state.lastname+"\n"+this.state.adress+"\n"+this.state.picAdress+"\n"+this.state.telephone}</Text>*/}
              <View ><Text style={{marginRight:5}}>نام*</Text><TextInput value={this.state.name} onChangeText={(val)=>{this.setState({name:val})}}  placeholderTextColor="gray" placeholder={this.state.UserInfo1.name} style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:this.state.namecolor}}/></View>
              <View ><Text style={{marginRight:5}}>نام خانوادگی*</Text><TextInput value={this.state.lastname} onChangeText={(val)=>{this.setState({lastname:val})}} placeholder={this.state.UserInfo1.lastname} style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:this.state.lastnamecolor}}/></View>
              <View ><Text style={{marginRight:5}}>آدرس<Ionn name="location"/>*</Text><TextInput value={this.state.adress} onChangeText={(val)=>{this.setState({adress:val})}} placeholder={this.state.UserInfo1.adress} style={{height:height1/10,textAlignVertical:"top",width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:this.state.adresscolor}}/></View>
              <View ><Text style={{marginRight:5}}>ایمیل</Text><TextInput value={this.state.email} onChangeText={(val)=>{this.setState({email:val})}} placeholder={this.state.UserInfo1.email} style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:"#7fc3e0"}}/></View>
              <View ><Text style={{marginRight:5}}>شماره تلفن <Ionn name="keypad"/>*</Text><TextInput value={this.state.telephone==null?this.setState({telephone:0}): this.state.telephone.toString()} onChangeText={(val)=>{this.setState({telephone:val.toString()})}} placeholder={this.state.UserInfo1.email} keyboardType="phone-pad" style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:this.state.telephonecolor}}/></View>
              <View animation="zoomIn"style={{marginTop:10,borderBottomColor:"#7fc3e0",borderBottomWidth:3}}><Text style={{borderBottomColor:"#7fc3e0",borderBottomWidth:3,fontSize:height1/40,textAlign:"center"}}>جنسیت خود را انتحاب کنید*</Text><View style={{flexDirection:"row",width:"100%"}}>
        <View style={{flex:1,paddingTop:10}}><View><Ionn onPress={()=>{this.setState({gender:0})}} name="ios-man"  style={{alignSelf:"center",color:this.state.gender==0?"#7fc3e0" :"black"}} size={height1/15} /><Text style={{textAlign:"center",fontSize:30}}>مرد</Text></View></View>
        <View style={{flex:1,paddingTop:10,paddingBottom:5}}><View><Ionn name="woman" onPress={()=>{this.setState({gender:1})}} style={{alignSelf:"center",color:this.state.gender==1?"#7fc3e0" :"black"}} size={height1/15}  /><Text style={{textAlign:"center",fontSize:30}}>زن</Text></View></View>
        </View>
        
        </View>
            <View style={{alignItems:"center",marginVertical:10}}><TouchableOpacity onPress={()=>{this.RBSheet.open();PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)}} style={{}}><Image  style={{width:height1/4.5,height:height1/4.5,borderRadius:height1,borderWidth:2,borderColor:"black",padding:2}} source={{uri:this.state.picAdress}}></Image>
            <Text>یک عکس به دلخواه انتخاب کنید<Ionn name="camera" style={{}} size={30}/></Text>
            </TouchableOpacity></View>       
              <TouchableOpacity onPress={()=>{
                
                console.log(this.state.telephone==null&&this.state.name==null&&this.state.lastname==null&&this.state.adress==null)
                AsyncStorage.setItem("name",this.state.name)
                AsyncStorage.setItem("lastname",this.state.lastname)
                AsyncStorage.setItem("email",this.state.email)
                AsyncStorage.setItem("adress",this.state.adress)
                AsyncStorage.setItem("picadress",this.state.picAdress)
                AsyncStorage.setItem("telephone",this.state.telephone.toString())
                AsyncStorage.setItem("gender",this.state.gender.toString())
                   AsyncStorage.setItem("dataputed","1")
      
        
                AsyncStorage.getItem("name").then((value)=>{this.setState({name:value})})
            AsyncStorage.getItem("lastname").then((value)=>{this.setState({lastname:value})})
            AsyncStorage.getItem("email").then((value)=>{this.setState({email:value})})
            AsyncStorage.getItem("adress").then((value)=>{this.setState({adress:value})})
            AsyncStorage.getItem("picadress").then((value)=>{this.setState({picAdress:value})})
            AsyncStorage.getItem("telephone").then((value)=>{this.setState({telephone:value})})
            AsyncStorage.getItem("gender").then((value)=>{this.setState({gender:Number(value)})})
            AsyncStorage.getItem("dataputed").then((value)=>{this.setState({dataputed:value})})
        
                //Alert.alert(this.state.picAdress)
                this.setState({namecolor:"#7fc3e0"})
                this.setState({lastnamecolor:"#7fc3e0"})
                this.setState({adresscolor:"#7fc3e0"})
                this.setState({telephonecolor:"#7fc3e0"})
        
                if ( this.state.name == "" || this.state.name == null ) {
                  this.setState({namecolor:"red"})
                  this.setState({flag:true})
                }else{this.setState({namecolor:"#7fc3e0"})
              console.warn(this.state.name)
              }
                 if(this.state.lastname == ""|| this.state.lastname == null){
                  this.setState({lastnamecolor:"red"})
                  this.setState({flag:true})
                }else{this.setState({lastnamecolor:"#7fc3e0"})
                console.warn(this.state.name)
                }
                 if(this.state.adress==""|| this.state.adress == null){
                  this.setState({adresscolor:"red"})
                  this.setState({flag:true})
                  
                } if(this.state.telephone == 0|| this.state.telephone == null){
                  this.setState({telephonecolor:"red"})
                  this.setState({flag:true})
                } if(this.state.picAdress == ""){
        
                }/*this.setState({modalVisible:false
                /*if(this.state.telephonecolor=="#7fc3e0"&&this.state.namecolor=="#7fc3e0"&&this.state.lastnamecolor=="#7fc3e0"&&this.state.adresscolor=="#7fc3e0"){
                  this.setState({modalVisible:false})
                }*/
                console.log(this.state.telephone==null||this.state.name==null||this.state.lastname==null||this.state.adress==null)
                if(this.state.telephone==0){
                  //Alert.alert("sasdsdsdsdsdsd")
                  this.setState({modalVisible:true})
                }else if(this.state.name==null||this.state.name==""){
                  this.setState({modalVisible:true})
                }else if(this.state.lastname==null||this.state.lastname==""){
                  this.setState({modalVisible:true})
                }else if(this.state.adress==null ||this.state.adress==""){
                  this.setState({modalVisible:true})
                }else if(this.state.picAdress==null ||this.state.picAdress==""){
                  this.setState({modalVisible:true})
                  Alert.alert("یک عکس انتخاب کنید!")
                }
                else if(this.state.name!==null&&this.state.telephone!==0&&this.state.lastname!==null&&this.state.adress!==null&&this.state.picAdress!==null){
                  this.setState({modalVisible:false})
                  ToastAndroid.show(
                    "اطلاعات شما با موفقیت ذخیره شد!",
                    ToastAndroid.SHORT
                  );
                }
                }} title="save "><Text style={{backgroundColor:"#85d9de",borderRadius:30 ,height:height1/15,width:"30%",textAlign:"center",textAlignVertical:"center",alignSelf:"center",fontSize:height1/30}}>ذخیره</Text></TouchableOpacity></View>
                <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        closeOnDragDown={true}
        height={300}
        openDuration={250}
        
        customStyles={{
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            
            borderTopRightRadius:15,borderTopLeftRadius:15
          }
        }}
        >
        <TouchableOpacity onPress={()=>{PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);launchImageLibrary(options, response => {
        console.log("Response = ", response);
        
        if (response.didCancel) {
        console.log("User cancelled image picker");
        } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
        } else {
        let source = response;
        image = response
        AsyncStorage.setItem("image",JSON.stringify(source))
        AsyncStorage.getItem("image").then((value)=>{console.log("sssssssssssssssssssssssssaaaaaaaaaaaa"+value)})
        console.log("ssssssssssssssssssssss"+image)
        this.setState({picAdress:source.assets[0].uri})
        console.log("sourcessss11111111111111111111", source.assets[0].uri);
        return this.setState({picAdress:source.assets[0].uri})
        }
        })    }} style={{marginVertical:20}}><View style={{flexDirection:"row-reverse"}}><Ionn name="image" style={{marginHorizontal:5,textAlign:"center",alignSelf:"center"}} size={height1/20}/><Text style={{fontSize:height1/20}}>انتخاب از گالری</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>{PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);launchCamera(options, response => {
        console.log("Response = ", response);
        
        if (response.didCancel) {
        console.log("User cancelled image picker");
        } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
        } else {
        let source = response;
        image = response
        AsyncStorage.setItem("image",JSON.stringify(source))
        AsyncStorage.getItem("image").then((value)=>{console.log("sssssssssssssssssssssssssaaaaaaaaaaaa"+value)})
        console.log("ssssssssssssssssssssss"+image)
        this.setState({picAdress:source.assets[0].uri})
        console.log("sourcessss11111111111111111111", source.assets[0].uri);
        return this.setState({picAdress:source.assets[0].uri})
        }
        })}} style={{marginVertical:20}}><View style={{flexDirection:"row-reverse"}}><Ionn name="camera" style={{marginHorizontal:5,textAlign:"center",alignSelf:"center"}} size={height1/20}/><Text style={{fontSize:height1/20}}>گرفتن عکس</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.setState({modal3:true});console.warn("dssdsdsdsdsd")}} style={{marginVertical:20}}><View style={{flexDirection:"row-reverse"}}><Ionn name="eye" style={{marginHorizontal:5,textAlign:"center",alignSelf:"center"}} size={height1/20}/><Text style={{fontSize:height1/20}}>مشاهده عکس</Text></View></TouchableOpacity>
        </RBSheet>
        <Modal onRequestClose={()=>{this.setState({modal3:false})}} animationType="fade" visible={this.state.modal3}><Ionn name="arrow-back" size={width1/10}  onPress={()=>{this.setState({modal3:false})}}></Ionn><Image  style={{width:"100%",height:width1}} source={{uri:this.state.picAdress}}></Image></Modal>
                </ScrollView>
              
        
          }else if(this.state.dataputed=="1"){
            //Alert.alert("sdsd")
            
          
            return<ScrollView style={{backgroundColor:"white"}}>
            <Toast ref={(ref) => Toast.setRef(ref)} />  
            <View>
             {/* <Text onPress={()=>{console.warn(UserInfo)}}>{this.state.name +"\n"+this.state.lastname+"\n"+this.state.adress+"\n"+this.state.picAdress+"\n"+this.state.telephone}</Text>*/}
              <View ><Text style={{marginRight:5,fontSize:height1/35}}>نام</Text><TextInput value={this.state.name} editable={false} onChangeText={(val)=>{this.setState({name:val})}}  placeholderTextColor="gray" placeholder={this.state.UserInfo1.name} style={{paddingHorizontal:10,height:height1/10,fontSize:height1/30,color:"black",width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:this.state.name==null?"red":this.state.namecolor}}/></View>
              <View ><Text style={{marginRight:5,fontSize:height1/35}}>نام خانوادگی</Text><TextInput value={this.state.lastname} editable={false} onChangeText={(val)=>{this.setState({lastname:val})}} placeholder={this.state.UserInfo1.lastname} style={{paddingHorizontal:10,height:height1/10,fontSize:height1/30,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:this.state.lastnamecolor,color:"black",borderColor:this.state.lastname==null?"red":this.state.lastnamecolor}}/></View>
              <View ><Text style={{marginRight:5,fontSize:height1/35}}>آدرس<Ionn name="location" size={height1/35}/></Text><Text value={this.state.adress} editable={false} onChangeText={(val)=>{this.setState({adress:val})}} placeholder={this.state.UserInfo1.adress} style={{paddingHorizontal:10,paddingTop:0,height:height1/5,fontSize:height1/30,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,color:"black",borderColor:this.state.adress==null?"red":"#7fc3e0"}}>{this.state.adress}</Text></View>
              <View ><Text style={{marginRight:5,fontSize:height1/35}}>ایمیل</Text><TextInput value={this.state.email} editable={false} onChangeText={(val)=>{this.setState({email:val})}} placeholder={this.state.UserInfo1.email} style={{paddingHorizontal:10,height:height1/10,fontSize:height1/30,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,color:"black",borderColor:"#7fc3e00"}}/></View>
              <View ><Text style={{marginRight:5,fontSize:height1/35}}>شماره تلفن<Ionn name="keypad" size={height1/35}/> </Text><TextInput  editable={false} value={this.state.telephone==null?this.setState({telephone:""}): this.state.telephone.toString()} onChangeText={(val)=>{this.setState({telephone:val.toString()})}} placeholder={this.state.UserInfo1.email} keyboardType="phone-pad" style={{paddingHorizontal:10,color:"black",height:height1/10,fontSize:height1/30,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:this.state.telephone==0?"red":this.state.namecolor}}/></View>
              <View animation="zoomIn"style={{marginTop:10,borderBottomColor:"#7fc3e0",borderBottomWidth:3}}><Text style={{borderBottomColor:"#7fc3e0",borderBottomWidth:3,fontSize:height1/40,textAlign:"center"}}>جنسیت</Text><View style={{flexDirection:"row",width:"100%"}}>
        <View style={{flex:1,paddingTop:10}}><View><Ionn  name="ios-man"  style={{alignSelf:"center",color:this.state.gender==0?"#7fc3e0" :"black"}} size={height1/15} /><Text style={{textAlign:"center",fontSize:30}}>مرد</Text></View></View>
        <View style={{flex:1,paddingTop:10,paddingBottom:5}}><View><Ionn name="woman"  style={{alignSelf:"center",color:this.state.gender==1?"#7fc3e0" :"black"}} size={height1/15}  /><Text style={{textAlign:"center",fontSize:30}}>زن</Text></View></View>
        </View>
        
        </View>
            <View style={{alignItems:"center",marginVertical:10,}}><TouchableOpacity onPress={()=>{this.setState({modal2:true});PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)}} ><Image  style={{width:height1/4.5,height:height1/4.5,borderRadius:height1,opacity:1}} source={{uri:this.state.picAdress}}></Image><Text style={{textAlign:"center",color:this.state.picAdress==null||this.state.picAdress==""?"red":"black"}}> <Ionn name="eye" size={height1/45} style={{textAlignVertical:"center",textAlign:'center',}}></Ionn> مشاهده عکس</Text></TouchableOpacity></View>       
            
              <TouchableOpacity onPress={()=>{
                
                
                /*AsyncStorage.setItem("name",this.state.name)
                AsyncStorage.setItem("lastname",this.state.lastname)
                AsyncStorage.setItem("email",this.state.email)
                AsyncStorage.setItem("adress",this.state.adress)
                AsyncStorage.setItem("picadress",this.state.picAdress)
                AsyncStorage.setItem("telephone",this.state.telephone.toString())
                AsyncStorage.setItem("gender",this.state.gender.toString())
        
                AsyncStorage.getItem("name").then((value)=>{this.setState({name:value})})
            AsyncStorage.getItem("lastname").then((value)=>{this.setState({lastname:value})})
            AsyncStorage.getItem("email").then((value)=>{this.setState({email:value})})
            AsyncStorage.getItem("adress").then((value)=>{this.setState({adress:value})})
            AsyncStorage.getItem("picadress").then((value)=>{this.setState({picAdress:value})})
            AsyncStorage.getItem("telephone").then((value)=>{this.setState({telephone:value})})
            AsyncStorage.getItem("gender").then((value)=>{this.setState({gender:Number(value)})})
        
                //Alert.alert(this.state.picAdress)
                this.setState({namecolor:"#7fc3e0"})
                this.setState({lastnamecolor:"#7fc3e0"})
                this.setState({adresscolor:"#7fc3e0"})
                this.setState({telephonecolor:"#7fc3e0"})
        
                if ( this.state.name == "" || this.state.name == null ) {
                  this.setState({namecolor:"red"})
                  Alert.alert("فیلد های قرمز را پر کنید")
                }else{this.setState({namecolor:"#7fc3e0"})
              console.warn(this.state.name)
              }
                 if(this.state.lastname == ""|| this.state.lastname == null){
                  this.setState({lastnamecolor:"red"})
                  Alert.alert("فیلد های قرمز را پر کنید")
                }else{this.setState({lastnamecolor:"#7fc3e0"})
                console.warn(this.state.name)
                }
                 if(this.state.adress==""|| this.state.adress == null){
                  this.setState({adresscolor:"red"})
                  Alert.alert("فیلد های قرمز را پر کنید")
                  
                } if(this.state.telephone == 0|| this.state.telephone == null){
                  this.setState({telephonecolor:"red"})
                  Alert.alert("فیلد های قرمز را پر کنید")
                } if(this.state.picAdress == ""){
        
                }*/
                this.setState({modalVisible:true})
                }} title="ویرایش اطلاعات کاربری" style={{marginVertical:10,backgroundColor:"#85d9de",borderRadius:30 ,height:height1/15,width:"50%",textAlign:"center",textAlignVertical:"center",alignSelf:"center",fontSize:height1/30}}><Text style={{backgroundColor:"#85d9de",borderRadius:30 ,height:height1/15,width:"100%",textAlign:"center",textAlignVertical:"center",alignSelf:"center",fontSize:height1/50}} >ویرایش اطلاعات کاربری</Text></TouchableOpacity>
                <Modal onRequestClose={()=>{this.setState({modal2:false})}} animationType="fade" visible={this.state.modal2}><Ionn name="arrow-back" size={width1/10}  onPress={()=>{this.setState({modal2:false})}}></Ionn><Image  style={{width:"100%",height:width1}} source={{uri:this.state.picAdress}}></Image></Modal>
              <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        closeOnDragDown={true}
        height={300}
        openDuration={250}
        
        customStyles={{
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            
            borderTopRightRadius:15,borderTopLeftRadius:15
          }
        }}
        >
        <TouchableOpacity onPress={()=>{PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);launchImageLibrary(options, response => {
        console.log("Response = ", response);
        
        if (response.didCancel) {
        console.log("User cancelled image picker");
        } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
        } else {
        let source = response;
        image = response
        AsyncStorage.setItem("image",JSON.stringify(source))
        AsyncStorage.getItem("image").then((value)=>{console.log("sssssssssssssssssssssssssaaaaaaaaaaaa"+value)})
        console.log("ssssssssssssssssssssss"+image)
        this.setState({picAdress:source.assets[0].uri})
        console.log("sourcessss11111111111111111111", source.assets[0].uri);
        return this.setState({picAdress:source.assets[0].uri})
        }
        })    }} style={{marginVertical:20}}><View style={{flexDirection:"row-reverse"}}><Ionn name="image" style={{marginHorizontal:5,textAlign:"center",alignSelf:"center"}} size={height1/20}/><Text style={{fontSize:height1/20}}>انتخاب از گالری</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>{launchCamera(options, response => {
        console.log("Response = ", response);
        
        if (response.didCancel) {
        console.log("User cancelled image picker");
        } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
        } else {
        let source = response;
        image = response
        AsyncStorage.setItem("image",JSON.stringify(source))
        AsyncStorage.getItem("image").then((value)=>{console.log("sssssssssssssssssssssssssaaaaaaaaaaaa"+value)})
        console.log("ssssssssssssssssssssss"+image)
        this.setState({picAdress:source.assets[0].uri})
        console.log("sourcessss11111111111111111111", source.assets[0].uri);
        return this.setState({picAdress:source.assets[0].uri})
        }
        })}} style={{marginVertical:20}}><View style={{flexDirection:"row-reverse"}}><Ionn name="camera" style={{marginHorizontal:5,textAlign:"center",alignSelf:"center"}} size={height1/20}/><Text style={{fontSize:height1/20}}>گرفتن عکس</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.setState({modal4:true})}} style={{marginVertical:20}}><View style={{flexDirection:"row-reverse"}}><Ionn name="eye" style={{marginHorizontal:5,textAlign:"center",alignSelf:"center"}} size={height1/20}/><Text style={{fontSize:height1/20}}>مشاهده عکس</Text></View></TouchableOpacity>
        </RBSheet>
        <Modal onRequestClose={()=>{this.setState({modal4:false})}} animationType="fade" visible={this.state.modal4}><Ionn name="arrow-back" size={width1/10}  onPress={()=>{this.setState({modal4:false})}}></Ionn><Image  style={{width:"100%",height:width1}} source={{uri:this.state.picAdress}}></Image></Modal>
        <RBSheet></RBSheet>
            </View>
            <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    Alert.alert('اطلاعات را ذخیره کنید');
                    
                  }}><ScrollView>
                    <StatusBar backgroundColor="white"/>
                 <View>
              {/*<Text onPress={()=>{console.warn(UserInfo)}}>{this.state.name +"\n"+this.state.lastname+"\n"+this.state.adress+"\n"+this.state.picAdress+"\n"+this.state.telephone}</Text>*/}
              <View ><Text style={{marginRight:5}}>نام*</Text><TextInput value={this.state.name} onChangeText={(val)=>{this.setState({name:val})}}  placeholderTextColor="gray" placeholder={this.state.UserInfo1.name} style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:this.state.namecolor}}/></View>
              <View ><Text style={{marginRight:5}}>نام خانوادگی*</Text><TextInput value={this.state.lastname} onChangeText={(val)=>{this.setState({lastname:val})}} placeholder={this.state.UserInfo1.lastname} style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:this.state.lastnamecolor}}/></View>
              <View ><Text style={{marginRight:5}}>آدرس*</Text><TextInput keyboardType="twitter" value={this.state.adress} onChangeText={(val)=>{this.setState({adress:val})}} placeholder={this.state.UserInfo1.adress} style={{height:height1/10,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:this.state.adresscolor,paddingHorizontal:10,paddingVertical:0,textAlignVertical:"top",fontSize:height1/45}} numberOfLines={5}/></View>
              <View ><Text style={{marginRight:5}}>ایمیل</Text><TextInput value={this.state.email} onChangeText={(val)=>{this.setState({email:val})}} placeholder={this.state.UserInfo1.email} style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:"#7fc3e0"}}/></View>
              <View ><Text style={{marginRight:5}}>شماره تلفن *</Text><TextInput maxLength={11} value={this.state.telephone==null?this.setState({telephone:""}): this.state.telephone.toString()} onChangeText={(val)=>{this.setState({telephone:val.toString()})}} placeholder={this.state.UserInfo1.email} keyboardType="phone-pad" style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:this.state.telephonecolor}}/></View>
              <View animation="zoomIn"style={{marginTop:10,borderBottomColor:"#7fc3e0",borderBottomWidth:3}}><Text style={{borderBottomColor:"#7fc3e0",borderBottomWidth:3,fontSize:height1/40,textAlign:"center"}}>جنسیت خود را انتحاب کنید*</Text><View style={{flexDirection:"row",width:"100%"}}>
        <View style={{flex:1,paddingTop:10}}><View><Ionn onPress={()=>{this.setState({gender:0})}} name="ios-man"  style={{alignSelf:"center",color:this.state.gender==0?"#7fc3e0" :"black"}} size={height1/15} /><Text style={{textAlign:"center",fontSize:30}}>مرد</Text></View></View>
        <View style={{flex:1,paddingTop:10,paddingBottom:5}}><View><Ionn name="woman" onPress={()=>{this.setState({gender:1})}} style={{alignSelf:"center",color:this.state.gender==1?"#7fc3e0" :"black"}} size={height1/15}  /><Text style={{textAlign:"center",fontSize:30}}>زن</Text></View></View>
        </View>
        
        </View>
            <View style={{alignItems:"center",marginVertical:10}}><TouchableOpacity onPress={()=>{this.RBSheet.open();PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)}} ><Image  style={{width:height1/4.5,height:height1/4.5,borderRadius:height1,opacity:1,borderWidth:2,borderColor:this.state.picAdress==null||this.state.picAdress=="null"?"red":"black"}} source={{uri:this.state.picAdress}}></Image><Text style={{color:this.state.picAdress==null||this.state.picAdress=="null"?"red":"black",marginTop:5}}>یک عکس به دلخواه انتخاب کنید<Ionn name="camera"><Ionn/></Ionn></Text></TouchableOpacity></View>       
              <TouchableOpacity onPress={()=>{
                
                console.log(this.state.telephone==null&&this.state.name==null&&this.state.lastname==null&&this.state.adress==null)
                AsyncStorage.setItem("name",this.state.name)
                AsyncStorage.setItem("lastname",this.state.lastname)
                AsyncStorage.setItem("email",this.state.email)
                AsyncStorage.setItem("adress",this.state.adress)
                AsyncStorage.setItem("picadress",this.state.picAdress)
                AsyncStorage.setItem("telephone",this.state.telephone.toString())
                AsyncStorage.setItem("gender",this.state.gender.toString())
                
        
                AsyncStorage.getItem("name").then((value)=>{this.setState({name:value})})
            AsyncStorage.getItem("lastname").then((value)=>{this.setState({lastname:value})})
            AsyncStorage.getItem("email").then((value)=>{this.setState({email:value})})
            AsyncStorage.getItem("adress").then((value)=>{this.setState({adress:value})})
            AsyncStorage.getItem("picadress").then((value)=>{this.setState({picAdress:value})})
            AsyncStorage.getItem("telephone").then((value)=>{this.setState({telephone:value})})
            AsyncStorage.getItem("gender").then((value)=>{this.setState({gender:Number(value)})})
        
                //Alert.alert(this.state.picAdress)
                this.setState({namecolor:"#7fc3e0"})
                this.setState({lastnamecolor:"#7fc3e0"})
                this.setState({adresscolor:"#7fc3e0"})
                this.setState({telephonecolor:"#7fc3e0"})
        
                if ( this.state.name == "" || this.state.name == null ) {
                  this.setState({namecolor:"red"})
                  this.setState({flag:true})
                }else{this.setState({namecolor:"#7fc3e0"})
              console.warn(this.state.name)
              }
                 if(this.state.lastname == ""|| this.state.lastname == null){
                  this.setState({lastnamecolor:"red"})
                  this.setState({flag:true})
                }else{this.setState({lastnamecolor:"#7fc3e0"})
                console.warn(this.state.name)
                }
                 if(this.state.adress==""|| this.state.adress == null){
                  this.setState({adresscolor:"red"})
                  this.setState({flag:true})
                  
                } if(this.state.telephone == 0|| this.state.telephone == null){
                  this.setState({telephonecolor:"red"})
                  this.setState({flag:true})
                } if(this.state.picAdress == ""){
        
                }/*this.setState({modalVisible:false
                /*if(this.state.telephonecolor=="#7fc3e0"&&this.state.namecolor=="#7fc3e0"&&this.state.lastnamecolor=="#7fc3e0"&&this.state.adresscolor=="#7fc3e0"){
                  this.setState({modalVisible:false})
                }*/
                console.log(this.state.telephone==null||this.state.name==null||this.state.lastname==null||this.state.adress==null)
                if(this.state.telephone==0){
                  //Alert.alert("sasdsdsdsdsdsd")
                  this.setState({modalVisible:true})
                }else if(this.state.name==null||this.state.name==""){
                  this.setState({modalVisible:true})
                }else if(this.state.lastname==null||this.state.lastname==""){
                  this.setState({modalVisible:true})
                }else if(this.state.adress==null ||this.state.adress==""){
                  this.setState({modalVisible:true})
                }else if(this.state.picAdress==null ||this.state.picAdress==""){
                  this.setState({modalVisible:true})
                  Alert.alert("یک عکس انتخاب کنید!")
                }
                else if(this.state.name!==null&&this.state.telephone!==0 && this.state.lastname!==null&&this.state.adress!==null&&this.state.picAdress!==null){
                  this.setState({modalVisible:false})
                  ToastAndroid.show(
                    "اطلاعات شما با موفقیت ذخیره شد!",
                    ToastAndroid.SHORT
                  );
                }
                }} title="save data"><Text style={{backgroundColor:"#85d9de",borderRadius:30 ,height:height1/15,width:"30%",textAlign:"center",textAlignVertical:"center",alignSelf:"center",fontSize:height1/30}}>ذخیره</Text></TouchableOpacity></View>
                </ScrollView>
                </Modal>
                
          </ScrollView>
          }

   
  var UserInfo={
    
  }
   //this.componentDidMount()
   let options = {
    title: "انتخاب عکس",
    storageOptions: {
      skipBackup: true,
      path: "images"
    }
  };
  let lett;
  var image;
   // this.props.navigation.setOptions({tabBarVisible:false})

   //console.warn(this.state.value1)
 
   return<View style={{width:'100%',height:height1}}><ActivityIndicator style={{alignSelf:"center"}} size={150}></ActivityIndicator><Text style={{alignSelf:"center"}}>LOADING...</Text></View>
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
 
 export default Profile;




{/* if (this.state.UserInfo1 == null){
//console.log("sd")
    return<ScrollView  keyboardShouldPersistTaps='handled' >
      <Text onPress={()=>{AsyncStorage.getItem("key11").then((valuee)=>this.setState({UserInfo1:valuee}))}}>{this.state.UserInfo1}5</Text>
    <Animatable.View animation="zoomIn" style={{marginTop:10}}><Text animation="zoomInUp">نام*</Text><TextInput onChangeText={(value)=>{this.setState({name:value}); console.warn(UserInfo)}} placeholder="نام خود را وارد کنید" style={{height:height1/20,backgroundColor:"red",borderRadius:10,marginTop:5,marginHorizontal:10}}></TextInput></Animatable.View>
    <Animatable.View animation="zoomIn" style={{marginTop:10}}><Text>نام خانوادگی*</Text><TextInput onChangeText={(value)=>{this.setState({lastname:value}); console.warn(UserInfo)}} placeholder="نام خانوادگی خود را وارد کنید" style={{height:height1/20,backgroundColor:"red",borderRadius:10,marginHorizontal:10,marginTop:5}}></TextInput></Animatable.View>
    <Animatable.View animation="zoomIn"style={{marginTop:10}}><Text>ادرس*</Text><TextInput onChangeText={(value)=>{this.setState({adress:value}); console.warn(UserInfo)}} placeholder="آدرس خود را وارد کنید" style={{height:height1/8
      ,backgroundColor:"red",borderRadius:10,marginTop:5,marginHorizontal:10}}></TextInput></Animatable.View>
    <Animatable.View animation="zoomIn"style={{marginTop:10}}><Text>ایمیل</Text><TextInput onChangeText={(value)=>{this.setState({email:value}); console.warn(UserInfo)}} placeholder="ایمیل خود را وارد کنید" style={{height:height1/20,backgroundColor:"red",borderRadius:10,marginTop:5,marginHorizontal:10}}></TextInput></Animatable.View>
    <Animatable.View animation="zoomIn"style={{marginTop:10}}><Text>شماره تلفن ثابت</Text><TextInput onChangeText={(value)=>{this.setState({telephone:value}); console.warn(UserInfo)}} keyboardType="phone-pad" style={{height:height1/20,backgroundColor:"red",borderRadius:10,marginTop:5,marginHorizontal:10}}></TextInput></Animatable.View>
    <Animatable.View animation="zoomIn"style={{marginTop:10,borderBottomColor:"dodgerblue",borderBottomWidth:3}}><Text style={{borderBottomColor:"dodgerblue",borderBottomWidth:3,fontSize:height1/40,textAlign:"center"}}>جنسیت خود را انتحاب کنید*</Text><View style={{flexDirection:"row",width:"100%"}}>
      <View style={{flex:1,paddingTop:10}}><View><Ionn onPress={()=>{this.setState({gender:0})}} name="ios-man" style={{alignSelf:"center"}} size={height1/15} /><Text style={{textAlign:"center",fontSize:30}}>مرد</Text></View></View>
      <View style={{flex:1,paddingTop:10,paddingBottom:5}}><View><Ionn name="woman" onPress={()=>{this.setState({gender:1})}} style={{alignSelf:"center",}} size={height1/15} /><Text style={{textAlign:"center",fontSize:30}}>زن</Text></View></View>
      </View>
      
      </Animatable.View>
      <View style={{marginTop:5}}><TouchableOpacity onPress={() => this.RBSheet.open()} style={{alignSelf:"center"}}><Ionn style={{backgroundColor:"red",width:height1/5,height:height1/5,borderRadius:height1/10,textAlign:"center",textAlignVertical:"center"}} size={height1/20} name="camera"></Ionn><Text style={{textAlign:"center",textAlignVertical:"center",width:height1/5,marginBottom:10,fontSize:height1/30}}>انتخاب عکس*</Text></TouchableOpacity></View>
      <Text style={{marginBottom:5}}>حداقل یک مورد عکس را انتخاب کنید*</Text>
      <Text onPress={()=>{AsyncStorage.setItem("key11",JSON.stringify(UserInfo))}} style={{backgroundColor:"blue",height:80,width:90 ,alignSelf:"center"}}>ذخیره اطلاعات</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        closeOnDragDown={true}
        height={300}
        openDuration={250}
        
        customStyles={{
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            
            borderTopRightRadius:15,borderTopLeftRadius:15
          }
        }}
      >
        <TouchableOpacity onPress={()=>{PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);launchImageLibrary(options, response => {
    console.log("Response = ", response);

    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      console.log("ImagePicker Error: ", response.error);
    } else {
      let source = response;
       image = response
      AsyncStorage.setItem("image",JSON.stringify(source))
      AsyncStorage.getItem("image").then((value)=>{console.log("sssssssssssssssssssssssssaaaaaaaaaaaa"+value)})
     console.log("ssssssssssssssssssssss"+image)
    //this.setState({picAdress:source.assets[0].uri})
      console.log("sourcessss11111111111111111111", source.assets[0].uri);
       this.setState({picAdress:source.assets[0].uri})
    }
  })    }} style={{marginVertical:20}}><View style={{flexDirection:"row-reverse"}}><Ionn name="image" style={{marginHorizontal:5,textAlign:"center",alignSelf:"center"}} size={height1/20}/><Text style={{fontSize:height1/20}}>انتخاب از گالری</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>{PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);launchCamera(options, response => {
    console.log("Response = ", response);

    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      console.log("ImagePicker Error: ", response.error);
    } else {
      let source = response;
       image = response
      AsyncStorage.setItem("image",JSON.stringify(source))
      AsyncStorage.getItem("image").then((value)=>{console.log("sssssssssssssssssssssssssaaaaaaaaaaaa"+value)})
     console.log("ssssssssssssssssssssss"+image)
     //this.setState({picAdress:source.assets[0].uri})
      console.log("sourcessss11111111111111111111", source.assets[0].uri);
       this.setState({picAdress:source.assets[0].uri})
    }
  })}} style={{marginVertical:20}}><View style={{flexDirection:"row-reverse"}}><Ionn name="camera" style={{marginHorizontal:5,textAlign:"center",alignSelf:"center"}} size={height1/20}/><Text style={{fontSize:height1/20}}>گرفتن عکس</Text></View></TouchableOpacity>
      </RBSheet>
    </View>
    </ScrollView>
   }else{ return <ScrollView>
     <TouchableOpacity onPress={() => {this.setState({modalVisible:true})}} style={{backgroundColor:"#85d9de",height:height1/15,width:height1/15,borderRadius:50,alignContent:"center",alignItems:"center",position:"absolute",elevation:10,shadowColor:"black",zIndex:3,top:height1-height1/4.6,right:width1/10,justifyContent:"center",borderWidth:1,borderColor:"gray"}} ><Text style={{justifyContent:"center",fontSize:20,alignContent:"center",textAlign:"center",alignItems:"center",textAlignVertical:"center"}}>+سبد </Text></TouchableOpacity>
     <View>
     <View><Text >نام</Text><Text style={{textAlign:"right"}}>{this.state.UserInfo1.name}</Text></View>
     <View><Text >نام خانوادگی</Text><Text style={{textAlign:"right"}}>{this.state.UserInfo1.lastname}</Text></View>
     <View><Text>ایمیل</Text><Text style={{textAlign:"right"}}>{this.state.UserInfo1.email}</Text></View>
     <View><Text>آدرس</Text><Text style={{textAlign:"right"}}>{this.state.UserInfo1.adress}</Text></View>
     <View><Text>جنسیت</Text><Text style={{textAlign:"right"}}>{this.state.UserInfo1.gender==0?"male":"female"}</Text></View>
     <View style={{alignItems:"center"}}><TouchableOpacity onPress={()=>{Alert.alert("hello")}}><Image  style={{width:height1/4.5,height:height1/4.5,borderRadius:height1}} source={{uri:this.state.UserInfo1.picAdress}}/></TouchableOpacity></View>
     <View style={{alignItems:"center"}}><Image style={{width:height1/4.5,height:height1/4.5,borderRadius:height1}} source={{uri:this.state.UserInfo1.picAdress}}/></View>
     <View style={{alignItems:"center"}}><Image  style={{width:height1/4.5,height:height1/4.5,borderRadius:height1}} source={{uri:this.state.UserInfo1.picAdress}}/></View>
     <View style={{alignItems:"center"}}><Image style={{width:height1/4.5,height:height1/4.5,borderRadius:height1}} source={{uri:this.state.UserInfo1.picAdress}}/></View>
     <View style={{alignItems:"center"}}><Image style={{width:height1/4.5,height:height1/4.5,borderRadius:height1}} source={{uri:this.state.UserInfo1.picAdress}}/></View>
     <View style={{alignItems:"center"}}><Image style={{width:height1/4.5,height:height1/4.5,borderRadius:height1}} source={{uri:this.state.UserInfo1.picAdress}}/></View>
     </View>
     <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text onPress={()=>{console.warn(UserInfo)}}>Hello World!</Text>
              <View ><Text style={{marginRight:5}}>نام</Text><TextInput onChangeText={(val)=>{val==""? this.setState({name:this.state.UserInfo1.name}):this.setState({name:val})}}  placeholderTextColor="gray" placeholder={this.state.UserInfo1.name} style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:"#7fc3e0"}}/></View>
              <View ><Text style={{marginRight:5}}>نام خانوادگی</Text><TextInput onChangeText={(val)=>{val==""?this.setState({lastname:this.state.UserInfo1.lastname}):this.setState({lastname:val})}} placeholder={this.state.UserInfo1.lastname} style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:"#7fc3e0"}}/></View>
              <View ><Text style={{marginRight:5}}>آدرس</Text><TextInput onChangeText={(val)=>{val==""?this.setState({adress:this.state.UserInfo1.adress}):this.setState({adress:val})}} placeholder={this.state.UserInfo1.adress} style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:"#7fc3e0"}}/></View>
              <View ><Text style={{marginRight:5}}>ایمیل</Text><TextInput onChangeText={(val)=>{val==""?this.setState({email:this.state.UserInfo1.email}):this.setState({email:val})}} placeholder={this.state.UserInfo1.email} style={{height:height1/20,width:"95%",borderWidth:2,marginHorizontal:10,borderRadius:10,marginVertical:5,borderColor:"#7fc3e0"}}/></View>
              <View animation="zoomIn"style={{marginTop:10,borderBottomColor:"dodgerblue",borderBottomWidth:3}}><Text style={{borderBottomColor:"dodgerblue",borderBottomWidth:3,fontSize:height1/40,textAlign:"center"}}>جنسیت خود را انتحاب کنید*</Text><View style={{flexDirection:"row",width:"100%"}}>
      <View style={{flex:1,paddingTop:10}}><View><Ionn onPress={()=>{this.setState({gender:0})}} name="ios-man"  style={{alignSelf:"center",color:this.state.gender==0?"blue" :"black"}} size={height1/15} /><Text style={{textAlign:"center",fontSize:30}}>مرد</Text></View></View>
      <View style={{flex:1,paddingTop:10,paddingBottom:5}}><View><Ionn name="woman" onPress={()=>{this.setState({gender:1})}} style={{alignSelf:"center",color:this.state.gender==1?"blue" :"black"}} size={height1/15}  /><Text style={{textAlign:"center",fontSize:30}}>زن</Text></View></View>
      </View>
      
      </View>
            <View style={{alignItems:"center",}}><TouchableOpacity onPress={()=>{this.RBSheet.open()}} ><Image  style={{width:height1/4.5,height:height1/4.5,borderRadius:height1,opacity:1}} source={{uri:this.state.UserInfo1.picAdress}}></Image></TouchableOpacity></View>       
              <Button onPress={()=>{
                
                if(this.state.name == "" && this.state.lastname=="" && this.state.adress== "" &&this.state.email=="" && this.state.telephone=="" ) {
                  UserInfo={
                    name: this.state.UserInfo1.name,
                    lastname:this.state.UserInfo1.lastname,
                    adress:this.state.UserInfo1.adress,
                    email:this.state.UserInfo1.email,

                    telephone:this.state.telephone,
                    gender:this.state.gender,
                  
                  }
                }else{
                  UserInfo={
                    name: this.state.name,
                    lastname:this.state.lastname,
                    adress:this.state.adress,
                    email:this.state.email,
                    telephone:this.state.telephone,
                    gender:this.state.gender,
                    picAdress:this.state.picAdress
                  }
                }
                this.setState({modalVisible:false});AsyncStorage.setItem("key11",JSON.stringify(UserInfo))}} title="close"/>
              <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        closeOnDragDown={true}
        height={300}
        openDuration={250}
        
        customStyles={{
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            
            borderTopRightRadius:15,borderTopLeftRadius:15
          }
        }}
      >
        <TouchableOpacity onPress={()=>{PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);launchImageLibrary(options, response => {
    console.log("Response = ", response);

    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      console.log("ImagePicker Error: ", response.error);
    } else {
      let source = response;
       image = response
      AsyncStorage.setItem("image",JSON.stringify(source))
      AsyncStorage.getItem("image").then((value)=>{console.log("sssssssssssssssssssssssssaaaaaaaaaaaa"+value)})
     console.log("ssssssssssssssssssssss"+image)
     this.setState({picAdress:source.assets[0].uri})
      console.log("sourcessss11111111111111111111", source.assets[0].uri);
      return this.setState({picAdress:source.assets[0].uri})
    }
  })    }} style={{marginVertical:20}}><View style={{flexDirection:"row-reverse"}}><Ionn name="image" style={{marginHorizontal:5,textAlign:"center",alignSelf:"center"}} size={height1/20}/><Text style={{fontSize:height1/20}}>انتخاب از گالری</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={()=>{PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);launchCamera(options, response => {
    console.log("Response = ", response);

    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      console.log("ImagePicker Error: ", response.error);
    } else {
      let source = response;
       image = response
      AsyncStorage.setItem("image",JSON.stringify(source))
      AsyncStorage.getItem("image").then((value)=>{console.log("sssssssssssssssssssssssssaaaaaaaaaaaa"+value)})
     console.log("ssssssssssssssssssssss"+image)
     this.setState({picAdress:source.assets[0].uri})
      console.log("sourcessss11111111111111111111", source.assets[0].uri);
      return this.setState({picAdress:source.assets[0].uri})
    }
  })}} style={{marginVertical:20}}><View style={{flexDirection:"row-reverse"}}><Ionn name="camera" style={{marginHorizontal:5,textAlign:"center",alignSelf:"center"}} size={height1/20}/><Text style={{fontSize:height1/20}}>گرفتن عکس</Text></View></TouchableOpacity>
      </RBSheet>
            </View>
          </View>
        </Modal>
     </ScrollView> }
     */}






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
