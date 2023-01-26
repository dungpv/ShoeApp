import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SIZES, theme} from '../common/Theme';

export default function CustomShoeColor({
  colors,
  currentColor,
  onChangeSelectedColor,
}) {
  const renderProductColor = ({item}) => {
    return (
      <TouchableOpacity
        key={item}
        style={[
          styles.productInfo__btnColor,
          {backgroundColor: item},
          item === currentColor ? styles.productInfo__btnColor_selected : '',
        ]}
        onPress={() => onChangeSelectedColor(item)}></TouchableOpacity>
    );
  };
  return (
    <View style={[styles.productInfo__colors, {marginLeft: 0}]}>
      <Text>Colors: </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={colors}
        renderItem={data => {
          return renderProductColor(data);
        }}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  productInfo__colors: {
    justifyContent: 'flex-end',
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productInfo__btnColor: {
    height: 18,
    width: 18,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  productInfo__btnColor_selected: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
});
