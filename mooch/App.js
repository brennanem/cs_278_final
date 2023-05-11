import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Landing from './Screens/Landing';
import CreateAccount from './Screens/CreateAccount';
//import Explore from './Screens/Explore';

const Stack = createNativeStackNavigator();


export default function App() {
  //const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Landing'>
     <Stack.Screen
          name='Landing'
          component={Landing}
        /> 
        <Stack.Screen 
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='Home'
          component={Home}
        /> 
        <Stack.Screen
          name='Create Account'
          component={CreateAccount}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
