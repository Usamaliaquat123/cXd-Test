import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnCamera: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'red',
    width: '50%',
  },
  preview: {
    height: Dimensions.get('window').height,
    width: '100%',
  },
  capture: {
    flex: 0,
    alignSelf: 'center',
    margin: 25,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  containerImg: {
    width: 250,
    height: 250,
    opacity: 0.5,
  },
  imgText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.white,
  },
});

export default styles;
