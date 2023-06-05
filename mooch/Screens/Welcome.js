import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TextInput, View, SafeAreaView, KeyboardAvoidingView,} from 'react-native';
import * as React from 'react';
import { Button } from 'react-native-elements';
import Home from './Home';

const staticImage = require("../icons/newlogo.png");

function Welcome({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
             <Image
             source = {staticImage}
             style = {{ marginBottom: '10%', alignSelf: 'center'}}
             />
           <Text>Welcome to mooch!</Text>
           <Button 
            buttonStyle = {styles.button}
            titleStyle= {styles.buttonText}
            title='agree' 
            onPress={() => navigation.navigate('Home')
            }/>
        </SafeAreaView>
    )
}

export default Welcome;



const styles = StyleSheet.create({
    input: {
      height: 40,
      width: '80%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 15,
      alignSelf: 'center',
    },
    button: {
      backgroundColor:  '#e8def9', 
      borderColor: '#f5dceb',
      marginBottom: 20,
      width: '50%',
      borderWidth: 0,
      borderRadius: 15,       
      alignSelf: 'center',
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
