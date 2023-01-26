import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICONS, KEY_SCREENS} from '../../../../common/Constant';
import {styles} from '../styles/Styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {theme} from '../../../../common/Theme';

export default function NavBar({cartTotal}) {
  const navigation = useNavigation();
  const {categorySelected} = useSelector(state => state.productListReducer);

  const renderTotalCartItem = () => {
    return cartTotal.reduce(
      (totalCartItem, cartItem, index) => (totalCartItem += cartItem.quantity),
      0,
    );
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon24}
          source={ICONS.iconClose}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={{width: '100%'}}>
        <Text style={styles.navBar__title}>{categorySelected}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.push(KEY_SCREENS.productCart)}
        style={styles.iconsRight}>
        <Text style={styles.navBar__cartTotal}>{renderTotalCartItem()}</Text>

        <Image
          style={styles.icon24}
          source={ICONS.iconShoppingCart}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
