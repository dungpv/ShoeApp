import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {IMAGES} from '../common/Constant';

const CustomSidebarMenu = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://github.com/dungpv/ShoeApp/');
        }}>
        <Image source={IMAGES.logo} style={styles.sideMenuProfileIcon} />
      </TouchableOpacity>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'contain',
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default CustomSidebarMenu;
