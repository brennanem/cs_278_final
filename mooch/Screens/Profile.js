import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import * as React from 'react';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const allClothes = [
    { source: require("../clothes_images/yellowbralette.jpeg"),
        id: '8',
        text: 'FreePeople (S)' },
    { source: require("../clothes_images/denimtop.jpeg"),
        id: '9',
        text: 'Amazon (S)' },
    { source: require("../clothes_images/blackstrappydress.jpeg"),
        id: '10',
        text: 'TigerMist (S)' }, 
    { source: require("../clothes_images/pinkscarftop.jpeg"),
        id: '11',
        text: 'TigerMist (S)' }, 

];

const beingBorrowed = [
    { source: require("../clothes_images/denimtop.jpeg"),
        width: 160,
        height: 210,
        id: '9',
        i: 8,
        text: 'Amazon (S)' }
];

const borrowing = [
    { source: require("../clothes_images/bluedress.jpeg"),
        width: 160,
        height: 250,
        id: '8',
        i: 7,
        text: 'FreePeople (S)' },
    { source: require("../clothes_images/cowboyhatfeathers.png"),
        width: 160,
        height: 210,
        id: '9',
        i: 8,
        text: 'Amazon (S)' }
];

function Profile({ navigation }) {
    return(
        <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar} source={require("./accounticon.png")}/>
            <Text style={styles.name}>Brennan Megregian</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statsBox}>
                <Text style={styles.statsCount}>{4}</Text>
                <Text style={styles.statsLabel}>Items</Text>
              </View>
              <View style={styles.statsBox}>
                <Text style={styles.statsCount}>{1}</Text>
                <Text style={styles.statsLabel}>Borrowed</Text>
              </View>
              <View style={styles.statsBox}>
                <Text style={styles.statsCount}>{2}</Text>
                <Text style={styles.statsLabel}>Borrowing</Text>
              </View>
            </View>
          </View>
        </View>
        <ScrollView>
            <View style={styles.closetContainer}>
                <Text style={styles.closetHeader}>My Closet</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {allClothes.map((item) => (
                    <View key={item.id} style={styles.imageContainer}>
                        <Image style={styles.image} source={item.source}/>
                    </View>            
                ))}
                </ScrollView>
            </View>
            <View style={styles.closetContainer}>
                <Text style={styles.closetHeader}>Borrowed</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {beingBorrowed.map((item) => (
                    <View key={item.id} style={styles.imageContainer}>
                        <Image style={styles.image} source={item.source}/>
                    </View>            
                ))}
                </ScrollView>
            </View>
            <View style={styles.closetContainer}>
                <Text style={styles.closetHeader}>Borrowing</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {borrowing.map((item) => (
                    <View key={item.id} style={styles.imageContainer}>
                        <Image style={styles.image} source={item.source}/>
                    </View>            
                ))}
                </ScrollView>
            </View>
        </ScrollView>
      </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    header: {
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 30,
      marginTop:20,
    },
    headerContent: {
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: 'white',
      marginBottom: 10,
    },
    name: {
      fontSize: 22,
      color: '#000000',
      fontWeight: '600',
    },
    closetHeader: {
        paddingBottom: 5,
        textAlign: 'center',
        fontSize: 20,
        color: '#000000',
        fontWeight: '600',
    },
    statsContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    statsBox: {
      alignItems: 'center',
      marginHorizontal: 10,
    },
    statsCount: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000000',
    },
    statsLabel: {
      fontSize: 14,
      color: '#999999',
    },
    body: {
      alignItems: 'center',
      padding: 30,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    imageContainer: {
      padding: 5,
    },
    image: {
      width: 120,
      height: 120,
    },
    closetContainer: {
        paddingBottom: 10
    }
  });
