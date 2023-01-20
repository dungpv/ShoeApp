import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../styles/Styles';
import {theme} from '../../../../common/Theme';

export default function CheckOut() {
  return (
    <View style={styles.checkout}>
      <Text style={styles.text}>$500.00</Text>
      <View style={styles.checkout__btn}>
        <TouchableOpacity
          onPress={() => {
            console.log('Checkout order');
          }}>
          <Text style={[styles.text, styles.checkout__btn_text]}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
