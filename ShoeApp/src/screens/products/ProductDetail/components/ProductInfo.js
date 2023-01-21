import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {SIZES, theme} from '../../../../common/Theme';
import {styles} from '../styles/Styles';
import ShoeColor from './ShoeColor';
import ShoesSize from './ShoesSize';

export default function ProductInfo({
  data,
  colors,
  selectedColor,
  currentShoeSize,
  handleChangeProductColor,
  handleChangeShoeSize,
}) {
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
            {data.shortDescription.trim()}
          </Text>
          <Text style={{marginBottom: SIZES.padding}}>
            {data.description.trim()}
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
