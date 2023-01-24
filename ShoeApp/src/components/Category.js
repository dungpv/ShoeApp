import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SIZES, theme} from '../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCategorySelected,
  setIsLoading,
} from '../redux/products/productlist/ProductListSlice';
import {getProductByCategoryId} from '../redux/products/productlist/ProductListThunk';

export default function Category({dataCategories}) {
  const [currentCategory, setCurrentCategory] = useState('');
  const dispatch = useDispatch();
  const _actionClickCategory = idCategory => {
    dispatch(setCategorySelected(idCategory));
    dispatch(getProductByCategoryId(idCategory));
    dispatch(setCategorySelected(idCategory));
  };

  const renderItemCategory = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.categoryInfo__btn,
          item === currentCategory ? styles.categoryInfo__btn_selected : '',
        ]}
        onPress={() => {
          _actionClickCategory(item.id);
          setCurrentCategory(item);
        }}
        key={item.id}>
        <View>
          <Text
            style={[
              styles.categoryInfo__btn_text,
              item === currentCategory
                ? styles.categoryInfo__btn_selectedText
                : '',
            ]}>
            {item.category}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginLeft: 10, marginRight: 24}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataCategories}
        renderItem={data => {
          return renderItemCategory(data);
        }}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  categoryInfo__btn: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 8,
  },
  categoryInfo__btn_text: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    marginTop: SIZES.padding - 5,
  },
  categoryInfo__btn_selected: {
    backgroundColor: theme.colors.primary,
  },
  categoryInfo__btn_selectedText: {
    color: theme.colors.white,
  },
});
