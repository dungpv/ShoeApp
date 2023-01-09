import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../../../../common/Constant';
import {styles} from '../styles/Styles';
import {useNavigation} from '@react-navigation/native';

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.icon24} source={ICONS.iconClose} />
      </TouchableOpacity>
      <Text style={styles.navBar__title}>Men Shoes</Text>
      <TouchableOpacity>
        <Image style={styles.icon24} source={ICONS.iconMore} />
      </TouchableOpacity>
    </View>
  );
}
