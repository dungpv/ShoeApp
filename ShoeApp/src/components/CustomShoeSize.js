import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SIZES, theme} from '../common/Theme';

export default function CustomShoeSize({selectedShoeSize, onChangeShoeSize}) {
  const [selectSize, setSelectSize] = useState('');
  const sizes = ['36', '37', '38', '39', '40', '41', '42'];

  const renderProductSizes = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.productInfo__btnSize,
          item === selectSize ? styles.productInfo__btnSize_selected : '',
        ]}
        onPress={() => {
          setSelectSize(item);
          onChangeShoeSize(item);
        }}>
        <View>
          <Text
            style={[
              styles.productInfo__btnSize_text,
              item === selectSize
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
      <Text>Sizes:</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sizes}
        renderItem={data => {
          return renderProductSizes(data);
        }}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  productInfo__btnSize: {
    height: 29,
    width: 29,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    marginHorizontal: 3,
    marginVertical: SIZES.padding,
  },
  productInfo__btnSize_text: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    marginTop: SIZES.padding - 5,
  },
  productInfo__btnSize_selected: {
    backgroundColor: theme.colors.primary,
  },
  productInfo__btnSize_selectedText: {
    color: theme.colors.white,
  },
});
