import {createSlice} from '@reduxjs/toolkit';
import {getProduct} from './ProductListThunk';

const initialState = {
  productData: [],
  isLoading: false,
};

const productListSlice = createSlice({
  name: 'productListSlice',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getProduct.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productData = action.payload;
      });
  },
});

export default productListSlice.reducer;
