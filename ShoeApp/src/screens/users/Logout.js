import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../common/Theme';
import styles from './styles/styles';
import {IMAGES, KEY_SCREENS, KEY_STORAGE} from '../../common/Constant';
import {useNavigation} from '@react-navigation/native';
import {removeLocalStorageByKey} from '../../common/LocalStorage';

export default function Logout() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = () => {
    removeToken()
      .then(() => setIsLoading(!isLoading))
      .then(() =>
        setTimeout(() => {
          navigation.replace(KEY_SCREENS.loginScreen);
        }, 1500),
      );
  };

  const removeToken = async () => {
    await removeLocalStorageByKey(KEY_STORAGE.token);
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
          <View style={styles.loadingView}>
            {isLoading && (
              <ActivityIndicator
                size="large"
                color={theme.colors.loading}
                style={styles.loadingButton}
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
