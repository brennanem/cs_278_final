import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, ScrollView , Button, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import * as React from 'react';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Modal from "react-native-modal";
import { CheckBox } from 'react-native-elements'


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
  const [isDeleteModalVisible, setIsDeleteModalVisible] = React.useState(false);
  const [modalItemDelete, setModalItemDelete] = React.useState(null);
  const [isReturnModalVisible, setIsReturnModalVisible] = React.useState(false);
  const [modalItemReturn, setModalItemReturn] = React.useState(null);
  const handleReturnModal = () => {setIsReturnModalVisible(!isReturnModalVisible);};
  const handleDeleteModal = () => {setIsDeleteModalVisible(!isDeleteModalVisible);};
  const [isReturnChecked, setIsReturnChecked] = React.useState(false);
  const handleReturnChecked = () => {setIsReturnChecked(!isReturnChecked);};
  const [isDeleteChecked, setIsDeleteChecked] = React.useState(false);
  const handleDeleteChecked = () => {setIsDeleteChecked(!isDeleteChecked);};

  var allClothes = [
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

var beingBorrowed = [
    { source: require("../clothes_images/denimtop.jpeg"),
        width: 160,
        height: 210,
        id: '9',
        i: 8,
        text: 'Amazon (S)' }
];

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
        <Modal isVisible={isReturnModalVisible}>
                <View style={styles.modalStyle}>
                    <Pressable style={{paddingLeft: '90%', paddingTop: '3%'}} onPress={handleReturnModal}>
                        <Image source={require('./close.png')} style={{height:20, width:20}}/>
                      </Pressable>
                    <View>
                    <CheckBox
                        center
                        title='Mark item as returned'
                        iconRight
                        checkedIcon={<Image source={require('./checked.png')} style={{height:20, width:20}}/>}
                        uncheckedIcon={<Image source={require('./unchecked.png')} style={{height:20, width:20}}/>}
                        checked={isReturnChecked}
                        onPress={handleReturnChecked}
                        textStyle={{fontSize: 15, lineHeight: 21, letterSpacing: 0.25, color: '#5A5A5A'}}
                        containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', paddingTop:'10%', paddingBottom:'10%'}}
                      />
                    </View>
                </View>
            </Modal> 
            <Modal isVisible={isDeleteModalVisible}>
                <View style={styles.modalStyle}>
                    <Pressable style={{paddingLeft: '90%', paddingTop: '3%'}} onPress={handleDeleteModal}>
                        <Image source={require('./close.png')} style={{height:20, width:20}}/>
                      </Pressable>
                    <View>
                    <CheckBox
                        center
                        title='Remove item from closet'
                        iconRight
                        checkedIcon={<Image source={require('./deletechecked.png')} style={{height:20, width:15}}/>}
                        uncheckedIcon={<Image source={require('./deleteunchecked.png')} style={{height:20, width:15}}/>}
                        checked={isDeleteChecked}
                        onPress={handleDeleteChecked}
                        textStyle={{fontSize: 15, lineHeight: 21, letterSpacing: 0.25, color: '#5A5A5A'}}
                        containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', paddingTop:'10%', paddingBottom:'10%'}}
                      />
                    </View>
                </View>
            </Modal> 
        <ScrollView>
            <View style={styles.closetContainer}>
                <Text style={styles.closetHeader}>My Closet</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {allClothes.map((item) => (
                  <View key={item.id} style={{marginTop: 12, flex: 1, padding: 5}}>
                    <Pressable onPress={() => {
                      setModalItemDelete(item)
                      handleDeleteModal();
                      }
                    }>
                      <Image
                      source={item.source}
                      style={{
                        height: 120,
                        alignSelf: 'stretch',
                        width: 120,
                        borderRadius: 7,
                      }}
                      resizeMode="cover"
                    />
                    </Pressable>
                  </View>         
                ))}
                </ScrollView>
            </View>
            <View style={styles.closetContainer}>
                <Text style={styles.closetHeader}>Borrowed</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {beingBorrowed.map((item) => (     
                  <View key={item.id} style={{marginTop: 12, flex: 1, padding: 5}}>
                  <Pressable onPress={() => {
                      setModalItemReturn(item)
                      handleReturnModal();
                    }
                  }>
                    <Image
                    source={item.source}
                    style={{
                      height: 120,
                      alignSelf: 'stretch',
                      width: 120,
                      borderRadius: 7,
                    }}
                    resizeMode="cover"
                  />
                  </Pressable>
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

{/* <Modal visible={isReturnModalVisible} onRequestClose={handleReturnModal}>
<View style={styles.modalStyle}>
    <View>
        <Text>{'Mark item as returned?'}</Text>
        <Button title="Hide modal" onPress={handleReturnModal} />
    </View>
</View>
</Modal>  */}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    modalContainer: {
      zIndex: 1,
      margin: 25,
      backgroundColor: "white"
    },
    background: {
      flex: 1
    },
    filterText: {
      fontSize: 12,
      lineHeight: 21,
      letterSpacing: 0.25,
      color: '#5A5A5A',
    },
    outerContainer: {
      position: "absolute", 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      justifyContent: "center"
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
      borderRadius: 7
    },
    closetContainer: {
        paddingBottom: 10
    },
    modalStyle: {
      height: '20%',
      width: '95%',
      alignSelf: 'center',
      backgroundColor: '#f3eef6',
      borderRadius: 15,
  }
  });

{/* style={styles.filterText}>{"Close"}</Text> */}

{/* 
//   return(
//     <View style={styles.container}>
//     <View style={styles.header}>
//       <View style={styles.headerContent}>
//         <Image style={styles.avatar} source={require("./accounticon.png")}/>
//         <Text style={styles.name}>Brennan Megregian</Text>
//         <View style={styles.statsContainer}>
//           <View style={styles.statsBox}>
//             <Text style={styles.statsCount}>{4}</Text>
//             <Text style={styles.statsLabel}>Items</Text>
//           </View>
//           <View style={styles.statsBox}>
//             <Text style={styles.statsCount}>{1}</Text>
//             <Text style={styles.statsLabel}>Borrowed</Text>
//           </View>
//           <View style={styles.statsBox}>
//             <Text style={styles.statsCount}>{2}</Text>
//             <Text style={styles.statsLabel}>Borrowing</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//     <Modal isVisible={isReturnModalVisible}>
//             <View style={styles.modalStyle}>
//                 <View>
//                     <Text>{'Mark item as returned?'}</Text>
//                     <Button title="Hide modal" onPress={handleReturnModal} />
//                 </View>
//             </View>
//         </Modal> 
//         <Modal isVisible={isDeleteModalVisible}>
//             <View style={styles.modalStyle}>
//                 <View>
//                     <Text>{'Remove this item from your closet?'}</Text>
//                     <Button title="Hide modal" onPress={handleDeleteModal} />
//                 </View>
//             </View>
//         </Modal> 
//     <ScrollView>
//         <View style={styles.closetContainer}>
//             <Text style={styles.closetHeader}>My Closet</Text>
//             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//             {allClothes.map((item) => ( */}
//                 <View key={item.id} style={styles.imageContainer}>
//                     <Image style={styles.image} source={item.source}/>
//                 </View>            
//             ))}
//             </ScrollView>
//         </View>
//         <View style={styles.closetContainer}>
//             <Text style={styles.closetHeader}>Borrowed</Text>
//             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//             {beingBorrowed.map((item) => (
//                 <View key={item.id} style={styles.imageContainer}>
//                     <Image style={styles.image} source={item.source}/>
//                 </View>            
//             ))}
//             </ScrollView>
//         </View>
//         <View style={styles.closetContainer}>
//             <Text style={styles.closetHeader}>Borrowing</Text>
//             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//             {borrowing.map((item) => (
//                 <View key={item.id} style={styles.imageContainer}>
//                     <Image style={styles.image} source={item.source}/>
//                 </View>            
//             ))}
//             </ScrollView>
//         </View>
//     </ScrollView>
//   </View>
// )
// }


// const ReturnItem = ({item}) => (
//   <View key={item.id} style={{marginTop: 12, flex: 1, padding: 5}}>
//   <Pressable onPress={() => {
//     setModalItemReturn(item)
//     handleReturnReturn();
//     }
//   }>
//     <Image
//     source={item.source}
//     style={{
//       height: 120,
//       alignSelf: 'stretch',
//       width: 120,
//       borderRadius: 7,
//     }}
//     resizeMode="cover"
//   />
//   </Pressable>
// </View>    
// );
// const DelteItem = ({item}) => (
// <View key={item.id} style={{marginTop: 12, flex: 1, padding: 5}}>
// <Pressable onPress={() => {
//   setModalItemDelete(item)
//   handleReturnReturn();
//   }
// }>
//   <Image
//   source={item.source}
//   style={{
//     height: 120,
//     alignSelf: 'stretch',
//     width: 120,
//     borderRadius: 7,
//   }}
//   resizeMode="cover"
// />
// </Pressable>
// </View>    
// );