import {createSlice} from '@reduxjs/toolkit';
import {changePassword} from './ChangePasswordThunk';

const initialState = {
  isLoading: false,
  isChangePasswordSuccess: false,
};

const changePasswordSlice = createSlice({
  name: 'changePasswordSlice',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(changePassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      });
  },
});

export default changePasswordSlice.reducer;
