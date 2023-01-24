import {createSlice} from '@reduxjs/toolkit';
import {
  getProduct,
  getAllCategory,
  getProductByCategoryId,
} from './ProductListThunk';

const initialState = {
  productData: {},
  categoryData: {},
  isLoading: false,
  categorySelected: '',
};

const productListSlice = createSlice({
  name: 'productListSlice',
  initialState,
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCategory.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryData = action.payload;
      })
      .addCase(getProduct.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productData = action.payload;
      })
      .addCase(getProductByCategoryId.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getProductByCategoryId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productData = action.payload;
      });
  },
});
export const {setCategorySelected, setIsLoading} = productListSlice.actions;
export default productListSlice.reducer;
