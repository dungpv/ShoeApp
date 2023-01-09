import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ICONS} from '../../../../common/Constant';
import {theme} from '../../../../common/Theme';
import {styles} from '../styles/Styles';

export default function AddToCart() {
  return (
    <View style={styles.addToCart}>
      <View style={{backgroundColor: theme.colors.white}}>
        <TouchableOpacity>
          <Image style={[styles.icon50]} source={ICONS.iconUnlike} />
        </TouchableOpacity>
      </View>
      <View style={styles.addToCart__btnAdd}>
        <TouchableOpacity>
          <Text style={styles.addToCart__btnAdd_text}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
