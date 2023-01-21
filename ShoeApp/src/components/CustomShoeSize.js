import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SIZES, theme} from '../common/Theme';

export default function CustomShoeSize({dataSize}) {
  const [currentShoeSize, setCurrentShoeSize] = useState('');

  const renderProductSizes = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.productInfo__btnSize,
          item === currentShoeSize ? styles.productInfo__btnSize_selected : '',
        ]}
        onPress={() => {
          setCurrentShoeSize(item);
        }}>
        <View>
          <Text
            style={[
              styles.productInfo__btnSize_text,
              item === currentShoeSize
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
        data={dataSize}
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
