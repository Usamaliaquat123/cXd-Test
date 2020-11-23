import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {Camera} from '@component';
import Icon from 'react-native-vector-icons/Entypo';
import {colors} from '@theme';
export class Home extends Component {
  state = {
    camera: 0,
    photo: '',
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.camera == 0 ? (
          <View style={styles.btn}>
            <Icon.Button
              name="camera"
              backgroundColor={colors.primary}
              onPress={() => this.setState({camera: 1, photo: ''})}>
              Snap a pic
            </Icon.Button>
          </View>
        ) : (
          <Camera photo={(p) => this.setState({camera: 0, photo: p.uri})} />
        )}
        {this.state.photo != '' && (
          <View>
            <Image
              resizeMode="contain"
              style={styles.imgst}
              source={{uri: this.state.photo}}
            />
          </View>
        )}
      </View>
    );
  }
}

export default Home;
