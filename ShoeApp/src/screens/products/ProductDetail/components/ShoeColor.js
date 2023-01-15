import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../styles/Styles';

export default function ShoeColor({colors, colorSelected, onSelectedColor}) {
  const renderProductColor = ({item}) => {
    return (
      <TouchableOpacity
        key={item}
        style={[
          styles.productInfo__btnColor,
          {backgroundColor: item},
          item === colorSelected ? styles.productInfo__btnColor_selected : '',
        ]}
        onPress={() => onSelectedColor(item)}></TouchableOpacity>
    );
  };
  return (
    <View style={styles.productInfo__colors}>
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
