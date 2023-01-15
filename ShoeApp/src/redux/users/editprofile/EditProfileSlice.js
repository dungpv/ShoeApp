import {createSlice} from '@reduxjs/toolkit';
import {editProfile} from './EditProfileThunk';

const initialState = {
  isLoading: false,
  isEditProfileSuccess: false,
};

const editProfileSlice = createSlice({
  name: 'editProfileSlice',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(editProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      });
  },
});

export default editProfileSlice.reducer;
