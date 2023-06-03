import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Messages from './Messages';

function DMpage({ navigation }) {
    const Drawer = createDrawerNavigator();
    return(
        < KeyboardAvoidingView 
        behavior="padding"
        style={{flex:1}}>
        <Messages />
        </KeyboardAvoidingView>
    )
}

export default DMpage;