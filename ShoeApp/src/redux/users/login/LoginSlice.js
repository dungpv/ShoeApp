import {createSlice} from '@reduxjs/toolkit';
import {KEY_SCREENS, KEY_STORAGE} from '../../../common/Constant';
import {saveStorage} from '../../../common/LocalStorage';
import {login} from './LoginThunk';

const initialState = {
  isLoading: false,
  accessToken: '',
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;

        state.accessToken = action.payload;
        // lay duoc token va luu lai
        saveStorage(KEY_STORAGE.token, action.payload);
      });
  },
});

export default loginSlice.reducer;
