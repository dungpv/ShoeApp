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
        <Image style={styles.icon24} source={ICONS.iconClose} />
      </TouchableOpacity>
      <View style={{width: 300}}>
        <Text style={styles.navBar__title}>{categorySelected}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{position: 'relative'}}>
          <Text style={styles.navBar__cartTotal}>{renderTotalCartItem()}</Text>
          <TouchableOpacity
            onPress={() => navigation.push(KEY_SCREENS.productCart)}>
            <Image style={styles.icon24} source={ICONS.iconShoppingCart} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Image style={styles.icon24} source={ICONS.iconMore} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
