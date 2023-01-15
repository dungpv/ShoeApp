import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import ProductInfo from './components/ProductInfo';
import {styles} from './styles/Styles';
import AddToCart from './components/AddToCart';
import {useSelector} from 'react-redux';
import {theme} from '../../../common/Theme';

export default function ProductDetail() {
  const [currentShoeSize, setCurrentShoeSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const data = useSelector(state => state.productDetailReducer.productDetail);


  const colors = [
    theme.colors.black,
    theme.colors.white,
    theme.colors.red,
    theme.colors.darkgray,
  ];
  const _onChangeShoeSize = selectedShoeSize => {
    setCurrentShoeSize(selectedShoeSize);
  };

  const _onChangeProductColor = color => {
    setSelectedColor(color);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ProductInfo
        data={data}
        colors={colors}
        selectedColor={selectedColor}
        currentShoeSize={currentShoeSize}
        handleChangeProductColor={_onChangeProductColor}
        handleChangeShoeSize={_onChangeShoeSize}
      />
      <AddToCart
        productDetail={data}
        selectedColor={selectedColor}
        currentShoeSize={currentShoeSize}
      />
    </SafeAreaView>
  );
}
