import React from 'react';
import {View,Text, Button} from 'react-native';

export default function AddImage({navigation})
{
    return(
        <View style={{flex:1}}>
            <View>
            <Text>Adding Image </Text>
            </View>
            <View>
                <Button title="Camera" onPress={()=>{navigation.navigate('Add image using Camera')}} />
                <Text>Or</Text>
                <Button title="Import from Gallery" onPress={()=>{navigation.navigate('Import image from gallery')}} />
            </View>
        </View>

    )
}