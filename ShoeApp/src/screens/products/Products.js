import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomSidebarMenu from '../../components/CustomSidebarMenu';
import Header from '../../components/Header';
import ChangePassword from '../users/ChangePassword';
import EditProfile from '../users/EditProfile';
import Logout from '../users/Logout';
import ProductList from './ProductList';
import ProductFavorite from '../users/ProductFavorite/ProductFavorite';

const Drawer = createDrawerNavigator();

export default function Products() {
  return (
    <Drawer.Navigator
      initialRouteName="ProductList"
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="ProductList"
        component={ProductList}
        options={({navigation}) => ({
          title: 'Marketplace',
          header: () => <Header title="Marketplace" navigation={navigation} />,
        })}
      />
      <Drawer.Screen name="Product Favorite" component={ProductFavorite} />
      <Drawer.Screen name="Edit Profile" component={EditProfile} />
      <Drawer.Screen name="Change Password" component={ChangePassword} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
