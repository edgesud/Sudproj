import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import externalstyle from './assets/css/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class App extends Component {
  render() {
    return (
      <View style={externalstyle.container}>
        <Image style={externalstyle.img} source={require("./assets/shape.png")} />
        <Text style={{ textAlign: "center", fontWeight: "bold", color: "#202926", fontSize: 25, marginTop: 40 }}>Login</Text>
        <Text style={{ textAlign: "center", fontSize: 13, width: "90%", marginHorizontal: 30, width: "80%", color: "#606a78", marginVertical: 10 }}>Our reliable, full service and licensed electricians repair breaker panel surges.</Text>
        <View style={{alignItems:"center", marginTop:50}}>

          <TouchableOpacity style={{ backgroundColor: "#3b5998", width: "90%", height: 53.3, borderRadius: 26.7}}>
            <View style={{ flexDirection: "row", flex:1, justifyContent:"center", padding:12,marginLeft:20}}>
              <FontAwesome name="facebook" style={{fontSize:25,color:"white", lineHeight:30, paddingRight:5}} />
              <Text style={{color: "white",fontSize:18,lineHeight:30,marginHorizontal:10}}> Login with Facebook </Text>
            </View>
          </TouchableOpacity>

        </View>
        <View style={{alignItems:"center", marginTop:40.7}}>

          <TouchableOpacity style={{ backgroundColor:"#202926", width: "90%", height: 53.3, borderRadius: 26.7}}>
            <View style={{ flexDirection: "row", flex:1, justifyContent:"center", padding:12}}>
              <Image source={require("./assets/google.png")} style={{width:30,height:30,marginHorizontal:10}} />
              <Text style={{color: "white",fontSize:18,lineHeight:30,marginHorizontal:10}}> Login with Google </Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>

    )
  }
}

export default App;