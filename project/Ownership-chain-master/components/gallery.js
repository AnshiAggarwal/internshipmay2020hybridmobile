import React,{Component} from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class Gallery extends Component {
  constructor(props)
  {super(props)
    this.state = {
      image: null,
    };
  }


  render() {
    let { image } = this.state;
const navigation=this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from gallery" onPress={this._pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Button title="save" onPress={()=>{navigation.navigate('Image Description',{image:image})}} />
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
        fetch()
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}
