import {View, Text} from 'react-native';
import React from 'react';
import NavBar from './components/NavBar';
import ProductInfo from './components/ProductInfo';
import {styles} from './styles/Styles';
import AddToCart from './components/AddToCart';

const data = {
  content: {
    id: 8,
    name: 'Adidas Yeezy 350',
    alias: 'adidas-yeezy-350',
    price: 750,
    feature: false,
    description:
      'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    size: ['36', '37', '38', '39', '40', '41', '42'],
    shortDescription:
      'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 524,
    image: 'https://shop.cyberlearn.vn/images/adidas-yeezy-350.png',
    categories: [
      {
        id: 'ADIDAS',
        category: 'ADIDAS',
      },
      {
        id: 'MEN',
        category: 'MEN',
      },
      {
        id: 'WOMEN',
        category: 'WOMEN',
      },
    ],
    relatedProducts: [
      {
        id: 1,
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        feature: false,
        price: 350,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'https://shop.cyberlearn.vn/images/adidas-prophere.png',
      },
      {
        id: 4,
        name: 'Adidas Super Star Red',
        alias: 'adidas-super-star-red',
        feature: false,
        price: 465,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image: 'https://shop.cyberlearn.vn/images/adidas-super-star-red.png',
      },
      {
        id: 6,
        name: 'Adidas Tenisky Super Star',
        alias: 'adidas-tenisky-super-star',
        feature: false,
        price: 250,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        image:
          'https://shop.cyberlearn.vn/images/adidas-tenisky-super-star.png',
      },
    ],
  },
};

export default function ProductDetail() {
  return (
    <View style={styles.container}>
      <NavBar />
      <ProductInfo data={data} />
      <AddToCart />
    </View>
  );
}
