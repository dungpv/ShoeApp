import {StyleSheet} from 'react-native';
import {SIZES, theme} from '../../../../common/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightGray,
    padding: SIZES.padding,
  },
  rowDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon16: {
    width: 16,
    height: 16,
  },
  icon24: {
    width: 24,
    height: 24,
  },
  icon30: {
    width: 30,
    height: 30,
  },
  navBar__title: {
    fontSize: SIZES.fontSize24,
    fontWeight: SIZES.fontWeight,
    marginLeft: 35,
  },
  cartDetail: {
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 180,
  },
  cartDetail__image: {
    height: '100%',
    width: 150,
  },
  cartDetail__item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartDetail__item_name: {
    fontSize: SIZES.fontSize16,
    color: theme.colors.primary,
    fontWeight: SIZES.fontWeight,
  },
  cartDetail__item_sizeColor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: SIZES.padding / 2,
    width: '40%',
    backgroundColor: theme.colors.lightGray,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    marginTop: SIZES.margin8,
    marginBottom: SIZES.margin16 * 3,
    borderRadius: 40,
  },
  cartDetail__item_sizeColor_color: {
    height: 20,
    width: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: SIZES.fontWeight,
  },
  cartDetail__item_btn: {
    padding: SIZES.padding,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: SIZES.borderRadius,
    width: '50%',
  },
  cartDetail__item_delete: {
    alignSelf: 'flex-end',
    width: 75,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginVertical: 3,
  },
  checkout: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: SIZES.margin8,
  },
  checkout__btn: {
    width: 100,
    height: 40,
    backgroundColor: theme.colors.primary,
    marginLeft: SIZES.margin8,
    borderRadius: 5,
  },
  checkout__btn_text: {
    color: theme.colors.white,
    padding: SIZES.padding,
  },
});
