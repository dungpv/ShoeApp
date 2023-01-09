import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SIZES, theme} from '../../../../common/Theme';
import {styles} from '../styles/Styles';
import ShoesSize from './ShoesSize';

export default function ProductInfo({data}) {
  const [currentShoeSize, setCurrentShoeSize] = useState('');

  const handleChangeShoeSize = selectedShoeSize => {
    setCurrentShoeSize(selectedShoeSize);
  };

  return (
    <ScrollView>
      <View style={styles.productInfo__container}>
        <Image style={styles.productInfo__img} source={{uri: data.image}} />

        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <Text style={styles.productInfo__name}>{data.name}</Text>
          <View style={styles.productInfo__priceColor}>
            <Text style={styles.productInfo__priceColor_price}>
              ${data.price}
            </Text>

            <View style={styles.productInfo__colors}>
              <Text>Colors: </Text>

              <TouchableOpacity
                style={[
                  styles.productInfo__btnColor,
                  {backgroundColor: theme.colors.black},
                ]}></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.productInfo__btnColor,
                  {backgroundColor: theme.colors.white},
                ]}></TouchableOpacity>
            </View>
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
