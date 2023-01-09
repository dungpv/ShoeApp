import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {SIZES, theme} from '../../../../common/Theme';
import {styles} from '../styles/Styles';
import ShoeColor from './ShoeColor';
import ShoesSize from './ShoesSize';

const colors = [
  theme.colors.black,
  theme.colors.white,
  theme.colors.red,
  theme.colors.darkgray,
];

export default function ProductInfo({data}) {
  const [currentShoeSize, setCurrentShoeSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleChangeShoeSize = selectedShoeSize => {
    setCurrentShoeSize(selectedShoeSize);
  };

  const handleChangeProductColor = color => {
    setSelectedColor(color);
  };

  return (
    <ScrollView>
      <View style={styles.productInfo__container}>
        <Image style={styles.productInfo__img} source={{uri: data.image}} />

        <View
          style={{
            alignItems: 'flex-start',
            marginLeft: SIZES.padding * 4,
          }}>
          <Text style={styles.productInfo__name}>{data.name}</Text>
          <View style={styles.productInfo__priceColor}>
            <Text style={styles.productInfo__priceColor_price}>
              ${data.price}
            </Text>

            <ShoeColor
              colors={colors}
              colorSelected={selectedColor}
              onSelectedColor={handleChangeProductColor}
            />
          </View>

          <Text style={styles.productInfo__description}>
            {data.shortDescription.replace(/(\r\n|\n|\r)/gm, '')}
          </Text>
          <Text style={{marginBottom: SIZES.padding}}>
            {data.description.replace(/(\r\n|\n|\r)/gm, '')}
          </Text>

          <ShoesSize
            dataSize={data.size}
            shoeSizeSelected={currentShoeSize}
            onSelectedShoeSize={handleChangeShoeSize}
          />
        </View>
      </View>
    </ScrollView>
  );
}
