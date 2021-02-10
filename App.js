/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screens/home';
import Login from './screens/login';
import Register from './screens/register';
import Dashboard from './screens/dashboard';
import Upcoming from './screens/upcoming';
import Pending from './screens/pending_order';
import Cancelled from './screens/cancelled_order';
import Delivered from './screens/delivered_order';
import Earning from './screens/earning';
import Profile from './screens/profile';
import Track from './screens/track'
import BottomTab from './screens/bottomtab';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <BottomTab/>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="dashboard" component={Dashboard} />
          <Stack.Screen name="Upcoming Order" component={Upcoming} />
          <Stack.Screen name="Pending Order" component={Pending} />
          <Stack.Screen name="Cancelled Order" component={Cancelled} />
          <Stack.Screen name="Delivered Order" component={Delivered} />
          <Stack.Screen name="My Earning" component={Earning} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Track Address" component={Track} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
};

export default App;
