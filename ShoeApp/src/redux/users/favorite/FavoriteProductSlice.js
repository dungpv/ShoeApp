import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  favoriteList: [],
};

const favoriteProductSlice = createSlice({
  name: 'favoriteProductSlice',
  initialState,
  reducers: {
    updatedFavoriteList: (state, action) => {
      state.favoriteList = action.payload;
    },
  },
});

export const {updatedFavoriteList} = favoriteProductSlice.actions;

export default favoriteProductSlice.reducer;
