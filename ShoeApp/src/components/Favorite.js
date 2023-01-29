import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {ICONS} from '../common/Constant';

export default function Favorite({item}) {
  const [favoriteList, setFavoriteList] = useState([]);

  const onFavorite = product => {
    setFavoriteList([...favoriteList, product]);
  };

  const onRemoveFavorite = product => {
    const filteredList = favoriteList.filter(item => item.id !== product.id);
    setFavoriteList(filteredList);
  };

  const ifExistsFavorite = product => {
    if (favoriteList.filter(item => item.id === product.id).length > 0) {
      return true;
    }
    return false;
  };

  return (
    <TouchableOpacity
      style={{marginLeft: 10, marginTop: 5}}
      onPress={() =>
        ifExistsFavorite(item) ? onRemoveFavorite(item) : onFavorite(item)
      }>
      <Image
        style={styles.icon}
        source={
          ifExistsFavorite(item) ? ICONS.iconLove : ICONS.iconUnlike
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
