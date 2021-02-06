import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Switch, Ch } from 'react-native';
import externalstyle from './assets/css/style';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from 'react-native-vector-icons/Fontisto'
import GlobalFont from 'react-native-global-font';

export default function App () {
  const [show,setShow] = React.useState(false);
  const [visible,setVisible] = React.useState(true);
    return (
      <ScrollView>
        <Image style={externalstyle.img} source={require("./assets/group10.png")} />
        <Text style={externalstyle.txt1}>Sign up</Text>
        <Text style={externalstyle.txt2}>Our reliable, full service and licensed electricians repair breaker panel surges.</Text>
        <View>
          <Text style={{ marginLeft: 10, marginTop: 20 }}>First Name</Text>
          <TextInput style={externalstyle.txtinput} placeholder="Kevin" />
          <Text style={{ marginLeft: 10, marginTop: 20 }}>Last Name</Text>
          <TextInput style={externalstyle.txtinput} placeholder="Jones" />
          <Text style={{ marginLeft: 10, marginTop: 20 }}>Email</Text>
          <TextInput style={externalstyle.txtinput} placeholder="Kevin123@gmail.com" />
          <Text style={{ marginLeft: 10, marginTop: 20 }}>Phone</Text>
          <TextInput style={externalstyle.txtinput} placeholder="4459882369" />
          <Text style={{ marginLeft: 10, marginTop: 20 }}>Location</Text>
          <TextInput style={externalstyle.txtinput} placeholder="A3 opp. California Street 222" />
          <Text style={{ marginLeft: 10, marginTop: 20 }}>Password</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput type="password" style={externalstyle.txtinput} placeholder={"Password"} secureTextEntry={visible} />
           <TouchableOpacity style={{position:"absolute",padding:20,right:5}} onPress={()=>{setVisible(!visible),setShow(!show)}}>
             <MaterialCommunityIcons name= {show === false ? 'eye-outline' : 'eye-off-outline'} style={{fontSize:20}}/>
           </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 9 }}>
            <TouchableOpacity>
            <Fontisto  name={'checkbox-passive'} style={{ fontSize: 25, marginTop: 27,left:10}} />
            </TouchableOpacity>
          
            <Text style={{ position: "absolute", left: 15, padding: 30 }}>I Agree to</Text>
            <Text style={{ position: "absolute", marginLeft: 5, color: "#744be5", padding: 30, left: "20%", fontWeight: "bold", textDecorationLine: "underline" }}>Terms and Conditions</Text>
          </View>
        </View>
        <TouchableOpacity style={externalstyle.opacity}>
          <Text style={{ textAlign: "center", fontSize: 18, color: "white", padding: 10, fontWeight: "bold" }}>Sign up</Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row",marginTop:20}}>
          <View style={{ width:"30%",marginLeft:9,margin:10,borderBottomWidth:1, borderBottomColor:"#dadada" }} />
          <Text style={{ justifyContent:"center", marginTop: 20, fontSize: 15,color:"#000000",left:25 }}>Or sign in with</Text>
          <View style={{width:"30%",marginLeft:9,margin:10,borderBottomWidth:1,borderBottomColor:"#dadada"}} />
        </View>
     <View style={{flexDirection:"row",justifyContent:"center",marginTop:23}}>
       <EvilIcons style={{fontSize:50,color:"#3b5998",paddingRight:30}} name="sc-facebook"/>
       <Image style={{width:37,height:37,marginLeft:-20,marginTop:2}} source={require("./assets/google.png")}/>
     </View>
       <View style={{flexDirection:'row',alignSelf:"center",marginTop:20}}>
         <Text style={{fontSize:15}}>Do you have an Account?</Text>
         <TouchableOpacity>
         <Text style={{fontSize:15,left:8,fontWeight:"bold"}}>Login</Text>
         </TouchableOpacity>
        
       </View>
      </ScrollView>

    )
  }