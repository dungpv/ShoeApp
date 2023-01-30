import {createSlice} from '@reduxjs/toolkit';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {getCheckout} from './ShoppingCartThunk';

const initialState = {
  cart: [],
  isLoading: false,
  orderStatus: 0,
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCartSlice',
  initialState,
  reducers: {
    addCartList: (state, action) => {
      const index = state.cart.findIndex(cartItem => {
        return cartItem.cartId === action.payload.cartId;
      });
      if (index !== -1) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }

      state.cart = [...state.cart];
    },
    increaseItemQty: (state, action) => {
      const updateCart = [...state.cart];

      const index = updateCart.findIndex(cartItem => {
        return cartItem.cartId === action.payload;
      });

      if (index !== -1) {
        updateCart[index].quantity += 1;
      }

      state.cart = updateCart;
    },
    decreaseItemQty: (state, action) => {
      const updateCart = [...state.cart];

      const index = updateCart.findIndex(cartItem => {
        return cartItem.cartId === action.payload;
      });

      if (index !== -1) {
        if (updateCart[index].quantity > 1) {
          updateCart[index].quantity -= 1;
        } else {
          Toast.show({
            position: 'top',
            topOffset: 60,
            type: 'error',
            text1: 'Quantity is at least 1!',
            visibilityTime: 1500,
          });
        }
      }
      state.cart = updateCart;
    },
    removeCartItem: (state, action) => {
      const updateCart = [...state.cart];

      const index = updateCart.findIndex(
        cartItem => cartItem.cartId === action.payload,
      );

      if (index !== -1) {
        updateCart.splice(index, 1);
      }

      state.cart = updateCart;
    },
    resetCart: (state, action) => {
      state.cart = [];
      state.orderStatus = 0;
    },
    resetOrderStatus: (state, action) => {
      state.orderStatus = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCheckout.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCheckout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderStatus = action.payload;
      });
  },
});

export const {
  addCartList,
  increaseItemQty,
  decreaseItemQty,
  removeCartItem,
  resetCart,
  resetOrderStatus,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
