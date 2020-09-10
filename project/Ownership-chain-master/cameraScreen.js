import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Dimensions,StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import Toolbaar from './toolbaarCamera';
import Gallery from './gallery';

 const {width:winWidth,height:winHeight}=Dimensions.get('window');

 export default class CameraScreen extends Component {
   constructor(props)
   {
     super(props);
     this.state={
       hasCameraPermission:null,
       captures:[],
       flashMode:Camera.Constants.FlashMode.off,
       capturing:null,
       cameraType:Camera.Constants.Type.back,
       camera:null,
     }
     this.handleShortCapture=this.handleShortCapture.bind(this);
   }

    handleShortCapture=async()=>{
      const photoData=await this.state.camera.takePictureAsync();
     this.setState({capturing:false});
     console.log(photoData);
      this.setState({captures:[photoData,...this.state.captures]});
    }
    async componentDidMount() {
      this.setState({camera:await Camera.requestPermissionsAsync()});
     
      this.setState({hasCameraPermission :(this.state.camera.status === 'granted'?true:false)});
     
  };

  render()
  {
         if (this.state.hasCameraPermission === null) {
            return <View />;
        } else if (this.state.hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <View style={{ flex: 1,marginTop:StatusBar.height,flexDirection:'column', }}>
                <Camera
                   style={{ flex: 0.7}} 
                    ref={camera => this.state.camera = camera}
                >
                 
                 

            <Toolbaar capturing={this.state.capturing} flashMode={this.state.flashMode} cameraType={this.state.cameraType} setFlashMode={(flashMode)=>this.setState({flashMode})} setCameraType={(cameraType)=>this.setState({cameraType})}onShortCapture={this.handleShortCapture}/>
          </Camera>
          <View style={{flex:0.3}}>
          {this.state.captures.length>0 && <Gallery captures={this.state.captures}/>}
            </View>
            </View>
        );
  }
}
