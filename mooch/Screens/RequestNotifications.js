import { StatusBar } from 'expo-status-bar';
// import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Pressable, Button } from 'react-native'
import { requestFrame } from 'react-native-reanimated/lib/reanimated2/core';
import Modal from "react-native-modal";

const data = [
  { id: 1, name: 'Kathryn', dates: '06/01-06/03', rating: '5', itemImage: require("../clothes_images/bluedress.jpeg"), userIcon: require("../icons/notificationaccounticon.png"), description: 'Kathryn has requested to borrow an item, click to view request.' },
  { id: 2, name: 'Kathryn', dates: '06/01-06/03',  rating: '5', itemImage: require("../clothes_images/bluedress.jpeg"), userIcon: require("../icons/notificationaccounticon.png"), description: 'Kathryn has requested to borrow an item, click to view request.' },
  { id: 3, name: 'Christine', dates: '06/01-06/03',  rating: '4.95', itemImage: require("../clothes_images/bluedress.jpeg"), userIcon: require("../icons/notificationaccounticon.png"), description: 'Christine has requested to borrow an item, click to view request.' },
  { id: 4, name: 'Claire', dates: '06/01-06/03',  rating: '4', itemImage: require("../clothes_images/bluedress.jpeg"), userIcon: require("../icons/notificationaccounticon.png"), description: 'Claire has requested to borrow an item, click to view request.' },
  { id: 5, name: 'Alex', dates: '06/01-06/03',  rating: '3.8', itemImage: require("../clothes_images/bluedress.jpeg"), userIcon: require("../icons/notificationaccounticon.png"), description: 'Alex has requested to borrow an item, click to view request.' },
  { id: 6, name: 'Jared', dates: '06/01-06/03',  rating: '4.9', itemImage: require("../clothes_images/bluedress.jpeg"), userIcon: require("../icons/notificationaccounticon.png"), description: 'Jared has requested to borrow an item, click to view request.' },
]



function RequestNotifications({ navigation }) {
    const [notifications, setNotifications] = useState(data)
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [modalItem, setModalItem] = React.useState(null);

    const handleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handlePress = () => {
        console.log("pressed!");
        let newData = notifications.filter(item => {
            return item.id !== modalItem.id;    
          });
        setNotifications(newData);
        handleModal()
    };

    return (
      <View style={styles.container}>
        <Modal isVisible={isModalVisible}>
            <View style={styles.modalStyle}>
                <View>
                    <Pressable style={{paddingLeft: '90%', paddingTop: '3%'}} onPress={handleModal}>
                        <Image source={require('../icons/close.png')} style={{height:20, width:20}}/>
                    </Pressable>
                    <View style={styles.modalIconContainer}>
                    <Image
                    source={modalItem?.userIcon}
                    style={styles.iconInModal}
                    />
                    </View>
                    <View style={styles.modalIconContainer}>
                    <Text style={styles.userText}>{modalItem?.name}</Text>
                    </View>
                    <View style={styles.modalIconContainer}>
                    <View style={styles.ratingContainer}>
                    <Image
                    source={require("../icons/star.png")}
                    style={{width: 17, height: 17}}
                    /> 
                    <Text style={{fontSize: 17, color: '#5A5A5A'}}>{modalItem?.rating}</Text>                   
                    </View>
                    </View>
                    <View style={styles.modalIconContainer}>
                    <Text style={{fontSize: 19, color: '#5A5A5A'}}>has requested to borrow</Text>
                    </View>
                    <View style={styles.modalIconContainer}>
                    <Image
                    source={modalItem?.itemImage}
                    style={{width: 180, height: 230}}
                    />
                    </View>
                    <View style={styles.modalIconContainer}>
                    <Text style={{fontSize: 19, color: '#5A5A5A'}}>{"from ".concat(modalItem?.dates)}</Text>
                    </View>
                    <Pressable style={styles.modalButtonContainer} onPress={handlePress}>
                    <Text style={{fontSize: 19, color: '#5A5A5A'}}>accept</Text>
                    </Pressable>
                    <Pressable style={styles.modalButtonContainer} onPress={handlePress}>
                    <Text style={{fontSize: 19, color: '#5A5A5A'}}>reject</Text>
                    </Pressable>
                    <Pressable style={styles.modalButtonContainer} onPress={() => navigation.navigate('DMs')}>
                    <Text style={{fontSize: 19, color: '#5A5A5A'}}>{"DM ".concat(modalItem?.name)}</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>  
        <FlatList
          style={styles.notificationList}
          enableEmptySections={true}
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
                <Pressable onPress={() => {
                    setModalItem(item)
                    handleModal();
                }}>        
                <SafeAreaView style={styles.notificationBox}>
                <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={item.userIcon}
                />
                </View>
                <View style={styles.textContainer}>
                <Text style={styles.description}>{item.description}</Text>
                </View>
                </SafeAreaView>
                </Pressable>
            )
          }}
        />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    notificationList: {
      marginTop: 20,
      padding: 10,
      height: '100%',
      width: '100%'
    },
    textContainer: {
        flexDirection:'row',
        width: '80%',
        alignItems: 'center',
    },
    notificationBox: {
      height: 80,
      padding: 20,
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: '#f3eef6',
      flexDirection: 'row',
      borderRadius: 10,
    },
    iconContainer: {
        paddingLeft: 10,
        paddingRight: 5,
        alignContent: 'center',
        justifyContent: 'center'
    },
    icon: {
      width: 45,
      height: 45,
    },
    iconInModal: {
        width: 100,
        height: 100,
      },
    description: {
      flex: 1,
      flexWrap: 'wrap',
      fontSize: 18,
      color: '#4d4d4d',
      marginLeft: 5,
    },
    userText: {
        fontSize: 25,
        color: '#5A5A5A'
    },
    modalStyle: {
        height: '90%',
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#f3eef6',
        borderRadius: 15,
        flexDirection: 'column',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalIconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    modalButtonContainer: {
        backgroundColor:  '#e7deed', 
        borderColor: '#f5dceb',
        width: 200,
        height: 35,
        borderWidth: 0,
        borderRadius: 15,    
        marginLeft: 25,
        marginRight: 25,   
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 9
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
        borderRightWidth: 5,
        borderRightColor:'#e7deed',
        borderLeftWidth: 5,
        borderLeftColor:'#e7deed',
        gap: 5,
        backgroundColor: '#e7deed',
        borderRadius: 15
    },
    button: {
        backgroundColor:  '#e8def9', 
        borderColor: '#f5dceb',
        width: '70%',
        marginBottom: 20,
        borderWidth: 0,
        borderRadius: 15,    
        marginLeft: 25,
        marginRight: 25,   
        alignSelf: 'center'
     },
     buttonText: {
      color:'#5A5A5A', 
     },
  });

export default RequestNotifications;
