import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      const token = await getLocalStorageByKey('token');
      redirectScreens(token);
    };

    setUserToken(getToken);
  }, []);

  const redirectScreens = token => {
    //console.log(token);
    setIsLoading(!isLoading);
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
        {isLoading && (
          <ActivityIndicator size="large" color={theme.colors.loading} />
        )}
      </View>
    </View>
  );
}
