import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import * as React from 'react';
import { Button } from 'react-native-elements';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Login({ navigation }) {
    return(
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <TextInput
            style={styles.input1}
            // onChangeText={onChangeEmail} #use this when we build backend 
            // value={email}
            placeholder="email"
            />
            <TextInput
            style={styles.input}
            // onChangeText={onChangePassword}
            // value={password}
            placeholder="password"
            secureTextEntry={true}
          />
            <Button
            buttonStyle= {styles.button}
            titleStyle={styles.buttonText}
            title='login' onPress={() =>
            navigation.navigate('Home')
            }/>
        </View>
    )
}

export default Login;



const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: '80%',
      alignSelf: 'center',
    },
    input1: {
      marginTop: '60%',
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: '80%',
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
      marginTop: '10%',
   },
   buttonText: {
    color:'#5A5A5A', 
   },
   background: {
      backgroundColor: 'white' //not sure about this
   }
  });


//<View style={styles.container}>
     //     <Button typeof title='login'></Button>
     //     <Button typeof title='create account'></Button>
        {/* <Drawer.Navigator>
          <Drawer.Screen name='My Friends' component={MyFriends} />
          <Drawer.Screen name='Profile' component={Profile} />
        </Drawer.Navigator> */}

    //      <StatusBar style="auto" />
    //    </View>