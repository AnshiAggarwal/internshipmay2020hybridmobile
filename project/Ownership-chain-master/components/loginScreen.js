import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground,Button,TouchableOpacity,TouchableHighlight, TextInput, Alert} from 'react-native';
import { username1 } from './signup1';
let username2=''
class Login extends Component{
    constructor(props){
        super(props);
        this.state={username:'',password:''};
        this.passwordChange=this.passwordChange.bind(this);
        }
    passwordChange()
    {
        this.props.navigation.navigate('Forget Password')
    }   
    search1=(responseJson)=>{
        if(responseJson=='Searched'){
            username2=this.state.username
            this.props.navigation.navigate('Home')
        }
        else{
            Alert.alert('ERROR','INCORRECT DETAILS')
        }
    } 
    search = () => {
        // alert('ok');

        fetch('http://192.168.43.167:8080/ppphp/ownership_chain_users_search.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        }).then((response) => response.json()).then((responseJson) => {this.search1(responseJson) }).catch((error) => { console.error(error); })
    }
    render(){
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./images/Login.jpeg')} style={{ flex:1,justifyContent: 'center'}}>
                <View style={styles.container}>
                    <Text style={styles.label}>
                        Username or Email ID
                    </Text>
                    <TextInput placeholder="Username or Email ID" onChangeText={(value)=>this.setState({username:value})} style={styles.textInput} value={this.state.username}/>

                    <Text style={{...styles.label,marginTop:10}}>
                        Password
                    </Text>
                    <TextInput secureTextEntry={true} placeholder="Password" style={styles.textInput} onChangeText={(value)=>this.setState({password:value})} value={this.state.password}/>

                    <TouchableHighlight underlayColor="black" style={{marginLeft:20,marginTop:20,marginRight:'45%',}} >
                     
                        <Text style={styles.text} onPress={this.passwordChange}>
                            Forget Password ?
                        </Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="white" style={{marginLeft:20,marginTop:20,marginRight:'45%',}} >
                        <Text style={styles.text} onPress={()=>{navigation.navigate('Sign Up')}}>
                            Sign Up
                        </Text>
                        
                    </TouchableHighlight>
                    <TouchableOpacity activeOpacity={0.7} style={{paddingVertical:10,backgroundColor:'#f5c6ee',marginLeft:90,marginRight:90,borderRadius:10,marginTop:30}}>
                    <View>
                        <Text style={{textAlign:'center',color:'blue',fontWeight:'bold',fontSize:20}} onPress={this.search}>
                            LOGIN
                        </Text>
                    </View>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )}
}
const styles=StyleSheet.create({
    textInput:{
        marginLeft:20,
        height:30,
        borderBottomWidth:1,
        marginRight:20,
        borderBottomColor:'blue',
    },
    label:{
        marginLeft:20,
        fontSize:20,
        color:'blue',
        marginBottom:5,
        marginTop:'50%',

    },
    container:{
        flex: 1,
        justifyContent:'center',
    },
    text:{
        color:'blue',
        fontSize:20
    }
})
export default Login;
export {username2}
