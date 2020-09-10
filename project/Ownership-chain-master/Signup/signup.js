import React ,{useState} from 'react';
import { View, Text, TextInput} from 'react-native';
import { Image  } from 'react-native-elements';



const SignUp = (props) => {
  const [userName,changeUserName]=useState(' ');
  const [emailid,changeEmailId]=useState(' ');
  const [contactNo,changeContactNo]=useState(' ');
  const [password,changePassword]=useState(' ');
  const [rePassword,changeRePassword]=useState(' ');

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

  return (
    <View style={{ backgroundColor: 'pink',flex:1 }}>
        <Image source={require('./images/one.svg')}/>
      <Text>Username</Text>
      <TextInput placeholder="Enter name" onChangeText={onChangeUserName} value={userName}/>
      <Text>Email Id</Text>
      <TextInput placeholder="Enter email"  onChangeText={onChangeEmailId} value={emailid}/>
      <Text>Contact number</Text>
      <TextInput placeholder="Enter contact number"  onChangeText={onchangeContactNo} value={contactNo}/>
      <Text>Password</Text>
      <TextInput placeholder="Enter password"  onChangeText={onchangePassword} value={password}/>
      <Text>Confirm password</Text>
      <TextInput placeholder="Retype your password" onChangeText={onchangeRePassword} value={rePassword}/>
    </View>
  );
};
export default SignUp;
