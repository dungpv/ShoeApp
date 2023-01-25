import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCartSlice',
  initialState,
  reducers: {
    addCartList: (state, action) => {
      const index = state.cart.findIndex(
        cartItem => cartItem.cartId === action.payload.cartId,
      );
      if (index !== -1) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }

      state.cart = [...state.cart];
    },
  },
});

export const {addCartItem, addCartList} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
