import {createSlice} from '@reduxjs/toolkit';
import {
  getProductFavorite,
  likeProducts,
  unLikeProducts,
} from './FavoriteProductThunk';

const initialState = {
  isLoading: false,
  favoriteList: [],
  like: false,
  unlike: false,
};

const favoriteProductSlice = createSlice({
  name: 'favoriteProductSlice',
  initialState,
  extraReducers: builder => {
    builder.addCase(getProductFavorite.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(getProductFavorite.fulfilled, (state, action) => {
      state.isLoading = false;
      state.favoriteList = action.payload;
      console.log(action.payload);
    });
    builder.addCase(likeProducts.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(likeProducts.fulfilled, (state, action) => {
      state.isLoading = true;
      state.like = !state.like;
    });
    builder.addCase(unLikeProducts.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(unLikeProducts.fulfilled, (state, action) => {
      state.isLoading = true;
      state.unlike = !state.unlike;
    });
  },
});

export default favoriteProductSlice.reducer;
