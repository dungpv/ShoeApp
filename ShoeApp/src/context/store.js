import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './users/login/LoginSlice';
import signUpReducer from './users/signup/SignUpSlice';
import editProfileReducer from './users/editprofile/EditProfileSlice';
import changePasswordReducer from './users/changepassword/ChangePasswordSlice';
import productListReducer from './products/productlist/ProductListSlice';

export const store = configureStore({
  reducer: {
    loginReducer,
    signUpReducer,
    editProfileReducer,
    changePasswordReducer,
    productListReducer,
  },
});
