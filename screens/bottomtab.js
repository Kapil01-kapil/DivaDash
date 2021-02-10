import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './home';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';
import Upcoming from './upcoming';
import Pending from './pending_order';
import Cancelled from './cancelled_order';
import Delivered from './delivered_order';
import Earning from './earning';
import Profile from './profile';
import Track from './track';
import Rating from './rating';
import Schedule from './schedule';


const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Schedule" component={Schedule} options={{}} />
            <Tab.Screen name="Account" component={Profile} />
            <Tab.Screen name="Earning" component={Earning} />
            {/* <Tab.Screen name="Rating" component={Rating} /> */}
        </Tab.Navigator>
    );
}

export default function BottomTab() {
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
            <HomeStack.Screen name="Track Address" component={Track} />
                <HomeStack.Screen name="home" component={Home} options={{headerShown: false}} />
                <HomeStack.Screen name="login" component={Login} options={{headerShown: false}} />
                <HomeStack.Screen name="register" component={Register} options={{headerShown: false}} />
                <HomeStack.Screen name="dashboard" component={HomeStackScreen} />
                <HomeStack.Screen name="Upcoming Order" component={Upcoming} />
                <HomeStack.Screen name="Pending Order" component={Pending} />
                <HomeStack.Screen name="Cancelled Order" component={Cancelled} />
                <HomeStack.Screen name="Delivered Order" component={Delivered} />
                <HomeStack.Screen name="My Earning" component={Earning} />
                <HomeStack.Screen name="Profile" component={Profile} />
                
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}