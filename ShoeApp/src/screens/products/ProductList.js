import {useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {ICONS, KEY_SCREENS} from '../../common/Constant';
import {theme} from '../../common/Theme';
import Category from '../../components/Category';
import CustomShoeColor from '../../components/CustomShoeColor';
import CustomShoeSize from '../../components/CustomShoeSize';
import {getProductDetail} from '../../redux/products/productDetail/ProductDetailThunk';
import {
  getAllCategory,
  getProduct,
} from '../../redux/products/productlist/ProductListThunk';
import {addCartList} from '../../redux/users/cart/ShoppingCartSlice';

function ProductList() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [favoriteList, setFavoriteList] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [currentShoeSize, setCurrentShoeSize] = useState('');

  const colors = [
    theme.colors.black,
    theme.colors.white1,
    theme.colors.red,
    theme.colors.darkgray,
  ];

  const CustomShoeSizeMemo = memo(CustomShoeSize);

  const categoryData = useSelector(
    state => state.productListReducer.categoryData,
  );

  const productData = useSelector(
    state => state.productListReducer.productData,
  );

  const isLoading = useSelector(state => state.productListReducer.isLoading);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getProduct());
  }, []);

  const onFavorite = product => {
    setFavoriteList([...favoriteList, product]);
  };

  const onRemoveFavorite = product => {
    const filteredList = favoriteList.filter(item => item.id !== product.id);
    setFavoriteList(filteredList);
  };

  const ifExistsFavorite = product => {
    if (favoriteList.filter(item => item.id === product.id).length > 0) {
      return true;
    }
    return false;
  };

  const _actionUpdateSelectedProduct = productId => {
    dispatch(getProductDetail(productId)).then(
      setTimeout(() => {
        navigation.push(KEY_SCREENS.productDetail);
      }, 1500),
    );
  };

  const handleAddToCart = cartItem => {
    if (!cartItem.size || !cartItem.color) {
      Toast.show({
        position: 'top',
        topOffset: 60,
        type: 'error',
        text1: 'Please choose size/color',
        visibilityTime: 1500,
      });
    } else {
      dispatch(addCartList(cartItem));
      Toast.show({
        position: 'top',
        topOffset: 60,
        type: 'success',
        text1: 'Item Added To Cart',
        visibilityTime: 1500,
      });
    }
  };

  const handleChangeSelectedColor = color => {
    setSelectedColor(color);
  };

  const handleChangeShoeSize = size => {
    setCurrentShoeSize(size);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.containerItem} key={item.id}>
        <View style={styles.avatarImage}>
          <TouchableOpacity
            onPress={() => _actionUpdateSelectedProduct(item.id)}>
            <Image
              style={styles.img}
              source={{
                uri: item.image,
              }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textImageWrap}>
          <View></View>
          <TouchableOpacity
            onPress={() => _actionUpdateSelectedProduct(item.id)}>
            <Text style={styles.textImageName}>{item.name}</Text>
            <Text style={styles.textImagePrice}>$ {item.price}</Text>
          </TouchableOpacity>
          <CustomShoeColor
            colors={colors}
            currentColor={selectedColor}
            onChangeSelectedColor={handleChangeSelectedColor}
          />
          <CustomShoeSizeMemo
            selectedShoeSize={currentShoeSize}
            onChangeShoeSize={handleChangeShoeSize}
          />
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
              onPress={() => {
                const productCartItem = {
                  cartId: `${item.id}${selectedColor}${currentShoeSize}`,
                  name: item.name,
                  image: item.image,
                  color: selectedColor,
                  size: currentShoeSize,
                  price: item.price,
                  quantity: 1,
                };
                handleAddToCart(productCartItem);
              }}>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Add To Card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 10, marginTop: 5}}
              onPress={() =>
                ifExistsFavorite(item)
                  ? onRemoveFavorite(item)
                  : onFavorite(item)
              }>
              <Image
                style={styles.icon}
                source={
                  ifExistsFavorite(item) ? ICONS.iconLove : ICONS.iconUnlike
                }></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Category dataCategories={categoryData}></Category>
      <View style={styles.mainWrapperView}>
        {isLoading && (
          <ActivityIndicator size="large" color={theme.colors.loading} />
        )}
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
    marginTop: 5,
  },
  mainWrapperView: {
    paddingTop: 5,
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
    height: 270,
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

export default ProductList;
