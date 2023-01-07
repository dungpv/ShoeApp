import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../../../../common/Constant';
import {styles} from '../styles/Styles';

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity>
        <Image style={styles.icon24} source={ICONS.iconClose} />
      </TouchableOpacity>
      <Text style={styles.navBar__title}>Men Shoes</Text>
      <TouchableOpacity>
        <Image style={styles.icon24} source={ICONS.iconMore} />
      </TouchableOpacity>
    </View>
  );
}
