import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView, Image, Modal } from 'react-native';
import React, {useState} from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import { FAB } from '@rneui/themed';

const clothes = [
    { source: require("../clothes_images/swirltop.jpeg"),
        width: 160,
        height: 230,
        id: '7',
        text: 'Adika (S)' },
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

const Item = ({item}) => (
    <View key={item.id} style={{marginTop: 12, flex: 1}}>
        {/* <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
        }}></Modal> */}
      <Image
        source={item.source}
        style={{
          height: item.height,
          alignSelf: 'stretch',
          width: item.width,
          borderRadius: 7,
        }}
        resizeMode="cover"
        onPress={() => setModalVisible(true)}
      />
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


function Aphi({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <SafeAreaView style={styles.background}>
            <MasonryList
                data={clothes}
                renderItem={({item}) => <Item item={item} />}
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