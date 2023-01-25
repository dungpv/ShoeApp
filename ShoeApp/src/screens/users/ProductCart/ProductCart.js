import {View, Text} from 'react-native';
import React from 'react';
import NavBar from './components/NavBar';
import CartDetail from './components/CartDetail';
import CheckOut from './components/CheckOut';
import {styles} from './styles/Styles';
import {useSelector} from 'react-redux';

export default function ProductCart() {
  const {cart} = useSelector(state => state.shoppingCartReducer);

  return (
    <View style={styles.container}>
      <NavBar />
      <CartDetail cartData={cart} />
      <CheckOut />
    </View>
  );
}
