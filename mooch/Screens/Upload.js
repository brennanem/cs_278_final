import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { Button } from 'react-native-elements';
import * as React from 'react';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import { useState} from 'react';

function Upload({ navigation }) {
    // image picker
    const [image, setImage] = useState(null);
  
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
    return(
        <View style={styles.background}>
            <Button 
            buttonStyle= {styles.button}
            titleStyle={styles.buttonText}
            title="upload an image from camera roll" onPress={pickImage} />
         {image && <Image source={{ uri: image }} style={{ width: 200, height: 200}} />}
          <TextInput
          style={styles.input}
          placeholder="item brand"
          />
          <TextInput
          style={styles.input}
          placeholder="item size"
        />
          <Button
          buttonStyle= {styles.button}
          titleStyle={styles.buttonText}
          title='upload' onPress={() =>
          navigation.navigate('Explore')
          }/>
        </View>
  )
}



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
    justifyContent: 'center',
    alignItems: 'center',
   }
  });


export default Upload;