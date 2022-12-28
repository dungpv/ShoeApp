import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/screens/login/Login';
import {Provider} from 'react-redux';
import {store} from './src/context/store';
import StartScreen from './src/screens/login/StartScreen';
import LoginTemp from './src/screens/login/LoginTemp';
import SignUpTemp from './src/screens/login/SignUpTemp';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

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
          <Stack.Screen name="LoginScreen" component={LoginTemp} />
          <Stack.Screen name="RegisterScreen" component={SignUpTemp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
