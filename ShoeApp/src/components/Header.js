import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {ICONS, KEY_SCREENS} from '../common/Constant';

const Header = ({navigation, title, icon}) => {
  const {cart} = useSelector(state => state.shoppingCartReducer);

  const openMenu = () => {
    navigation.openDrawer();
  };

  const renderTotalCartItem = () => {
    return cart.reduce(
      (totalCartItem, cartItem, index) => (totalCartItem += cartItem.quantity),
      0,
    );
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openMenu} style={styles.iconsLeft}>
        <Image
          style={styles.icon}
          source={ICONS.iconList}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.push(KEY_SCREENS.productCart)}
        style={styles.iconsRight}>
        <Text style={styles.header__cartTotal}>{renderTotalCartItem()}</Text>
        <Image
          style={styles.icon}
          source={ICONS.iconShoppingCart}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    width: '100%',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    textAlign: 'center',
  },
  iconsLeft: {
    position: 'absolute',
    left: 16,
    top: 15,
  },
  iconsRight: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  icon: {
    width: 28,
    height: 28,
  },
  header__cartTotal: {
    color: 'red',
    position: 'absolute',
    top: -10,
    left: 11,
    fontWeight: '600',
  },
});

export default Header;
