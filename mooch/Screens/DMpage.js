import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Messages from './Messages';
import { db } from "../firebase/firebaseConfig";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { GiftedChat } from 'react-native-gifted-chat';

function DMpage({ navigation }) {

    // adding backend functionality 
    // const messagesRef = db.collection('messages');
    // const query = messagesRef.orderBy('createdAt').limit(25);

    // listen to data using react hook
    // const [messages] = useCollectionData(query, {idfield: 'id'});

    const Drawer = createDrawerNavigator();
    return(
        < KeyboardAvoidingView 
        behavior="padding"
        style={{flex:1}}>
        
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}

        </KeyboardAvoidingView>
    )
}

function ChatMessage(props) {
    const { text, uid } = props.message;

    //const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';

    return <p>{text}</p>
}

export default DMpage;