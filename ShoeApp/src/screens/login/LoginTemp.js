import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {theme} from '../../common/Theme';
import styles from './styles/styles';
import {ICONS, IMAGES} from '../../common/Constant';
import {useNavigation} from '@react-navigation/native';

export default function LoginTemp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={styles.container__button_back}>
        <Image style={styles.image__back} source={ICONS.iconBack} />
      </TouchableOpacity>
      <Image source={IMAGES.logo} style={styles.logo__image}></Image>
      <Text style={styles.app__header}>Shoes App</Text>
      <Text style={styles.app__text}>Amazing Application</Text>
      <View style={styles.containerInput}>
        <Text>Email</Text>
        <View style={styles.containerInput__input}>
          <Image
            style={styles.containerInput__input__img}
            source={ICONS.iconEmail}
          />
          <TextInput style={styles.containerInput__input__textInput} />
        </View>
      </View>

      <View style={styles.containerInput}>
        <Text>Password</Text>
        {/* Row */}
        <View style={styles.containerInput__input}>
          <Image
            style={styles.containerInput__input__img}
            source={ICONS.iconPassword}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.containerInput__input__textInput}
          />
        </View>
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: theme.colors.primary}]}>
        <Text style={[styles.button__text, styles.button__text_white]}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
