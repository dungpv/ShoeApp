import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../../../../common/Constant';
import {SIZES, theme} from '../../../../common/Theme';
import {styles} from '../styles/Styles';

export default function CartDetail({cartData}) {
  const renderCartProducts = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('navigate to product detail');
        }}
        style={styles.cartDetail}>
        <View
          style={{
            width: '40%',
            height: 100,
          }}>
          <Image
            style={styles.cartDetail__image}
            source={{uri: item.image}}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flex: 1,
            marginRight: SIZES.padding,
            marginVertical: SIZES.padding / 2,
          }}>
          <View style={styles.rowDisplay}>
            <Text style={styles.cartDetail__item_name}>
              {item.name.length > 20
                ? `${item.name.substring(0, 20)}...`
                : item.name}
            </Text>

            <TouchableOpacity
              onPress={() => {
                console.log('navigate to favorite list');
              }}>
              <Image style={styles.icon24} source={ICONS.iconAddFavorite} />
            </TouchableOpacity>
          </View>
          <View style={styles.cartDetail__item_sizeColor}>
            <Text style={styles.text}>{item.size}</Text>
            <Text
              style={[
                {backgroundColor: item.color},
                styles.cartDetail__item_sizeColor_color,
              ]}></Text>
          </View>
          <View style={styles.rowDisplay}>
            <Text style={[styles.text, {fontSize: SIZES.fontSize16}]}>
              ${item.price}
            </Text>
            <View style={[styles.rowDisplay, styles.cartDetail__item_btn]}>
              <TouchableOpacity
                onPress={() => {
                  console.log('Clicking decrease qty');
                }}>
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>{item.quantity}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log('Clicking increase qty');
                }}>
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: theme.colors.darkgray,
        }}
      />
    );
  };

  return (
    <FlatList
      vertical
      showsVerticalScrollIndicator={false}
      data={cartData}
      ItemSeparatorComponent={ItemDivider}
      renderItem={data => renderCartProducts(data)}
    />
  );
}
