import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native';
import Modal from "react-native-modal";
import React, {useState} from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import { FAB } from '@rneui/themed';

const clothes = [
    { source: require("../clothes_images/swirltop.jpeg"),
        width: 160,
        height: 230,
        id: '7',
        text: 'Adika (S)', 
        washingPref: 'I wash it' },
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
                    <View>
                        <Image
                        source={modalItem?.source}
                        style={{
                            height: modalItem?.height,
                            alignSelf: 'stretch',
                            width: modalItem?.width,
                            borderRadius: 7,
                        }}
                        resizeMode="cover"
                        />
                        <Text>{modalItem?.text}</Text>
                        <Text>{modalItem?.washingPref}</Text>
                        <Button title="Hide modal" onPress={handleModal} />
                    </View>
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
    backgroundColor: 'white',
    borderRadius: 15,
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