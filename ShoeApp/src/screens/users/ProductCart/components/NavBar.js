import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from '../styles/Styles';
import {ICONS} from '../../../../common/Constant';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SIZES} from '../../../../common/Theme';

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.icon30} source={ICONS.iconClose} />
      </TouchableOpacity>
      <View>
        <Text style={styles.navBar__title}>Shopping Bag</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{marginRight: SIZES.margin8}}
          onPress={() => {}}>
          <Image style={styles.icon30} source={ICONS.iconLike} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon30} source={ICONS.iconMore} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
