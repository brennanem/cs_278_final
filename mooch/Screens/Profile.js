import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, ScrollView , Button, Pressable, TextInput, Keyboard} from 'react-native';
import * as React from 'react';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Modal from "react-native-modal";
import { CheckBox } from 'react-native-elements'
import Stars from 'react-native-stars';
import { SelectList } from 'react-native-dropdown-select-list'


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

const reportOptions = [
  {key: '1', value: 'item never returned'},
  {key: '2', value: 'item damaged beyond repair'},
  {key: '3', value: 'item returned in poor condition'},
  {key: '4', value: 'item not cleaned according to agreed policy'},
  {key: '5', value: 'item not returned on time'},
  {key: '6', value: 'other'}
]

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
  const [numStars, setNumStars] = React.useState(null);
  const [isReportModalVisible, setIsReportModalVisible] = React.useState(false);
  const [reportReason, setReportReason] = React.useState(null);
  const [reportComment, setReportComment] = React.useState(null);
  const handleReportModal = () => {setIsReportModalVisible(!isReportModalVisible);};

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
        text: 'Amazon (S)',
      user: 'Christine',
      userIcon: require("../icons/accounticon.png") }
];

    return(
        <View style={styles.container}>
        <View style={styles.header}>
        <Pressable style={styles.notificationContainer} onPress={() => navigation.navigate('RequestNotifications')}>
              <Image source={require('../icons/notificationoutline.png')} style={{height:27, width:23}}/>
        </Pressable>
          <View style={styles.headerContent}>
            <Image style={styles.avatar} source={require("../icons/accounticon.png")}/>
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
                <View style={styles.returnModalStyle}>
                    <Pressable style={{paddingLeft: '90%', paddingTop: '3%'}} onPress={handleReturnModal}>
                        <Image source={require('../icons/close.png')} style={{height:20, width:20}}/>
                      </Pressable>
                    <View style={styles.modalTextContainer}>
                    <Text style={{fontSize: 19, color: '#5A5A5A'}}>this item is being borrowed by</Text>
                    </View>
                    <View style={styles.modalIconContainer}>
                    <Image
                    source={modalItemReturn?.userIcon}
                    style={{width:100,height:100}}
                    />
                    </View>
                    <View style={styles.modalIconContainer}>
                    <Text style={{fontSize: 22, color: '#5A5A5A'}}>{modalItemReturn?.user}</Text>
                    </View>
                    <View style={styles.modalTextContainer}>
                    <Text style={{marginVertical: 5, fontSize: 17, color: '#5A5A5A', textAlign: 'center'}}>{"rate your experience with ".concat(modalItemReturn?.user)}</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                      <Stars
                        half={true}
                        default={0}
                        update={(val)=>{
                          console.log(val)
                          setNumStars(val)}}
                        spacing={4}
                        starSize={40}
                        count={5}
                        fullStar={require('../icons/starFilled.png')}
                        emptyStar={require('../icons/starEmpty.png')}
                        halfStar={require('../icons/starHalf.png')}/>
                    </View>
                    <View>
                    <CheckBox
                        center
                        title='mark item as returned'
                        iconRight
                        checkedIcon={<Image source={require('../icons/checked.png')} style={{height:20, width:20}}/>}
                        uncheckedIcon={<Image source={require('../icons/unchecked.png')} style={{height:20, width:20}}/>}
                        checked={isReturnChecked}
                        onPress={handleReturnChecked}
                        textStyle={{fontSize: 15, lineHeight: 21, letterSpacing: 0.25, color: '#5A5A5A'}}
                        containerStyle = {styles.modalIconContainer}
                      />
                    </View>
                    <View style={{flexDirection: 'row', gap:'90%'}}>
                      <Pressable style={styles.modalTextContainer} onPress={() => {handleReportModal();}}>
                    <Text style={{marginVertical: 5, fontSize: 17, color: '#e60000', textAlign: 'center'}}>report user</Text>
                    </Pressable>
                    <Pressable style={styles.doneContainer} onPress={() => {handleReturnModal();}}>
                    <Text style={{marginVertical: 5, fontSize: 17, color: '#5A5A5A', textAlign: 'center'}}>done</Text>
                    </Pressable>
                    </View>
                </View>
                <Modal isVisible={isReportModalVisible}>
                <View style={styles.reportModalStyle}>
                    <Pressable style={{paddingLeft: '90%', paddingTop: '3%'}} onPress={() => {handleReportModal();}}>
                        <Image source={require('../icons/close.png')} style={{height:20, width:20}}/>
                      </Pressable>
                      <View style={styles.modalTextContainer}>
                        <Text style={{fontSize: 19, color: '#5A5A5A'}}>what would you like to report?</Text>
                      </View>
                      <View style={styles.modalTextContainer}>
                      <SelectList 
                        setSelected={(val) => setReportReason(val)} 
                        data={reportOptions} 
                        save="value"
                        placeholder="select reason for report"
                        search={false}
                      />
                      </View>
                      <View style={styles.modalTextContainer}>
                      <TextInput
                        style={{height: 100, backgroundColor: 'white', width: '90%', padding:5, borderRadius: 10, borderColor: '#5A5A5A', borderWidth: 1}}
                        placeholder="(optional) leave a comment to explain"
                        onChangeText={(val) => {setReportComment(val)}}
                        value={reportComment}
                        multiline={true}
                        numberOfLines={5}
                        keyboardType="default"
                        returnKeyType="done"
                        blurOnSubmit={true}
                        onSubmitEditing={()=>{Keyboard.dismiss()}}
                      />
                      </View>
                      <Pressable style={styles.modalButtonContainer} onPress={handleReportModal}>
                        <Text style={{fontSize: 19, color: '#5A5A5A'}}>submit</Text>
                      </Pressable>
                </View>
              </Modal> 
            </Modal> 
            <Modal isVisible={isDeleteModalVisible}>
                <View style={styles.modalStyle}>
                    <Pressable style={{paddingLeft: '90%', paddingTop: '3%'}} onPress={handleDeleteModal}>
                        <Image source={require('../icons/close.png')} style={{height:20, width:20}}/>
                      </Pressable>
                    <View>
                    <CheckBox
                        center
                        title='Remove item from closet'
                        iconRight
                        checkedIcon={<Image source={require('../icons/deletechecked.png')} style={{height:20, width:15}}/>}
                        uncheckedIcon={<Image source={require('../icons/deleteunchecked.png')} style={{height:20, width:15}}/>}
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
      flex : 0,
      height: 300,
      flexDirection: 'column',
      gap: 1,
      backgroundColor: 'transparent',
      alignItems: 'right',
      padding: 30,
      marginTop:20,
    },
    headerContent: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      height: '100%',
      width: '100%'
    },
    notificationContainer: {
      alignItems: 'flex-end',
      marginTop: 5,
      width: '100%',
      justifyContent: 'center'
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
      color: '#5A5A5A',
      fontWeight: '600',
    },
    closetHeader: {
        paddingBottom: 5,
        textAlign: 'center',
        fontSize: 20,
        color: '#5A5A5A',
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
      color: '#5A5A5A',
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
  },
  returnModalStyle: {
    height: '65%',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#f3eef6',
    borderRadius: 15,
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center'
  },
  reportModalStyle: {
    height: '75%',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#f3eef6',
    borderRadius: 15,
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center'
  },
  modalIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'transparent'
  }, 
  modalTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 7
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
  doneContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 7,
    backgroundColor: '#e7deed',
    borderRadius: 15, 
    width:100
  }, 
  });
