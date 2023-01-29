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
  navBar__cartTotal: {
    color: 'red',
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: '600',
  },

  iconsRight: {
    position: 'absolute',
    right: 10,
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
    fontSize: SIZES.fontSize24,
    fontWeight: SIZES.fontWeight,
    textAlign: 'center',
    letterSpacing: 1,
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
    fontWeight: SIZES.fontWeight700,
    color: theme.colors.primary,
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
    color: theme.colors.orange,
  },
  productInfo__colors: {
    justifyContent: 'flex-end',
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productInfo__btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  productInfo__btnColor_selected: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  productInfo__description: {
    fontSize: SIZES.fontSize24,
    fontWeight: SIZES.fontWeight700,
    color: theme.colors.secondary,
    marginBottom: SIZES.padding,
  },
  productInfo__btnSize: {
    height: 40,
    width: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.colors.primary,
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
  productInfo__btnSize_selected: {
    backgroundColor: theme.colors.primary,
  },
  productInfo__btnSize_selectedText: {
    color: theme.colors.white,
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  addToCart__btnAdd: {
    backgroundColor: theme.colors.primary,
    flex: 1,
    height: 50,
    marginRight: SIZES.padding,
    marginLeft: SIZES.padding,
    borderRadius: 10,
  },
  addToCart__btnAdd_text: {
    fontSize: SIZES.fontSize16,
    color: theme.colors.white,
    textAlign: 'center',
    fontWeight: SIZES.fontWeight,
    marginTop: SIZES.padding + 5,
  },
});
