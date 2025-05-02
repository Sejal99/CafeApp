import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddToCart from '../../screens/cart';
import Menu from '../../screens/menu';
import Favorite from '../../screens/favorite';
import {Image} from 'react-native';
import {Images} from '../../assets';
import UserListScreen from '../../screens/home';

const Tab = createBottomTabNavigator();

function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 14},
        tabBarStyle: {
          backgroundColor: '#6E260E',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={UserListScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.home}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F5DEB3' : '#ffffff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.menu}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F5DEB3' : '#ffffff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.heart}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F5DEB3' : '#ffffff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={AddToCart}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.cartIcon}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F5DEB3' : '#ffffff',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomStack;
