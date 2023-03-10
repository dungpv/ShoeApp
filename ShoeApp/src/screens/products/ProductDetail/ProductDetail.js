import {View, Text} from 'react-native';
import React, {useState} from 'react';
import ProductInfo from './components/ProductInfo';
import {styles} from './styles/Styles';
import AddToCart from './components/AddToCart';
import {useSelector} from 'react-redux';
import {theme} from '../../../common/Theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavBar from '../../../components/NavBar';

export default function ProductDetail() {
  const [currentShoeSize, setCurrentShoeSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const data = useSelector(state => state.productDetailReducer.productDetail);
  const {cart} = useSelector(state => state.shoppingCartReducer);
  const {categorySelected} = useSelector(state => state.productListReducer);

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
      <NavBar cartTotal={cart} title={categorySelected} />
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
