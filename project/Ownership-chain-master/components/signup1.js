import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableHighlight, TouchableOpacity, TextInput, Alert,Button } from 'react-native';
let username1='u'
let email1='u'
let phoneno1='u'
class Signupp extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', emailid: '', phoneno: '', password: '', repassword: '' };
    }
    check = () => {
        if (this.state.password==this.state.repassword){
            username1=this.state.username
            email1=this.state.emailid
            phoneno1=this.state.phoneno
            this.InsertDataToServer()
        }
        else{
            Alert.alert('ERROR','WRONG PASSWORD')
        }
    }
    InsertDataToServer = () => {

        fetch('http://192.168.43.167:8080/ppphp/ownership_chain_users_save.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                username: this.state.username,

                emailid: this.state.emailid,

                phoneno: this.state.phoneno,
                password: this.state.password

            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // Showing response message coming from server after inserting records.
                console.log(responseJson)

            }).catch((error) => {
                console.error(error);
            });
            this.props.navigation.navigate('Login')

    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/Login.jpeg')} style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={styles.container}>
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
                            Password
                        </Text>
                        <TextInput secureTextEntry={true} placeholder="Password" onChangeText={(value) => this.setState({ password: value })} style={styles.textInput} value={this.state.password} />
                        <Text style={styles.label}>
                            Password again
                        </Text>
                        <TextInput secureTextEntry={true} placeholder="Retype Password" onChangeText={(value) => this.setState({ repassword: value })} style={styles.textInput} value={this.state.repassword} />
                        <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-around', marginTop: 10 }}>
                            <Button title='Signin' onPress= {this.check} />
                            <Button title='Cancel' onPress={()=>this.props.navigation.navigate('Login')} />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
export default Signupp;
export {username1,email1,phoneno1}
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
        marginTop: 1,

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