import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Messages from './Messages';

function DMpage({ navigation }) {
    const Drawer = createDrawerNavigator();
    return(
        <Messages />
    )
}

export default DMpage;