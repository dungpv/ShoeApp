import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {ICONS} from '../common/Constant';

const Header = ({navigation, title}) => {
  const openMenu = () => {
    navigation.openDrawer();
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
      <TouchableOpacity onPress={() => {}} style={styles.iconsRight}>
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
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  iconsLeft: {
    position: 'absolute',
    left: 16,
    top: 15,
  },
  iconsRight: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  icon: {
    width: 28,
    height: 28,
  },
});

export default Header;
