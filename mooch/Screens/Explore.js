import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Formals from './formals';
import Aphi from './aphi';
import ExplorePage from './ExplorePage';
import Upload from './Upload';

function Explore({ navigation }) {
    const Drawer = createDrawerNavigator();
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator 
                screenOptions={
                    {drawerActiveBackgroundColor: "#f3eef6"}}>
            <Drawer.Screen name="Explore" component={ExplorePage} />
            <Drawer.Screen name="Aphi" component={Aphi} />
            <Drawer.Screen name="Formals" component={Formals} />
            <Drawer.Screen name="Upload" component={Upload} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}

export default Explore;