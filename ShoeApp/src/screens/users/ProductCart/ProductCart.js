import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {KEY_STORAGE} from '../../../common/Constant';
import {getLocalStorageByKey, saveStorage} from '../../../common/LocalStorage';
import CartDetail from './components/CartDetail';
import CheckOut from './components/CheckOut';
import NavBar from './components/NavBar';
import {styles} from './styles/Styles';

export default function ProductCart() {
  const [myCart, setMyCart] = useState([]);
  const [myEmail, setMyEmail] = useState('');
  const [myFavorite, setMyFavorite] = useState([]);

  const {cart} = useSelector(state => state.shoppingCartReducer);
  const favoriteList = useSelector(
    state => state.favoriteProductReducer.favoriteList,
  );

  useEffect(() => {
    saveStorage(KEY_STORAGE.myCart, cart);
    saveStorage(KEY_STORAGE.userLike, favoriteList);
    getMyOrder();
    getMyEmail();
    getMyFavorite();
  }, [cart, favoriteList]);

  const getMyOrder = async () => {
    const data = await getLocalStorageByKey(KEY_STORAGE.myCart);
    if (data) {
      setMyCart(data);
    }
  };

  const getMyEmail = async () => {
    const email = await getLocalStorageByKey(KEY_STORAGE.email);

    if (email) {
      setMyEmail(email);
    }
  };

  const getMyFavorite = async () => {
    const data = await getLocalStorageByKey(KEY_STORAGE.userLike);
    if (data) {
      setMyFavorite(data);
    }
  };

  return (
    <View style={styles.container}>
      <NavBar />
      <CartDetail cartData={myCart} favoriteList={myFavorite} />
      <CheckOut cartData={myCart} email={myEmail} />
    </View>
  );
}
