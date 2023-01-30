import {configureStore} from '@reduxjs/toolkit';
import productDetailReducer from './products/productDetail/ProductDetailSlice';
import productListReducer from './products/productlist/ProductListSlice';
import shoppingCartReducer from './users/cart/ShoppingCartSlice';
<<<<<<< HEAD
import changePasswordReducer from './users/changepassword/ChangePasswordSlice';
import editProfileReducer from './users/editprofile/EditProfileSlice';
import favoriteProductReducer from './users/favorite/FavoriteProductSlice';
import loginReducer from './users/login/LoginSlice';
import signUpReducer from './users/signup/SignUpSlice';
=======
import userProfileReducer from './users/profile/ProfileSlice';
>>>>>>> 20cda6810254daef21d2f17d7f9a24f935a511c8

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
    userProfileReducer,
  },
});
