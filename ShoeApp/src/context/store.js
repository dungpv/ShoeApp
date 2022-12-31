import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './users/login/LoginSlice';
import signUpReducer from './users/signup/SignUpSlice';

export const store = configureStore({
  reducer: {
    loginReducer,
    signUpReducer,
  },
});
