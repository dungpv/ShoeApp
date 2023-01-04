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
import React from 'react';
import {ICONS} from '../../common/Constant';

export default function ProductList() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const shoesArray = [
    {
      id: 1,
      name: 'Adidas Prophere',
      alias: 'adidas-prophere',
      price: 350.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 995,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[2,3,5]',
      feature: true,
      image: 'https://shop.cyberlearn.vn/images/adidas-prophere.png',
    },
    {
      id: 2,
      name: 'Adidas Prophere Black White',
      alias: 'adidas-prophere-black-white',
      price: 450.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 990,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[1,4,6]',
      feature: false,
      image:
        'https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png',
    },
    {
      id: 3,
      name: 'Adidas Prophere Customize',
      alias: 'adidas-prophere-customize',
      price: 375.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 415,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[4,5,7]',
      feature: true,
      image: 'https://shop.cyberlearn.vn/images/adidas-prophere-customize.png',
    },
    {
      id: 4,
      name: 'Adidas Super Star Red',
      alias: 'adidas-super-star-red',
      price: 465.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 542,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[7,8,6]',
      feature: false,
      image: 'http://svcy3.myclass.vn/images/adidas-super-star-red.png',
    },
    {
      id: 5,
      name: 'Adidas Swift Run',
      alias: 'adidas-swift-run',
      price: 550.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 674,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[2,3,8]',
      feature: true,
      image: 'https://shop.cyberlearn.vn/images/adidas-swift-run.png',
    },
    {
      id: 6,
      name: 'Adidas Tenisky Super Star',
      alias: 'adidas-tenisky-super-star',
      price: 250.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 456,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[4,2,3]',
      feature: false,
      image: 'https://shop.cyberlearn.vn/images/adidas-tenisky-super-star.png',
    },
    {
      id: 7,
      name: 'Adidas Ultraboost 4',
      alias: 'adidas-ultraboost-4',
      price: 450.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 854,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[8,2,1]',
      feature: true,
      image: 'https://shop.cyberlearn.vn/images/adidas-ultraboost-4.png',
    },
    {
      id: 8,
      name: 'Adidas Yeezy 350',
      alias: 'adidas-yeezy-350',
      price: 750.0,
      description:
        'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
      size: '[36,37,38,39,40,41,42]',
      shortDescription:
        'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
      quantity: 524,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: '[1,4,6]',
      feature: false,
      image: 'https://shop.cyberlearn.vn/images/adidas-yeezy-350.png',
    },
  ];

  const renderItem = item => {
    return (
      <View style={styles.containerItem} key={item.id}>
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
              onPress={() => {}}>
              <Image style={styles.icon} source={ICONS.iconLove}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapperView}>
        <FlatList
          data={shoesArray}
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
