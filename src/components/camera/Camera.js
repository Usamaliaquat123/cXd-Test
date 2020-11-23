import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {RNCamera} from 'react-native-camera';
import {images, colors} from '@theme';
import Icon from 'react-native-vector-icons/Feather';
export default class Camera extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.props.photo(data);
    }
  };
  render() {
    return (
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        useNativeZoom={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.containerImg}>
            <Image
              style={styles.imgStyle}
              source={images.shirt}
              tintColor={colors.white}
            />
          </View>
          <Text style={styles.imgText}>Take picture of the front side</Text>
        </View>

        <Icon
          onPress={() => this.takePicture()}
          style={styles.capture}
          name="camera"
          size={40}
          color={colors.primary}
        />
      </RNCamera>
    );
  }
}
