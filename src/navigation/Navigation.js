import React  from 'react';
import StackNavigation from './StackNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../commonComponents/sideMenu/SideMenu';
const Drawer = createDrawerNavigator();
export default function Navigation() {
  return (
    <Drawer.Navigator
     drawerContent={ props => <SideMenu {...props} /> }>
    <Drawer.Screen name="StackNavigation" component={StackNavigation} />
  </Drawer.Navigator>
  )
}