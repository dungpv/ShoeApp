import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {ICONS} from '../common/Constant';
import {useDispatch, useSelector} from 'react-redux';
import {updatedFavoriteList} from '../redux/users/favorite/FavoriteProductSlice';

export default function Favorite({item}) {
  // const [favoriteList, setFavoriteList] = useState([]);

  // const onFavorite = product => {
  //   setFavoriteList([...favoriteList, product]);
  // };

  // const onRemoveFavorite = product => {
  //   const filteredList = favoriteList.filter(item => item.id !== product.id);
  //   setFavoriteList(filteredList);
  // };

  // const ifExistsFavorite = product => {
  //   if (favoriteList.filter(item => item.id === product.id).length > 0) {
  //     return true;
  //   }
  //   return false;
  // };
  const dispatch = useDispatch();
  const favoriteList = useSelector(
    state => state.favoriteProductReducer.favoriteList,
  );

  const favoriteListId = favoriteList.map(product => product.id);

  const handleChangeLikeStatus = id => {
    const isLike = favoriteListId.includes(id);
    if (!isLike) {
      const productData = {
        id,
        name: item.name,
        image: item.image,
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
    <TouchableOpacity
      style={{marginLeft: 10, marginTop: 5}}
      onPress={() =>
        //ifExistsFavorite(item) ? onRemoveFavorite(item) : onFavorite(item)
        handleChangeLikeStatus(item.id)
      }>
      <Image
        style={styles.icon}
        source={
          //ifExistsFavorite(item) ? ICONS.iconLove : ICONS.iconUnlike
          favoriteListId.includes(item.id) ? ICONS.iconLove : ICONS.iconUnlike
        }></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});
