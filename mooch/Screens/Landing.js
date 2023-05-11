import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as React from 'react';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Landing({ navigation }) {
    return(
        <SafeAreaView>
           <Button typeof title='login' onPress={() =>
            navigation.navigate('Login')
            }>
           </Button>
           <Button typeof title='sign up' onPress={() =>
            navigation.navigate('Create Account')
            }>
           </Button>
        </SafeAreaView>
    )
}

export default Landing;