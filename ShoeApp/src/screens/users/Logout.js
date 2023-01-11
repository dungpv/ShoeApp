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
import {theme} from '../../common/Theme';
import styles from './styles/styles';
import {IMAGES} from '../../common/Constant';
import {useNavigation, StackActions} from '@react-navigation/native';
import {
  getLocalStorageByKey,
  removeLocalStorageByKey,
} from '../../common/LocalStorage';

export default function Logout() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = () => {
    setIsLoading(!isLoading);
    removeToken();
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 2000);
  };

  const removeToken = async () => {
    const token = await removeLocalStorageByKey('token');
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={IMAGES.logo} style={styles.logo__image}></Image>
        <Text style={styles.app__header}>Shoes App</Text>
        <Text style={styles.app__slogan__text}>Amazing Application</Text>
        <TouchableOpacity
          onPress={handleLogout}
          style={[styles.button, {backgroundColor: theme.colors.primary}]}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            {isLoading && (
              <ActivityIndicator
                size="large"
                color={theme.colors.loading}
                style={{marginRight: 10}}
              />
            )}
            <Text style={[styles.button__text, styles.button__text_white]}>
              SIGN OUT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
