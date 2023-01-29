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
import {theme} from '../common/Theme';

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
      <View style={{marginBottom: 15}}>
        <Text style={[styles.text, {color: theme.colors.primary}]}>
          Design & Develop by
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://github.com/dungpv');
          }}>
          <Text style={styles.text}>Phùng Việt Dũng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://github.com/camha91');
          }}>
          <Text style={styles.text}>Nguyễn Cẩm Hà</Text>
        </TouchableOpacity>
      </View>
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
  text: {
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default CustomSidebarMenu;
