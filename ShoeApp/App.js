import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/context/store';
import StartScreen from './src/screens/StartScreen';
import Login from './src/screens/users/Login';
import SignUp from './src/screens/users/SignUp';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Products from './src/screens/products/Products';
import EditProfile from './src/screens/users/EditProfile';
import ChangePassword from './src/screens/users/ChangePassword';
import Logout from './src/screens/users/Logout';
import {KEY_SCREENS} from './src/common/Constant';
import Toast from 'react-native-toast-message';

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
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}
