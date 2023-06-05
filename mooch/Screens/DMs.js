import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DMpage from './DMpage';
import DMing from './DMing';
import { db } from "../firebase/firebaseConfig";

// TO-DO: CHANGE DRAWERS TO DM CONVOS (AKA PPLS NAMES)

function DMs({ navigation }) {

    // // adding backend functionality 
    // const messagesRef = db.collection('messages');
    // const query = messagesRef.orderBy('createdAt').limit(25);

    // // listen to data using react hook
    // const [messages] = useCollectionData(query, {idfield: 'id'});

    const Drawer = createDrawerNavigator();
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator>
            <Drawer.Screen name="Kathryn" component={DMing} />
            <Drawer.Screen name="Christine" component={DMing} />
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