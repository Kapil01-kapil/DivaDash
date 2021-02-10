import React from 'react';  
import {StyleSheet, Text, View} from 'react-native';  
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Map from './NavigationRoutes'; 


  
const TabNavigator = createBottomTabNavigator(  
    {  
        Map:{  
        screen:Map,  
        navigationOptions:{  
            
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-home" color={tintColor} size={25}/>  
          )
            
        }  
      },  
        
        MyErning:{  
        screen:Map,  
        
        navigationOptions:{  
            
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-home" color={tintColor} size={25}/>  
          )
            
        }  
      }, 
      myProfile:{  
        screen:Map,  
        navigationOptions:{  
            
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-home" color={tintColor} size={25}/>  
          )
            
        }  
      }, 

      

      MySedual: {  
        screen:Map,  
        navigationOptions:{  
          tabBarLabel:'Profile',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-person" color={tintColor} size={25}/>  
          )  
        }  
      },  
    },  
    {  
      initialRouteName: "Home"  
    },  
);  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center'  
  },  
});  
  
export default createAppContainer(TabNavigator);  