import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider, useDispatch} from 'react-redux';
import StartScreen from './src/screens/StartScreen';
import Login from './src/screens/users/Login';
import SignUp from './src/screens/users/SignUp';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Products from './src/screens/products/Products';
import EditProfile from './src/screens/users/EditProfile';
import ProductDetail from './src/screens/products/ProductDetail/ProductDetail';
import {store} from './src/redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={Login} />
          <Stack.Screen name="RegisterScreen" component={SignUp} />
          <Stack.Screen name="EditProfileScreen" component={EditProfile} />
          <Stack.Screen name="ProductsScreen" component={Products} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
