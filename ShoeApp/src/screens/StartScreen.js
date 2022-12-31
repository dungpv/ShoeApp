import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../common/Theme';
import styles from './users/styles/styles';
import {IMAGES} from '../common/Constant';
import {useNavigation} from '@react-navigation/native';

export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={IMAGES.logo} style={styles.logo__image}></Image>
        <Text style={styles.app_header}>Shoes App</Text>
        <Text style={styles.app_slogan__text}>Amazing Application</Text>
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
      </View>
    </View>
  );
}
