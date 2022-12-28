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

export default function SignUpTemp() {
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
        <Text>Name</Text>
        <View style={styles.containerInput__input}>
          <TextInput style={styles.containerInput__input__textInput} />
        </View>
      </View>
      <View style={styles.containerInput}>
        <Text>Email</Text>
        <View style={styles.containerInput__input}>
          <TextInput style={styles.containerInput__input__textInput} />
        </View>
      </View>

      <View style={styles.containerInput}>
        <Text>Password</Text>
        <View style={styles.containerInput__input}>
          <TextInput
            secureTextEntry={true}
            style={styles.containerInput__input__textInput}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: theme.colors.primary}]}>
        <Text style={[styles.button__text, styles.button__text_white]}>
          SIGN UP
        </Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
