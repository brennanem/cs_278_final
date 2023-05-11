import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Login({ navigation }) {
    return(
        <View>
            <Text>Hi</Text>
            <Button typeof title='login' onPress={() =>
            navigation.navigate('Home')
            }>
            </Button>
        </View>
    )
}

export default Login;


//<View style={styles.container}>
     //     <Button typeof title='login'></Button>
     //     <Button typeof title='create account'></Button>
        {/* <Drawer.Navigator>
          <Drawer.Screen name='My Friends' component={MyFriends} />
          <Drawer.Screen name='Profile' component={Profile} />
        </Drawer.Navigator> */}

    //      <StatusBar style="auto" />
    //    </View>