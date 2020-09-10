import React ,{useState} from 'react';
import { View, Text, TextInput,StyleSheet,Dimensions,ScrollView,Button} from 'react-native';
import { Image  } from 'react-native-elements';
import Constants from 'expo-constants';



const SignUp = (props) => {
  const [userName,changeUserName]=useState('');
  const [emailid,changeEmailId]=useState('');
  const [contactNo,changeContactNo]=useState('');
  const [password,changePassword]=useState('');
  const [rePassword,changeRePassword]=useState('');

const onChangeUserName=(data)=>{
changeUserName(data);
}
const onChangeEmailId=(data)=>{
  changeEmailId(data);
}
const onchangeContactNo=(data)=>{
changeContactNo(data);
}
const onchangePassword=(data)=>{
changePassword(data);
}
const onchangeRePassword=(data)=>{
changeRePassword(data);
}
const w=Math.round(Dimensions.get('window').width);
const h=Math.round(Dimensions.get('window').height);

  return (
    <View style={{ marginTop:Constants.statusBarHeight+20,flex:1,justifyContent:'space-evenly',paddingVertical:0 }}>
<View >
      <Image source={require('./images/Component6.png')} style={{height:h/3+30,
    width:w,resizeMode:'cover'}}/>
   </View>
   <ScrollView>
   
      <Text style={styles.label} >Username</Text>
      <TextInput style={styles.input} placeholder="Enter name" onChangeText={onChangeUserName} value={userName}/>
      <Text style={styles.label} >Email Id</Text>
      <TextInput style={styles.input} placeholder="Enter email"  onChangeText={onChangeEmailId} value={emailid}/>
      <Text style={styles.label} >Contact number</Text>
      <TextInput  style={styles.input}placeholder="Enter contact number"  onChangeText={onchangeContactNo} value={contactNo}/>
      <Text style={styles.label} >Password</Text>
      <TextInput style={styles.input} placeholder="Enter password"  onChangeText={onchangePassword} value={password}/>
      <Text style={styles.label} >Confirm password</Text>
      <TextInput style={styles.input} placeholder="Retype your password" onChangeText={onchangeRePassword} value={rePassword}/>
      <View style={{flexDirection:'row-reverse',justifyContent:'space-around',marginTop:10}}>
        <Button title='Save'/>
        <Button title='Cancel'/>
      </View>
      
</ScrollView>
    </View>
  );
};
const styles=StyleSheet.create({
  label:{
color:'black',
fontSize:20,
marginLeft:10
  },
  input:{
    marginHorizontal:10,
borderBottomColor:"#0FF",
borderBottomWidth:2,
width:300
  }
})
export default SignUp;
