import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import * as React from 'react';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Image } from 'react-native'

const staticImage = require("./mooch_logo.png");

function Landing({ navigation }) {
    return(
        <SafeAreaView>
             <Image
             source = {staticImage}
             style = {{ marginTop: 20, marginBottom: 20, alignSelf: 'center'}}
             />
           <Button 
            title='login'
            buttonStyle={styles.button}
            onPress={() => navigation.navigate('Login')}
            />
           <Button 
            buttonStyle = {styles.button}
            title='sign up' 
            onPress={() => navigation.navigate('Create Account')
            }/>
        </SafeAreaView>
    )
}

export default Landing;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffb6c1',
        borderColor: '#f5dceb',
        marginBottom: 20,
        borderWidth: 0,
        borderRadius: 15,       
        justifyContent: 'center'
     }
    }
)