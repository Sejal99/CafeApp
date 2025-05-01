import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserListScreen from '../../screens/Users';
import AddToCart from '../../screens/cart';
import Menu from '../../screens/menu';
import Favorite from '../../screens/favorite';
import {Image} from 'react-native';
import {Images} from '../../assets';

const Tab = createBottomTabNavigator();

function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#c67c4e',
        tabBarLabelStyle: {fontSize: 12},
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
                tintColor: focused ? '#c67c4e' : undefined,
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
                tintColor: focused ? '#c67c4e' : undefined,
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
                tintColor: focused ? '#c67c4e' : undefined,
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
                tintColor: focused ? '#c67c4e' : undefined,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomStack;
