import React,{useState} from 'react';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity,StyleSheet,Dimensions } from 'react-native';

const {width:winWidth,height:winHeight}=Dimensions.get('window');


export default function Toolbaar({capturing=false,cameraType=Camera.Constants.Type.back,flashMode=Camera.Constants.FlashMode.off,setFlashMode,setCameraType,onShortCapture})
{
    // const [Type,setCameraType]=useState(Camera.Constants.Type.back);
    // const [FlashMode,setFlashMode]=useState(Camera.Constants.FlashMode.off);
     return (
    <Grid style={styles.bottomToolbar}>
    <Row>
        <Col style={styles.alignCenter}>
            <TouchableOpacity onPress={() => setFlashMode( 
                flashMode === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.on 
            )}>
                <Ionicons
                    name={flashMode == Camera.Constants.FlashMode.on ? "md-flash" : 'md-flash-off'}
                    color="white"
                    size={30}
                />
            </TouchableOpacity>
        </Col>
        <Col size={2} style={styles.alignCenter}>
            <TouchableWithoutFeedback
                onPress={onShortCapture}>
                <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                    {capturing && <View style={styles.captureBtnInternal} />}
                </View>
            </TouchableWithoutFeedback>
        </Col>
        <Col style={styles.alignCenter}>
            <TouchableOpacity onPress={() => setCameraType(
                cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
            )}>
                <Ionicons
                    name="md-reverse-camera"
                    color="white"
                    size={30}
                />
            </TouchableOpacity>
        </Col>
    </Row>
</Grid>

     )

}
const styles=StyleSheet.create({
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        alignItems:'center',
        height: 90,
        bottom: 0,
        marginLeft:-18
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#FFFFFF",
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
    },
})