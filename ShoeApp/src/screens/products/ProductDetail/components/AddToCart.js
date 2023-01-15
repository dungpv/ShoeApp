import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ICONS} from '../../../../common/Constant';
import {theme} from '../../../../common/Theme';
import {updatedFavoriteList} from '../../../../redux/users/favorite/FavoriteProductSlice';
import {styles} from '../styles/Styles';

export default function AddToCart({productDetail}) {
  const dispatch = useDispatch();

  const favoriteList = useSelector(
    state => state.favoriteProductReducer.favoriteList,
  );

  console.log('favoriteList', favoriteList);

  const favoriteListId = favoriteList.map(product => product.id);
  console.log('favorite list id: ', favoriteListId);

  const handleChangeLikeStatus = id => {
    console.log('product id', id);
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

  return (
    <View style={styles.addToCart}>
      <View style={{backgroundColor: theme.colors.white}}>
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
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.addToCart__btnAdd_text}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
