import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import * as React from 'react';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function CreateAccount({ navigation }) {
    return(
        <View>
            <Text>create account</Text>
            <TextInput
            style={styles.input}
            // onChangeText={onChangeEmail} #use this when we build backend 
            // value={email}
            placeholder="email"
            />
            <TextInput
            style={styles.input}
            // onChangeText={onChangeUsername}  
            // value={username}
            placeholder="username"
            />
             <TextInput
            style={styles.input}
            // onChangeText={onChangePassword}
            // value={password}
            placeholder="password"
            secureTextEntry={true}
          />
            <Button typeof title='create account' onPress={() =>
            navigation.navigate('Home')
            }>
            </Button>
        </View>
    )
}

export default CreateAccount;



const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
