import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import NavBar from './components/NavBar';
import ProductInfo from './components/ProductInfo';
import {styles} from './styles/Styles';
import AddToCart from './components/AddToCart';
import {useSelector} from 'react-redux';

export default function ProductDetail() {
  const data = useSelector(state => state.productDetailReducer.productDetail);

  console.log('product detail', data);
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ProductInfo data={data} />
      <AddToCart />
    </SafeAreaView>
  );
}
