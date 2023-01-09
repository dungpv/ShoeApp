import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {SIZES} from '../../../../common/Theme';
import {styles} from '../styles/Styles';

export default function ShoesSize({
  dataSize,
  shoeSizeSelected,
  onSelectedShoeSize,
}) {
  const renderProductSizes = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.productInfo__btnSize,
          item === shoeSizeSelected ? styles.productInfo__btnSize_selected : '',
        ]}
        onPress={() => onSelectedShoeSize(item)}>
        <View>
          <Text
            style={[
              styles.productInfo__btnSize_text,
              item === shoeSizeSelected
                ? styles.productInfo__btnSize_selectedText
                : '',
            ]}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text style={{fontWeight: SIZES.fontWeight700}}>Select a size</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataSize}
        renderItem={data => {
          return renderProductSizes(data);
        }}
      />
    </View>
  );
}
