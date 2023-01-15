import {createSlice} from '@reduxjs/toolkit';
import {getProductDetail} from './ProductDetailThunk';

const initialState = {
  productDetail: {},
  isLoading: false,
};

const productDetailSlice = createSlice({
  name: 'productDetailSlice',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getProductDetail.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload;
      });
  },
});

export default productDetailSlice.reducer;
