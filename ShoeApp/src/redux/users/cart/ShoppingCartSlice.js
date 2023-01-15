import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  cartItem: {},
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCartSlice',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartItem = action.payload;
    },
  },
});

export const {addCartItem} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
