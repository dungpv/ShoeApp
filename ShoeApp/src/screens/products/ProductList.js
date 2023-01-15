import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ICONS, KEY_SCREENS} from '../../common/Constant';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../redux/products/productlist/ProductListThunk';
import {getProductDetail} from '../../redux/products/productDetail/ProductDetailThunk';
import {useNavigation} from '@react-navigation/native';

export default function ProductList() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [favoriteList, setFavoriteList] = useState([]);
  const productData = useSelector(
    state => state.productListReducer.productData,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const onFavorite = product => {
    setFavoriteList([...favoriteList, product]);
  };

  const onRemoveFavorite = product => {
    const filteredList = favoriteList.filter(item => item.id !== product.id);
    setFavoriteList(filteredList);
  };

  const ifExists = product => {
    if (favoriteList.filter(item => item.id === product.id).length > 0) {
      return true;
    }
    return false;
  };

  const _actionUpdateSelectedProduct = productId => {
    dispatch(getProductDetail(productId));
    navigation.push(KEY_SCREENS.productDetail);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.containerItem}
        key={item.item.id}
        onPress={() => _actionUpdateSelectedProduct(item.item.id)}>
        <View style={styles.avatarImage}>
          <Image
            style={styles.img}
            source={{
              uri: item.item.image,
            }}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.textImageWrap}>
          <View></View>
          <View>
            <Text style={styles.textImageName}>{item.item.name}</Text>
            <Text style={styles.textImagePrice}>$ {item.item.price}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#4f3ce6',
                width: 100,
                borderRadius: 10,
                marginBottom: 30,
              }}
              onPress={() => {}}>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Add To Card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 10, marginTop: 5}}
              onPress={() =>
                ifExists(item.item)
                  ? onRemoveFavorite(item.item)
                  : onFavorite(item.item)
              }>
              <Image
                style={styles.icon}
                source={
                  ifExists(item.item) ? ICONS.iconLove : ICONS.iconUnlike
                }></Image>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapperView}>
        <FlatList
          data={productData}
          renderItem={renderItem}
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  mainWrapperView: {
    paddingTop: 10,
  },
  activityIndicatorWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 0,
    alignSelf: 'stretch',
  },
  containerItem: {
    width: 370,
    height: 280,
    backgroundColor: 'white',
    borderRadius: 18,
    margin: 20,
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  avatarImage: {
    height: '100%',
    width: '50%',
  },
  textImageWrap: {
    marginLeft: 8,
    marginTop: 10,
    width: '50%',
    flex: 1,
    justifyContent: 'space-between',
  },
  textImageName: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  textImagePrice: {
    color: 'orange',
    fontSize: 16,
    fontWeight: '700',
  },
  icon: {
    width: 28,
    height: 28,
  },
});
