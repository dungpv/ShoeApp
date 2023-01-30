import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {KEY_SCREENS} from './src/common/Constant';
import {store} from './src/redux/store';
import ProductDetail from './src/screens/products/ProductDetail/ProductDetail';
import Products from './src/screens/products/Products';
import StartScreen from './src/screens/StartScreen';
import ChangePassword from './src/screens/users/ChangePassword';
import EditProfile from './src/screens/users/EditProfile';
import Login from './src/screens/users/Login';
import Logout from './src/screens/users/Logout';
import ProductCart from './src/screens/users/ProductCart/ProductCart';
import ProductFavorite from './src/screens/users/ProductFavorite/ProductFavorite';
import SignUp from './src/screens/users/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={KEY_SCREENS.startScreen}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={KEY_SCREENS.startScreen}
            component={StartScreen}
          />
          <Stack.Screen name={KEY_SCREENS.loginScreen} component={Login} />
          <Stack.Screen name={KEY_SCREENS.registerScreen} component={SignUp} />
          <Stack.Screen
            name={KEY_SCREENS.editProfileScreen}
            component={EditProfile}
          />
          <Stack.Screen
            name={KEY_SCREENS.changePasswordScreen}
            component={ChangePassword}
          />
          <Stack.Screen name={KEY_SCREENS.logoutScreen} component={Logout} />
          <Stack.Screen
            name={KEY_SCREENS.productsScreen}
            component={Products}
          />

          <Stack.Screen
            name={KEY_SCREENS.productDetail}
            component={ProductDetail}
          />

          <Stack.Screen
            name={KEY_SCREENS.productCart}
            component={ProductCart}
          />

          <Stack.Screen
            name={KEY_SCREENS.productFavorite}
            component={ProductFavorite}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}
