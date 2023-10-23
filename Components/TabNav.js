import React from "react";
import {StyleSheet, Text, View,ToastAndroid} from "react-native";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import About from './About';
import ViewDetail from "./ViewDetail";
import Form from "./Form";
const Tab = createMaterialBottomTabNavigator();

const TabNav = () => {
    const Tabs=[
        {name:"About", component: About, icon: "gift"},
        {name:"Form",component: Form,icon:"home"},
        {name:"ViewDetails",component:ViewDetail,icon:"post"}
    ]
    return (
        <Tab.Navigator
        initialRouteName="ViewDetails"
        shifting={true}
        sceneAnimationType="shifting"
        sceneAnimationEnabled={false}
        activeColor="#007CC2"
        barStyle={{
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "lightgray",
        }}
      >
        {Tabs.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarLabel: tab.name,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name={tab.icon} color={color} size={26} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
  
      );
}
 
export default TabNav;