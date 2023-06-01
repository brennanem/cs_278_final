import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TextInput, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import * as React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // IMPORTANT: this ensures that getAuth is called before we use auth in this file
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const staticImage = require("./newlogo.png");


function CreateAccount({ route, navigation }) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
    return(
        <View style={styles.background}>
             <Image
             source = {staticImage}
             style = {{ marginTop: 20, marginBottom: 20, alignSelf: 'center'}}
             />
            <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={onChangeEmail}
            value={email}
            />
            {/* <TextInput
            style={styles.input}
            // onChangeText={onChangeUsername}  
            // value={username}
            placeholder="username"
            /> */}
             <TextInput
            style={styles.input}
            placeholder="password"
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={true}
          />
            <Button
            buttonStyle = {styles.button}
            titleStyle = {styles.buttonText}
            title='create account' 
            onPress={() => authenticate(email, password, navigation)}
            />
        </View>
    )
}

export default CreateAccount;


// https://firebase.google.com/docs/auth/web/start#sign_up_new_users
// consider having a firebase.js?
function authenticate(email, password, navigation) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(`Created new user with email ${email}!`);
      navigation.navigate('Home', { userId: user.uid });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`errorCode ${errorCode} and errorMessage ${errorMessage}`);
      // ..
    });
}


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
  height: '100%',
  backgroundColor: '#f7f4fd',
  justifyContent: 'center'
 }
});