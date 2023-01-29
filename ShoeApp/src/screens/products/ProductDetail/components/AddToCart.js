import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useDispatch, useSelector} from 'react-redux';
import {ICONS} from '../../../../common/Constant';
import {theme} from '../../../../common/Theme';
import {addCartList} from '../../../../redux/users/cart/ShoppingCartSlice';
import {updatedFavoriteList} from '../../../../redux/users/favorite/FavoriteProductSlice';
import {styles} from '../styles/Styles';

export default function AddToCart({
  productDetail,
  selectedColor,
  currentShoeSize,
}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const favoriteList = useSelector(
    state => state.favoriteProductReducer.favoriteList,
  );

  const favoriteListId = favoriteList.map(product => product.id);

  const handleChangeLikeStatus = id => {
    const isLike = favoriteListId.includes(id);
    if (!isLike) {
      const productData = {
        id,
        name: productDetail.name,
        image: productDetail.image,
      };
      dispatch(updatedFavoriteList([...favoriteList, productData]));
    } else {
      const newFavoriteList = [...favoriteList];
      newFavoriteList.map((item, index) => {
        if (item.id === id) {
          newFavoriteList.splice(index, 1);
        }
      });
      dispatch(updatedFavoriteList([...newFavoriteList]));
    }
  };

  const handleAddToCart = cartItem => {
    if (!cartItem.size || !cartItem.color) {
      Toast.show({
        position: 'top',
        topOffset: 60,
        type: 'error',
        text1: 'Please choose size/color',
        visibilityTime: 1500,
      });
    } else {
      dispatch(addCartList(cartItem));
      Toast.show({
        position: 'top',
        topOffset: 60,
        type: 'success',
        text1: `Item ${cartItem.name} Added To Cart`,
        visibilityTime: 1500,
      });
    }
  };

  return (
    <View style={styles.addToCart}>
      <View style={{backgroundColor: theme.colors.lightGray}}>
        <TouchableOpacity
          onPress={() => handleChangeLikeStatus(productDetail.id)}>
          <Image
            style={[styles.icon50]}
            source={
              favoriteListId.includes(productDetail.id)
                ? ICONS.iconHeart
                : ICONS.iconUnlike
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.addToCart__btnAdd}>
        <TouchableOpacity
          onPress={() => {
            const productCartItem = {
              cartId: `${productDetail.id}${selectedColor}${currentShoeSize}`,
              productId: productDetail.id,
              name: productDetail.name,
              image: productDetail.image,
              size: currentShoeSize,
              color: selectedColor,
              price: productDetail.price,
              quantity: 1,
            };
            handleAddToCart(productCartItem);
          }}>
          <Text style={styles.addToCart__btnAdd_text}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
