import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground,Button,TouchableOpacity,TouchableHighlight, TextInput, Alert} from 'react-native';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={User:'',Password:''};
    }
    render(){
    return (
        <View style={{flex: 1,justifyContent:'center'}}>
            <ImageBackground source={require('./Login.jpeg')} style={{ flex:1,justifyContent: 'center'  }}>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{marginLeft:20,fontSize:20,color:'blue',marginBottom:5,marginTop:'50%'}}>
                        Username or Email ID
                    </Text>
                    <TextInput placeholder="Username or Email ID" style={{marginLeft:20,height:30,borderBottomWidth:1,marginRight:20,borderBottomColor:'blue',}}/>
                    <Text style={{marginLeft:20,fontSize:20,color:'blue',marginTop:10}}>
                        Password
                    </Text>
                    <TextInput placeholder="Password" style={{marginLeft:20,height:30,borderBottomWidth:1,marginRight:20,borderBottomColor:'blue',}}/>
                    <TouchableHighlight underlayColor="white" style={{marginLeft:20,marginTop:20,marginRight:'45%',}} onPress={()=>Alert.alert('Forget Password')}>
                        <Text style={{color:'blue',fontSize:20}}>
                            Forget Password ?
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="white" style={{marginLeft:20,marginTop:20}} onPress={()=>Alert.alert('Signup')}>
                        <Text style={{color:'blue',fontSize:20}}>
                            Sign Up
                        </Text>
                    </TouchableHighlight>
                    <TouchableOpacity activeOpacity={0.7} style={{paddingVertical:10,backgroundColor:'#f5c6ee',marginLeft:90,marginRight:90,borderRadius:10,marginTop:30}}>
                    <View>
                        <Text style={{textAlign:'center',color:'blue',fontWeight:'bold',fontSize:20}}>
                            LOGIN
                        </Text>
                    </View>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )}
}
export default Login