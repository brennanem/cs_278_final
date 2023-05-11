import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import formals from './formals';
import aphi from './aphi';

function Explore({ navigation }) {
    const Drawer = createDrawerNavigator();
    return(
    // <View>
    //     <Text>explore</Text>
    // </View>
        <NavigationContainer independent={true}>
            <Drawer.Navigator>
            <Drawer.Screen name="aphi" component={aphi} />
            <Drawer.Screen name="formals" component={formals} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}

export default Explore;