import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './users/login/LoginSlice';
import signUpReducer from './users/signup/SignUpSlice';
import editProfileReducer from './users/editprofile/EditProfileSlice';
import changePasswordReducer from './users/changepassword/ChangePasswordSlice';
import productListReducer from './products/productlist/ProductListSlice';
import productDetailReducer from './products/productDetail/ProductDetailSlice';
import favoriteProductReducer from './users/favorite/FavoriteProductSlice';
import shoppingCartReducer from './users/cart/ShoppingCartSlice';

export const store = configureStore({
  reducer: {
    loginReducer,
    signUpReducer,
    editProfileReducer,
    changePasswordReducer,
    productListReducer,
    productDetailReducer,
    favoriteProductReducer,
    shoppingCartReducer,
  },
});