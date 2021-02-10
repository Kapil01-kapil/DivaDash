import React from 'react';  
import {StyleSheet, Text, View} from 'react-native';  
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Map from '../screens/Map'; 
import MapSecond from '../screens/MapSecond';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Map from '../screens/Map'; 
import MapSecond from '../screens/MapSecond';

// const TabNavigator = createBottomTabNavigator(  
//     {  
//         Map:{  
//         screen:Map,  
//         navigationOptions:{  
            
//           tabBarLabel:'Home',  
//           tabBarIcon:({tintColor})=>(  
//               <Icon name="ios-home" color={tintColor} size={25}/>  
//           )
            
//         }  
//       },  
        
//         MyErning:{  
//         screen:Map,  
        
//         navigationOptions:{  
            
//           tabBarLabel:'Home',  
//           tabBarIcon:({tintColor})=>(  
//               <Icon name="ios-home" color={tintColor} size={25}/>  
//           )
            
//         }  
//       }, 
//       myProfile:{  
//         screen:Map,  
//         navigationOptions:{  
            
//           tabBarLabel:'Home',  
//           tabBarIcon:({tintColor})=>(  
//               <Icon name="ios-home" color={tintColor} size={25}/>  
//           )
            
//         }  
//       }, 

      

//       MySedual: {  
//         screen:Map,  
//         navigationOptions:{  
//           tabBarLabel:'Profile',  
//           tabBarIcon:({tintColor})=>(  
//               <Icon name="ios-person" color={tintColor} size={25}/>  
//           )  
//         }  
//       },  
//     },  
//     {  
//       initialRouteName: "Home"  
//     },  
// );  
// const styles = StyleSheet.create({  
//   container: {  
//     flex: 1,  
//     justifyContent: 'center',  
//     alignItems: 'center'  
//   },  
// });  


const AdminNavigator = createStackNavigator(
    {
      Map: Map,
      MapSecond: MapSecond,
    },
    {
      navigationOptions: {
        drawerIcon: (drawerConfig) => (
          <Ionicons
            name={Platform.OS === "android" ? "md-create" : "ios-create"}
            size={23}
            color={drawerConfig.tintColor}
          />
        ),
      },
      defaultNavigationOptions: defaultNavOptions,
    }
  );
  
export default createAppContainer(TabNavigator);  