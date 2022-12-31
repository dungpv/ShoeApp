import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/screens/users/Login';
import {Provider} from 'react-redux';
import {store} from './src/context/store';
import StartScreen from './src/screens/StartScreen';
import LoginTemp from './src/screens/users/LoginTemp';
import SignUp from './src/screens/users/SignUp';
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
          <Stack.Screen name="RegisterScreen" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
