import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ICONS} from '../../../../common/Constant';
import {theme} from '../../../../common/Theme';
import {
  getProductFavorite,
  likeProducts,
  unLikeProducts,
} from '../../../../redux/users/favorite/FavoriteProductThunk';
import {styles} from '../styles/Styles';

export default function AddToCart({productId}) {
  const dispatch = useDispatch();

  const accessToken = useSelector(state => state.loginReducer.accessToken);
  const favoriteList = useSelector(
    state => state.favoriteProductReducer.favoriteList,
  );
  const like = useSelector(state => state.favoriteProductReducer.like);
  const unlike = useSelector(state => state.favoriteProductReducer.unlike);

  // Get a list of all favorite products
  useEffect(() => {
    dispatch(getProductFavorite(accessToken));
  }, [like, unlike]);

  const favoriteListId = favoriteList.map(product => product.id);
  console.log('favorite List', favoriteList);
  console.log('access token', accessToken);

  const handleChangeLikeStatus = id => {
    console.log('product id', id);
    const isLike = favoriteListId.includes(id);
    if (isLike) {
      dispatch(unLikeProducts({id, accessToken}));
    } else {
      dispatch(likeProducts({id, accessToken}));
    }
  };

  return (
    <View style={styles.addToCart}>
      <View style={{backgroundColor: theme.colors.white}}>
        <TouchableOpacity onPress={() => handleChangeLikeStatus(productId)}>
          <Image
            style={[styles.icon50]}
            source={
              favoriteListId.includes(productId)
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
