import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useDispatch} from 'react-redux';
import {ICONS} from '../../../../common/Constant';
import {SIZES, theme} from '../../../../common/Theme';
import {
  decreaseItemQty,
  increaseItemQty,
  removeCartItem,
} from '../../../../redux/users/cart/ShoppingCartSlice';
import {styles} from '../styles/Styles';

export default function CartDetail({cartData}) {
  const dispatch = useDispatch();

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
                  dispatch(decreaseItemQty(item.cartId));
                }}>
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text>{item.quantity}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increaseItemQty(item.cartId));
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

  const renderHiddenItem = cartItem => {
    return (
      <TouchableOpacity
        style={styles.cartDetail__item_delete}
        onPress={() => deleteCartItem(cartItem.cartId)}>
        <Image source={ICONS.iconDelete} />
      </TouchableOpacity>
    );
  };

  const deleteCartItem = cartId => {
    dispatch(removeCartItem(cartId));
  };

  return (
    <SwipeListView
      vertical
      showsVerticalScrollIndicator={false}
      data={cartData}
      ItemSeparatorComponent={ItemDivider}
      renderItem={data => renderCartProducts(data)}
      renderHiddenItem={({item}) => renderHiddenItem(item)}
      rightOpenValue={-75}
    />
  );
}
