import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useDispatch, useSelector} from 'react-redux';
import {
  resetCart,
  resetOrderStatus,
} from '../../../../redux/users/cart/ShoppingCartSlice';
import {getCheckout} from '../../../../redux/users/cart/ShoppingCartThunk';
import {styles} from '../styles/Styles';

export default function CheckOut({cartData, email}) {
  const dispatch = useDispatch();

  const {orderStatus} = useSelector(state => state.shoppingCartReducer);

  useEffect(() => {
    if (orderStatus === 200) {
      Toast.show({
        position: 'top',
        topOffset: 60,
        type: 'success',
        text1: 'Successfully Check Out!',
        visibilityTime: 2500,
      });
      dispatch(resetCart());
    } else if (orderStatus !== 0) {
      Toast.show({
        position: 'top',
        topOffset: 60,
        type: 'error',
        text1: 'Check Out Failed! Please try again',
        visibilityTime: 1500,
      });
      dispatch(resetOrderStatus());
    }
  }, [orderStatus]);

  const cartSubtotal = cartData.reduce((subtotal, cartItem) => {
    return (subtotal += cartItem.price * cartItem.quantity);
  }, 0);

  const totalItem = cartData.reduce((total, cartItem) => {
    return (total += cartItem.quantity);
  }, 0);

  const handleCheckOut = () => {
    if (cartData.length === 0) {
      Toast.show({
        position: 'top',
        topOffset: 60,
        type: 'error',
        text1: 'Please add item to cart',
        visibilityTime: 1500,
      });
    } else {
      dispatch(getCheckout({cartData, email}));
    }
  };

  return (
    <View style={styles.checkout}>
      <Text style={styles.checkout__subtotal}>${cartSubtotal}</Text>
      <View style={styles.checkout__btn}>
        <TouchableOpacity
          onPress={() => {
            handleCheckOut();
          }}>
          <Text style={[styles.text, styles.checkout__btn_text]}>
            CHECKOUT({totalItem})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
