import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Formals from './Formals';
import Aphi from './Aphi';
import ExplorePage from './ExplorePage';

// TO-DO: CHANGE DRAWERS TO DM CONVOS (AKA PPLS NAMES)

function DMs({ navigation }) {
    const Drawer = createDrawerNavigator();
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator>
            <Drawer.Screen name="explore" component={ExplorePage} />
            <Drawer.Screen name="aphi" component={Aphi} />
            <Drawer.Screen name="formals" component={Formals} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}

export default DMs;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 15
    },
    button: {
      backgroundColor:  '#e8def9', 
      borderColor: '#f5dceb',
      marginBottom: 20,
      borderWidth: 0,
      borderRadius: 15,       
      justifyContent: 'center',
      margin: 12,
      padding: 10,
   },
   buttonText: {
    color:'#5A5A5A', 
   },
  background: {
    paddingTop: 50,
    height: '100%',
    backgroundColor: 'white',
   }
  });