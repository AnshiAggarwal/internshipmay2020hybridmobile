import React,{Component} from 'react';
import {View,StyleSheet,Text,ImageBackground,TouchableHighlight,TouchableOpacity,TextInput,Alert} from 'react-native';
class ChangePassword extends Component{
    constructor(props){
        super(props);
        this.state = { username: '',email:'',phoneno:'',newpassword1: '' };
    }

    Next=()=>{
        Alert.alert('Change the password')
        this.props.navigation.navigate('Login')
    }
    InsertDataToServer = () =>{
        
       fetch('http://192.168.43.167:8080/ppphp/ownership_chain_forget_password.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
        
           username:this.state.username ,
        
           emailid: this.state.emailid,
        
           phoneno: this.state.phoneno,
           password1:this.state.newpassword1
        
         })
        
       }).then((response) => response.json())
             .then((responseJson) => {
        
       // Showing response message coming from server after inserting records.
               this.Next()
        
             }).catch((error) => {
               console.error(error);
             });
        
        
         }
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('./images/Login.jpeg')} style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{marginTop:'50%'}}>
                        <Text style={styles.label}>
                            Username 
                        </Text>
                        <TextInput placeholder="Username" onChangeText={(value) => this.setState({ username: value })} style={styles.textInput} value={this.state.username} />
                        <Text style={styles.label}>
                            Email ID
                        </Text>
                        <TextInput placeholder="Email Id" onChangeText={(value) => this.setState({ emailid: value })} style={styles.textInput} value={this.state.emailid} />
                        <Text style={styles.label}>
                            Phone no
                        </Text>
                        <TextInput placeholder="Phone no" onChangeText={(value) => this.setState({ phoneno: value })} style={styles.textInput} value={this.state.phoneno} />
                        <Text style={styles.label}>
                            New Password
                        </Text>
                        <TextInput placeholder="New Password" onChangeText={(value) => this.setState({ newpassword1: value })} style={styles.textInput} value={this.state.newpassword1} />
                        <TouchableOpacity activeOpacity={0.7} style={{ paddingVertical: 10, backgroundColor: '#f5c6ee', marginLeft: 90, marginRight: 90, borderRadius: 10, marginTop: 30 }}>
                            <View>
                                <Text style={{ textAlign: 'center', color: 'blue', fontWeight: 'bold', fontSize: 20 }} onPress={this.InsertDataToServer}>
                                    Change
                        </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
export default ChangePassword;
const styles = StyleSheet.create({
    textInput: {
        marginLeft: 20,
        height: 30,
        borderBottomWidth: 1,
        marginRight: 20,
        borderBottomColor: 'blue',
    },
    label: {
        marginLeft: 20,
        fontSize: 20,
        color: 'blue',
        marginBottom: 5,
        marginTop: 13,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'blue',
        fontSize: 20
    }
})