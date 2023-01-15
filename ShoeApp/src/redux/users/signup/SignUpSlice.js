import {createSlice} from '@reduxjs/toolkit';
import {signUp} from './SignUpThunk';

const initialState = {
  isLoading: false,
  isSignUpSuccess: false,
};

const signUpSlice = createSlice({
  name: 'signUpSlice',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      });
  },
});

export default signUpSlice.reducer;
