import {createSlice} from '@reduxjs/toolkit';
import {getUserProfile} from './ProfileThunk';

const initialState = {
  isLoading: false,
  userProfile: [],
};

const userProfileSlice = createSlice({
  name: 'userProfileSlice',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getUserProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload;
      });
  },
});

export default userProfileSlice.reducer;
