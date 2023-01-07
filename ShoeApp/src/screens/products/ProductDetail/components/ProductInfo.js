import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {styles} from '../styles/Styles';
import {ICONS} from '../../../../common/Constant';
import {SIZES, theme} from '../../../../common/Theme';

export default function ProductImage({data}) {
  const renderProductSizes = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.productInfo__btnSize}>
          <Text style={styles.productInfo__btnSize_text}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={styles.productInfo__container}>
        <Image
          style={styles.productInfo__img}
          source={{uri: data.content.image}}
        />

        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.productInfo__name}>{data.content.name}</Text>
          <View style={styles.productInfo__priceColor}>
            <Text style={styles.productInfo__priceColor_price}>
              ${data.content.price}
            </Text>

            <View style={{flexDirection: 'row'}}>
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
          <Text style={{fontWeight: SIZES.fontWeight}}>Select a size</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data.content.size}
            renderItem={data => {
              return renderProductSizes(data);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
