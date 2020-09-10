import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground,Button,TouchableOpacity, Alert} from 'react-native';
import Login from './Login';
export default Loginsignup = () => {
    function Loin(){
        Alert.alert('pressed','ji')
    }
    return (
        <View style={{flex: 1,flexDirection: "column"}}>
            <ImageBackground source={require('./12.jpeg')} style={{ flex:1,justifyContent: 'center'  }}>
                <TouchableOpacity activeOpacity={0.7} style={{borderColor:'blue',backgroundColor:'#f5c6ee',paddingVertical:14,marginTop:100,marginBottom:10,marginLeft:90,marginRight:90,borderRadius:10}} onPress={()=>Loin()}>
                    <View>
                        <Text style={{textAlign:'center',color:'blue',fontWeight:'bold',fontSize:20}}>
                            LOGIN
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{borderColor:'blue',backgroundColor:'#f5c6ee',paddingVertical:14,marginLeft:90,marginRight:90,borderRadius:10,marginTop:50}}>
                    <View>
                        <Text style={{textAlign:'center',color:'blue',fontWeight:'bold',fontSize:20}}>
                            SIGN UP
                        </Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
