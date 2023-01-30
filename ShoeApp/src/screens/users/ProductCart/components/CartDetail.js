import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useDispatch, useSelector} from 'react-redux';
import {ICONS, KEY_SCREENS} from '../../../../common/Constant';
import {SIZES, theme} from '../../../../common/Theme';
import {getProductDetail} from '../../../../redux/products/productDetail/ProductDetailThunk';
import {
  decreaseItemQty,
  increaseItemQty,
  removeCartItem,
} from '../../../../redux/users/cart/ShoppingCartSlice';
import {updatedFavoriteList} from '../../../../redux/users/favorite/FavoriteProductSlice';
import {styles} from '../styles/Styles';

export default function CartDetail({cartData, favoriteList}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const favoriteListId = favoriteList.map(product => product.id);

  const _actionUpdateSelectedProduct = productId => {
    dispatch(getProductDetail(productId)).then(
      setTimeout(() => {
        navigation.push(KEY_SCREENS.productDetail);
      }, 1000),
    );
  };

  const handleAddToFavoriteList = item => {
    const isLike = favoriteListId.includes(item.productId);
    if (!isLike) {
      const productData = {
        id: item.productId,
        name: item.name,
        image: item.image,
        price: item.price,
      };
      dispatch(updatedFavoriteList([...favoriteList, productData]));
    }
    Toast.show({
      position: 'top',
      topOffset: 60,
      type: 'success',
      text1: 'Successfully moving product to wishlist from shopping bag',
      visibilityTime: 1500,
    });
    dispatch(removeCartItem(item.cartId));
  };

  const renderCartProducts = ({item}) => {
    return (
      <View style={styles.cartDetail}>
        <View
          style={{
            width: '40%',
            height: 100,
          }}>
          <TouchableOpacity
            onPress={() => _actionUpdateSelectedProduct(item.id)}>
            <Image
              style={styles.cartDetail__image}
              source={{uri: item.image}}
              resizeMode="contain"
            />
          </TouchableOpacity>
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
                handleAddToFavoriteList(item);
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
            <Text
              style={[
                styles.text,
                {fontSize: SIZES.fontSize16, color: theme.colors.orange},
              ]}>
              $ {item.price}
            </Text>
            <View style={[styles.rowDisplay, styles.cartDetail__item_btn]}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(decreaseItemQty(item.cartId));
                }}>
                <Image
                  style={styles.icon16}
                  source={ICONS.iconSubtract}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <View>
                <Text style={[styles.text, {fontSize: 16, fontWeight: '700'}]}>
                  {item.quantity}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increaseItemQty(item.cartId));
                }}>
                <Image
                  style={styles.icon16}
                  source={ICONS.iconPlus}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
      style={{marginTop: 20}}
    />
  );
}
