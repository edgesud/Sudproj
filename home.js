import React, { Component, Profiler } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import style from './assets/css';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SliderBox } from "react-native-image-slider-box";
export default class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [

        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
        require('./assets/banner.jpg'),
        require('./assets/nature.jpg'),
      ]
    };
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginLeft: 10, marginRight: 10 }}>
        <View>
          <Text style={style.txt1}>Hi Kevin </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginLeft: 8 }}>A3 opp. California Street 222</Text>
          <TouchableOpacity>
            <SimpleLineIcons style={{ fontSize: 20, marginLeft: "55%" }} name="bell" />
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: "row" }}>

          <TextInput style={{ backgroundColor: "#f0f4f6", width: "99%", borderRadius: 5, marginTop: 20, position: "absolute", paddingLeft: 45 }} placeholder="What service do you need" placeholderTextColor="#606a78"></TextInput>
          <AntDesign style={{ fontSize: 20, padding: 35, position: "relative", right: 20 }} name="search1" />
        </View>
        <View>
          <SliderBox
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 5,


            }}
            dotStyle={{
              width: 28,
              height: 2,

              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "rgba(128, 128, 128, 0.92)"
            }}
            images={this.state.images}
            sliderBoxHeight={120}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
          />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 30 }}>Services</Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", fontSize: 13, marginLeft: "76%", marginTop: 30, color: "#fc8b8b" }}>View All</Text>
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", display: "flex", width: "100%" }}>
          <TouchableOpacity>
            <View style={{ backgroundColor: "#e3e7ea", width: 78, height: 90, borderRadius: 5 }}>
              <Image style={{ marginLeft: "auto", marginRight: "auto", display: 'flex', marginTop: 15, width: 47, height: 50 }} source={require("./assets/clean.png")} />
              <Text style={{ textAlign: 'center', fontSize: 10, padding: 3, color: "#3d4756" }}>Cleaning</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ backgroundColor: "#e3e7ea", width: 78, height: 90, borderRadius: 5, marginLeft: 8 }}>
              <Image style={{ marginLeft: "auto", marginRight: "auto", display: 'flex', marginTop: 15, width: 45, height: 45 }} source={require("./assets/maid.png")} />
              <Text style={{ textAlign: 'center', fontSize: 10, padding: 3, color: "#3d4756", marginTop: 5 }}>Maid</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ backgroundColor: "#e3e7ea", width: 78, height: 90, borderRadius: 5, marginLeft: 8 }}>
              <Image style={{ marginLeft: "auto", marginRight: "auto", display: 'flex', marginTop: 15, width: 49, height: 52 }} source={require("./assets/bath.png")} />
              <Text style={{ textAlign: 'center', fontSize: 10, padding: 3, color: "#3d4756" }}>Bathroom</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ backgroundColor: "#e3e7ea", width: 78, height: 90, borderRadius: 5, marginLeft: 8 }}>
              <Image style={{ marginLeft: "auto", marginRight: "auto", display: 'flex', marginTop: 15, width: 35, height: 50 }} source={require("./assets/klitchen.png")} />
              <Text style={{ textAlign: 'center', fontSize: 10, padding: 3, color: "#3d4756" }}>Kitchen</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: 8, justifyContent: "center", alignItems: "center", display: "flex", width: "100%" }}>
          <TouchableOpacity>
            <View style={{ backgroundColor: "#e3e7ea", width: 78, height: 90, borderRadius: 5 }}>
              <Image style={{ marginLeft: "auto", marginRight: "auto", display: 'flex', marginTop: 15, width: 45, height: 51 }} source={require("./assets/carpenter.png")} />
              <Text style={{ textAlign: 'center', fontSize: 10, padding: 3, color: "#3d4756" }}>Carpenter</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ backgroundColor: "#e3e7ea", width: 78, height: 90, borderRadius: 5, marginLeft: 8 }}>
              <Image style={{ marginLeft: "auto", marginRight: "auto", display: 'flex', marginTop: 15, width: 42, height: 41 }} source={require("./assets/tool.png")} />
              <Text style={{ textAlign: 'center', fontSize: 10, padding: 3, color: "#3d4756", marginTop: 8 }}>Repair</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ backgroundColor: "#e3e7ea", width: 78, height: 90, borderRadius: 5, marginLeft: 8 }}>
              <Image style={{ marginLeft: "auto", marginRight: "auto", display: 'flex', marginTop: 15, width: 51, height: 42 }} source={require("./assets/water.png")} />
              <Text style={{ textAlign: 'center', fontSize: 10, padding: 3, color: "#3d4756", marginTop: 8 }}>Plumbing</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ backgroundColor: "#e3e7ea", width: 78, height: 90, borderRadius: 5, marginLeft: 8 }}>
              <Image style={{ marginLeft: "auto", marginRight: "auto", display: 'flex', marginTop: 15, width: 40, height: 40 }} source={require("./assets/gardening.png")} />
              <Text style={{ textAlign: 'center', fontSize: 10, padding: 3, color: "#3d4756", marginTop: 9 }}>Gardening</Text>
            </View>
          </TouchableOpacity>
        </View>



        <View style={{ flexDirection: "row", marginBottom: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 30 }}>Best service providers</Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", fontSize: 13, marginLeft: "57%", marginTop: 30, color: "#fc8b8b" }}>View All</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
        <View style={{
          backgroundColor: "#ffffff", width: "100%", height: 100, borderRadius: 8, shadowColor: '#a4a5a5',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 5,
        }}>
         <View style={{flexDirection:"row"}}>
          <View style={{
            width: 150,
            height: 55,
            borderRadius: 150 / 2,
            width: 55,
            margin: 12,
            marginTop: 21,
            backgroundColor: '#744be5'
          }}>
            <Text style={{ textAlign: "center", marginTop: 15, position: "absolute", right: 20, top: 2, color: "white", fontSize: 15 }}> ER</Text>
            </View>
            <Text style={{position:'relative',top:15,left:3,fontWeight:'bold'}}>Electricians repair</Text>
            <Text style={{position:'relative',left:"100%",backgroundColor:"#f6f7fd",height:22,width:50,textAlign:"center",color:'#744be5',fontSize:12,fontWeight:"bold",top:12,borderRadius:3,padding:2}}>1.2Km</Text>
         </View>
         <Text style={{width:"70%",bottom:50,left:"24%",fontSize:12,color:"#606a78"}}>Our reliable, full service and licensed electricians repair breaker panel surges.</Text>
        
        </View>
        
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{
          backgroundColor: "#ffffff", width: "100%", height: 100, borderRadius: 8, shadowColor: '#a4a5a5',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 5,
          marginTop:12
        }}>
         <View style={{flexDirection:"row"}}>
          <View style={{
            width: 150,
            height: 55,
            borderRadius: 150 / 2,
            width: 55,
            margin: 12,
            marginTop: 21,
            backgroundColor: '#fc8b8b'
          }}>
            <Text style={{ textAlign: "center", marginTop: 15, position: "absolute", right: 20, top: 2, color: "white", fontSize: 15 }}> ER</Text>
            </View>
            <Text style={{position:'relative',top:15,left:3,fontWeight:'bold'}}>Electricians repair</Text>
            <Text style={{position:'relative',left:"100%",backgroundColor:"#f6f7fd",height:22,width:50,textAlign:"center",color:'#744be5',fontSize:12,fontWeight:"bold",top:12,borderRadius:3,padding:2}}>1.2Km</Text>
         </View>
         <Text style={{width:"70%",bottom:50,left:"24%",fontSize:12,color:"#606a78"}}>Our reliable, full service and licensed electricians repair breaker panel surges.</Text>
        
        </View>
        
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{
          backgroundColor: "#ffffff", width: "100%", height: 100, borderRadius: 8, shadowColor: '#a4a5a5',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 5,
        }}>
         <View style={{flexDirection:"row"}}>
          <View style={{
            width: 150,
            height: 55,
            borderRadius: 150 / 2,
            width: 55,
            margin: 12,
            marginTop: 21,
            backgroundColor: '#5eb2cc'
          }}>
            <Text style={{ textAlign: "center", marginTop: 15, position: "absolute", right: 20, top: 2, color: "white", fontSize: 15 }}> ER</Text>
            </View>
            <Text style={{position:'relative',top:15,left:3,fontWeight:'bold'}}>Electricians repair</Text>
            <Text style={{position:'relative',left:"100%",backgroundColor:"#f6f7fd",height:22,width:50,textAlign:"center",color:'#744be5',fontSize:12,fontWeight:"bold",top:12,borderRadius:3,padding:2}}>1.2Km</Text>
         </View>
         <Text style={{width:"70%",bottom:50,left:"24%",fontSize:12,color:"#606a78"}}>Our reliable, full service and licensed electricians repair breaker panel surges.</Text>
        
        </View>
        
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{
          backgroundColor: "#ffffff", width: "100%", height: 100, borderRadius: 8, shadowColor: '#a4a5a5',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 5,
        }}>
         <View style={{flexDirection:"row"}}>
          <View style={{
            width: 150,
            height: 55,
            borderRadius: 150 / 2,
            width: 55,
            margin: 12,
            marginTop: 21,
            backgroundColor: '#7aafff'
          }}>
            <Text style={{ textAlign: "center", marginTop: 15, position: "absolute", right: 20, top: 2, color: "white", fontSize: 15 }}> ER</Text>
            </View>
            <Text style={{position:'relative',top:15,left:3,fontWeight:'bold'}}>Electricians repair</Text>
            <Text style={{position:'relative',left:"100%",backgroundColor:"#f6f7fd",height:22,width:50,textAlign:"center",color:'#744be5',fontSize:12,fontWeight:"bold",top:12,borderRadius:3,padding:2}}>1.2Km</Text>
         </View>
         <Text style={{width:"70%",bottom:50,left:"24%",fontSize:12,color:"#606a78"}}>Our reliable, full service and licensed electricians repair breaker panel surges.</Text>
        
        </View>
        
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
