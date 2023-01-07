import {StyleSheet} from 'react-native';
import {SIZES, theme} from '../../../../common/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon24: {
    width: 24,
    height: 24,
  },
  icon50: {
    width: 50,
    height: 50,
  },
  navBar__title: {
    fontSize: SIZES.fontSize16,
    fontWeight: SIZES.fontWeight,
  },
  productInfo__container: {
    alignItems: 'center',
  },
  productInfo__img: {
    width: 300,
    height: 300,
  },
  productInfo__name: {
    fontSize: SIZES.fontSize130,
    fontWeight: SIZES.fontWeight,
  },
  productInfo__priceColor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.padding * 2,
  },
  productInfo__priceColor_price: {
    fontSize: SIZES.fontSize24,
    fontWeight: SIZES.fontWeight,
  },
  productInfo__btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },

  productInfo__btnSize: {
    height: 40,
    width: 40,
    borderRadius: 25,
    borderWidth: 1,
    marginHorizontal: 3,
    marginVertical: SIZES.padding,
  },
  productInfo__btnSize_text: {
    textAlign: 'center',
    fontWeight: SIZES.fontWeight,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding,
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  addToCart__btnAdd: {
    backgroundColor: theme.colors.primary,
    width: '80%',
    height: 50,
  },
  addToCart__btnAdd_text: {
    fontSize: SIZES.fontSize16,
    color: theme.colors.white,
    textAlign: 'center',
    fontWeight: SIZES.fontWeight,
    marginTop: SIZES.padding,
  },
});