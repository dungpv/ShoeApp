import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {theme} from '../common/Theme';
import styles from './users/styles/styles';
import {IMAGES} from '../common/Constant';
import {useNavigation, StackActions} from '@react-navigation/native';
import {
  getLocalStorageByKey,
  removeLocalStorageByKey,
} from '../common/LocalStorage';

export default function StartScreen() {
  const navigation = useNavigation();
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      const token = await getLocalStorageByKey('token');
      redirectScreens(token);
    };

    setUserToken(getToken);
  }, []);

  const redirectScreens = token => {
    console.log(token);
    if (token !== '' && token !== 'null' && token !== 'undefined') {
      setTimeout(() => {
        navigation.navigate('ProductsScreen');
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.navigate('LoginScreen');
      }, 2000);
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={IMAGES.logo} style={styles.logo__image}></Image>
        <Text style={styles.app__header}>Shoes App</Text>
        <Text style={styles.app__slogan__text}>Amazing Application</Text>
        {/* <Text style={styles.app__slogan__text}>
          {userToken !== 'null' && userToken !== 'undefined'
            ? 'has token'
            : 'no token'}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={[styles.button, {backgroundColor: theme.colors.primary}]}>
          <Text style={[styles.button__text, styles.button__text_white]}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
          style={styles.button__signup}>
          <Text style={[styles.button__text, styles.button__text_purple]}>
            SIGN UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button__signup}
          onPress={() => removeLocalStorageByKey('token')}>
          <Text style={[styles.button__text, styles.button__text_purple]}>
            Remove Token
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
