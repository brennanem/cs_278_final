import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DMs from './DMs';
import Profile from './Profile';
import Explore from './Explore';

const Tab = createMaterialBottomTabNavigator();

function Home({ navigation }) {
    return(
        <Tab.Navigator initialRouteName='Explore'>
            <Tab.Screen name="DMs" component={DMs} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default Home;