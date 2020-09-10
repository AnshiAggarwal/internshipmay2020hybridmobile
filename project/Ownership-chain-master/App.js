import 'react-native-gesture-handler';
import React ,{Component} from 'react';
import {ScrollView} from 'react-native';
import SignUp from './components/signup';
import CameraScreen from './components/cameraScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';


const Signup=()=>{return <SignUp/>}
const addImg=()=>{return<CameraScreen />}
const App=(props)=>{
  const Stack=createStackNavigator();
   const Drawer=createDrawerNavigator();
  return(
    <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="SIGN UP" component={Signup} />
    <Drawer.Screen name="Add image" component={addImg} />
  </Drawer.Navigator>
  </NavigationContainer>
  )
} 
 export default App;