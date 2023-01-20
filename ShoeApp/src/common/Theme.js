import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SIZES = {
  padding: 10,
  padding12: 12,
  width,
  height,
  radius: 10,
  fontWeight: '500',
  fontWeight700: '700',
  fontSize24: 24,
  fontSize16: 16,
  fontSize130: 30,
  margin8: 8,
  margin16: 16,
  borderRadius: 30,
};

export const theme = {
  colors: {
    text: '#000000',
    primary: '#560CCE',
    secondary: '#414757',
    error: '#f13a59',
    loading: '#f48225',
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#F5F5F6',
    lightGray2: '#F6F6F7',
    lightGray3: '#EFEFF1',
    lightGray4: '#F8F8F9',
    transparent: 'transparent',
    darkgray: '#898C95',
    red: '#FF4500',
  },
};
