import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import React, {useState} from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import { FAB } from '@rneui/themed';
import { color } from 'react-native-reanimated';

const clothes = [
    { source: require("../clothes_images/swirltop.jpeg"),
        width: 160,
        height: 230,
        id: '7',
        text: 'Adika (S)', 
        clothingType: 'Shirt',
        washingPref: 'I wash it after you return it' },
    { source: require("../clothes_images/denimtop.jpeg"),
        width: 160,
        height: 210,
        id: '9',
        text: 'Amazon (S)' },
    { source: require("../clothes_images/blackstrappydress.jpeg"),
        width: 160,
        height: 200,
        id: '10',
        text: 'TigerMist (S)' }
];




function Aphi({ navigation }) {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [modalItem, setModalItem] = React.useState(null);
    const handleModal = () => {
    
        setIsModalVisible(!isModalVisible);
    };
    const Item = ({item}) => (
        <View key={item.id} style={{marginTop: 12, flex: 1}}>
          <Pressable onPress={() => {
            setModalItem(item)
            handleModal();

            }
          }>
            <Image
            source={item.source}
            style={{
              height: item.height,
              alignSelf: 'stretch',
              width: item.width,
              borderRadius: 7,
            }}
            resizeMode="cover"
          />
          </Pressable>
          <Text
            style={{
              marginTop: 8,
              color: '#000000',
            }}
          >
            {item.text}
          </Text>
        </View>
      );
    return(
        <SafeAreaView style={styles.background}>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalStyle}>
                    <>
                        <Image
                        source={modalItem?.source}
                        style={{
                            height: modalItem?.height * 1.5,
                            alignSelf: 'center',
                            width: modalItem?.width * 1.5,
                            borderRadius: 7,
                            borderColor: 'grey',
                        }}
                        resizeMode="cover"
                        />
                        <Text style={{ 
                                fontSize: 25,
                                color: '#5A5A5A', 
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                }}>{modalItem?.text}</Text>
                        <Text style={{fontSize: 15,
                                color: '#5A5A5A', 
                                alignSelf: 'center',}}><Text style={{ fontWeight: 'bold' }}>Type:</Text> {modalItem?.clothingType}</Text>
                        <Text style={{ontSize: 15,
                                color: '#5A5A5A', 
                                alignSelf: 'center',}}><Text style={{ fontWeight: 'bold' }}>Wash preference:</Text> {modalItem?.washingPref}</Text>
                        <Button buttonStyle={{backgroundColor:  '#e8def9', 
                                                borderColor: '#f5dceb',
                                                width: '50%',
                                                borderWidth: 0,
                                                borderRadius: 15,       
                                                alignSelf: 'center',
                                                padding: 10,}} 
                                            titleStyle={{ color:'#5A5A5A' }} 
                                            title="request" 
                                            onPress={handleModal} />
                        <Button buttonStyle={{borderWidth: 2,
                                                borderColor: '#e8def9',
                                                marginBottom: 10,
                                                width: '50%',
                                                borderRadius: 15,       
                                                alignSelf: 'center',
                                                }} 
                                            type='outline'
                                            titleStyle={{ color:'#5A5A5A' }} 
                                            title="go back" 
                                            onPress={handleModal} />
                    </>
                </View>
            </Modal>
            <MasonryList
                data={clothes}
                renderItem={({item}) => {
                    // console.log(handleModal);
                    // console.log(isModalVisible);
                    // console.log(setIsModalVisible);
                    return <Item item={item} /> 
                }}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<View />}
                contentContainerStyle={{
                paddingHorizontal: 24,
                alignSelf: 'stretch',
                }}
            >
            </MasonryList>
            <FAB
            visible={true}
            icon={{ name: 'add', color: 'white' }}
            color="#e8def9"
            placement="right"
            onPress={() => navigation.navigate('Upload')}
        />
        </SafeAreaView>
    )
}


export default Aphi;

/* <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >
<Image 
source={require("./uploadicon.png")} 
style={styles.FloatingButtonStyle} />
</TouchableOpacity> */

const styles = StyleSheet.create({

background: {
    flex: 1,
    backgroundColor: 'white',
},
modalStyle: {
    height: '80%',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#f7f4fd',
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
},
modalText: {
    fontSize: 10,
    color: '#5A5A5A',
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
modalRequestButton: {

},
TouchableOpacityStyle:{

    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 100,
    bottom: 500,
  },
  FloatingButtonStyle: {

    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});