import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavBar from '../../../components/NavBar';
import {getLocalStorageByKey, saveStorage} from '../../../common/LocalStorage';
import {KEY_STORAGE} from '../../../common/Constant';
import {useSelector} from 'react-redux';
import FavoriteList from './components/FavoriteList';

export default function ProductFavorite() {
  const [myCart, setMyCart] = useState([]);
  const [myFavorite, setMyFavorite] = useState([]);

  const {cart} = useSelector(state => state.shoppingCartReducer);
  const {favoriteList} = useSelector(state => state.favoriteProductReducer);

  useEffect(() => {
    saveStorage(KEY_STORAGE.myCart, cart);
    saveStorage(KEY_STORAGE.userLike, favoriteList);
    getMyOrder();
    getMyFavorite();
  }, [cart, favoriteList]);

  const getMyOrder = async () => {
    const data = await getLocalStorageByKey(KEY_STORAGE.myCart);
    if (data) {
      setMyCart(data);
    }
  };

  const getMyFavorite = async () => {
    const data = await getLocalStorageByKey(KEY_STORAGE.userLike);
    if (data) {
      setMyFavorite(data);
    }
  };

  return (
    <SafeAreaView>
      {/* <NavBar cartTotal={myCart} title={'Wishlist'} /> */}
      <FavoriteList productData={myFavorite} />
    </SafeAreaView>
  );
}
