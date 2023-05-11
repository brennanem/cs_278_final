import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Formals from './Formals';
import Aphi from './Aphi';
import ExplorePage from './ExplorePage';

function Explore({ navigation }) {
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

export default Explore;