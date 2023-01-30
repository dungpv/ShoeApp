import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/styles';
import CustomShoeSize from '../../../../components/CustomShoeSize';
import CustomShoeColor from '../../../../components/CustomShoeColor';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {addCartList} from '../../../../redux/users/cart/ShoppingCartSlice';
import {useDispatch} from 'react-redux';
import {getProductDetail} from '../../../../redux/products/productDetail/ProductDetailThunk';
import {KEY_SCREENS} from '../../../../common/Constant';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../../../common/Theme';

export default function FavoriteList({productData}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [currentColor, setCurrentColor] = useState('');
  const [currentSize, setCurrentSize] = useState('');

  const colors = [
    theme.colors.black,
    theme.colors.white1,
    theme.colors.red,
    theme.colors.darkgray,
  ];

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
        text1: 'Item Added To Cart',
        visibilityTime: 1500,
      });
    }
  };

  const _actionUpdateSelectedProduct = productId => {
    dispatch(getProductDetail(productId)).then(
      setTimeout(() => {
        navigation.push(KEY_SCREENS.productDetail);
      }, 1000),
    );
  };

  const handleChangeSelectedColor = color => {
    setCurrentColor(color);
  };

  const handleChangeShoeSize = size => {
    setCurrentSize(size);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.containerItem} key={item.id}>
        <View style={styles.avatarImage}>
          <TouchableOpacity
            onPress={() => _actionUpdateSelectedProduct(item.id)}>
            <Image
              style={styles.img}
              source={{
                uri: item.image,
              }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textImageWrap}>
          <View></View>
          <TouchableOpacity
            onPress={() => _actionUpdateSelectedProduct(item.id)}>
            <Text style={styles.textImageName}>{item.name}</Text>
            <Text style={styles.textImagePrice}>$ {item.price}</Text>
          </TouchableOpacity>
          <CustomShoeColor
            colors={colors}
            currentColor={currentColor}
            onChangeSelectedColor={handleChangeSelectedColor}
          />
          <CustomShoeSize
            selectedShoeSize={currentSize}
            onChangeShoeSize={handleChangeShoeSize}
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={styles.addToCart}
              onPress={() => {
                const productCartItem = {
                  cartId: `${item.id}${currentColor}${currentSize}`,
                  productId: item.id,
                  name: item.name,
                  image: item.image,
                  color: currentColor,
                  size: currentSize,
                  price: item.price,
                  quantity: 1,
                };
                handleAddToCart(productCartItem);
              }}>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Add To Card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={productData}
      renderItem={renderItem}
      style={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}
