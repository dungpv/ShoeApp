import {View, Text} from 'react-native';
import React from 'react';
import NavBar from './components/NavBar';
import CartDetail from './components/CartDetail';
import CheckOut from './components/CheckOut';
import {styles} from './styles/Styles';

export default function ProductCart() {
  const cartData = [
    {
      id: 1,
      name: 'Adidas Prophere',
      price: 350,
      size: '42',
      quantity: 995,
      image: 'https://shop.cyberlearn.vn/images/adidas-prophere.png',
    },
    {
      id: 2,
      name: 'Adidas Prophere Black White',
      price: 450,
      size: '37',
      quantity: 990,
      image:
        'https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png',
    },
    {
      id: 3,
      name: 'Adidas Prophere Customize',
      price: 375,
      size: '44',
      quantity: 415,
      image: 'https://shop.cyberlearn.vn/images/adidas-prophere-customize.png',
    },
    {
      id: 4,
      name: 'Adidas Super Star Red',
      price: 465,
      size: '40',
      quantity: 542,
      image: 'https://shop.cyberlearn.vn/images/adidas-super-star-red.png',
    },
  ];
  return (
    <View style={styles.container}>
      <NavBar />
      <CartDetail cartData={cartData} />
      <CheckOut />
    </View>
  );
}
