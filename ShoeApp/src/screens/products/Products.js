import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import EditProfile from '../users/EditProfile';
import Header from '../../components/Header';
import Logout from '../users/Logout';
import ChangePassword from '../users/ChangePassword';

const Drawer = createDrawerNavigator();

export default function Products() {
  return (
    <Drawer.Navigator initialRouteName="ProductList">
      <Drawer.Screen
        name="ProductList"
        component={ProductList}
        options={({navigation}) => ({
          title: 'Marketplace',
          header: () => <Header title="Marketplace" navigation={navigation} />,
        })}
      />
      <Drawer.Screen name="ProductDetail" component={ProductDetail} />
      <Drawer.Screen name="Edit Profile" component={EditProfile} />
      <Drawer.Screen name="Change Password" component={ChangePassword} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
