import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Image, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import * as React from 'react';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import { useState} from 'react';
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { BottomNavigation } from 'react-native-paper';

const {Firestore} = require('@google-cloud/firestore');
const firestore = new Firestore();
// async function quickstart() {
//   // Obtain a document reference.
//   const document = firestore.doc('posts/intro-to-firestore');

//   // Enter new data into the document.
//   await document.set({
//     title: 'Welcome to Firestore',
//     body: 'Hello World',
//   });
//   console.log('Entered new data into the document');

//   // Update an existing document.
//   await document.update({
//     body: 'My first Firestore app',
//   });
//   console.log('Updated an existing document');

//   // Read the document.
//   const doc = await document.get();
//   console.log('Read the document');

//   // Delete the document.
//   await document.delete();
//   console.log('Deleted the document');
// }
// quickstart();

function Upload({ navigation }) {
    // image picker
    const [image, setImage] = useState(null);

    const [selected, setSelected] = React.useState([]); //tags
    const [size, setSize] = React.useState(null);  //size
    const [brand, setBrand] = React.useState(null); //brand
    // cleaning

    // let collectionRef = firestore.collection('uploads');
    // const numPosts = collection.count();
    // let postTitle = 'post'.concat(numPosts.toString())
    
    // collectionRef.add(
    //   { id: postTitle,
    //   }
    // ).then(documentReference => {
    //   console.log(`Added document with name: ${documentReference.id}`);
    // });
  
    const data = [
        {key:'1', value:'tops'},
        {key:'2', value:'bottoms'},
        {key:'3', value:'dresses'},
        {key:'4', value:'accessories'},
        {key:'5', value:'sets'},
        {key:'6', value:'shoes'},
    ]
  
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
      < KeyboardAvoidingView 
      behavior="padding"
      style={styles.background}>
          <ScrollView Vertical={true} showsVerticalScrollIndicator={false} style = {{ width: '100%'}}>
            <Button 
            buttonStyle= {styles.button}
            titleStyle={styles.buttonText}
            title="upload an image from camera roll" onPress={pickImage} />
         {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, alignSelf: 'center', marginBottom:20}} />}
         <View style={{width: '100%', justifyContent: 'center', alignItems : 'center'}}>
         <MultipleSelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save="value"
                label="Categories"
                placeholder='select clothing type'
            />
         </View>
          <TextInput
          style={styles.input}
          placeholder="item brand"
          />
          <TextInput
          style={styles.input}
          placeholder="item size"
        />
        <TextInput
          style={styles.input}
          placeholder="cleaning preference"
        />

          <Button
          buttonStyle= {styles.button}
          titleStyle={styles.buttonText}
          title='upload' onPress={() =>
          navigation.navigate('Explore')
          }/>

         <Button
          buttonStyle= {styles.button}
          titleStyle={styles.buttonText}
          title='cancel' onPress={() =>
          navigation.navigate('Explore')
          }/>
          </ScrollView>
          </KeyboardAvoidingView>
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