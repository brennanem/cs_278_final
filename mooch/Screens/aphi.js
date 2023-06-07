import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable , ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import React, {useState, useEffect} from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import { FAB } from '@rneui/themed';
import { color } from 'react-native-reanimated';
import { useRoute } from "@react-navigation/native"
import { db, collection, getDocs, ref, storage, getDownloadURL, getMetadata, listAll} from "../firebase/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const categories = [
  { text: 'all',
      id: '0' },
  { text: 'tops',
      id: '1' },
  { text: 'bottoms',
      id: '2' },
  { text: 'dresses',
      id: '3' },
  { text: 'accessories',
      id: '4' },
  { text: 'sets',
      id: '5' },
  { text: 'shoes',
      id: '6' }
]


// const all_clothes = [
//   { source: require("../clothes_images/swirltop.jpeg"),
//       width: 160,
//       height: 220,
//       id: '7',
//       text: 'Adika (S)', 
//       clothingType: 'Shirt',
//       washingPref: 'I wash it after you return it' ,
//       tags: [{name: 'all', id: '0'}, {name: 'tops', id: '1'}] },
//   { source: require("../clothes_images/denimtop.jpeg"),
//       width: 160,
//       height: 280,
//       id: '9',
//       text: 'Amazon (S)' ,
//       tags: [{name: 'all', id: '0'}, {name: 'tops', id: '1'}]  },
//   { source: require("../clothes_images/blackstrappydress.jpeg"),
//       width: 160,
//       height: 280,
//       id: '10',
//       text: 'TigerMist (S)',
//       tags: [{name: 'all', id: '0'}, {name: 'dresses', id: '1'}]   }
// ];

// const reference = storage();

// type ItemData = {
//   imageName: string;
//   source: string;
//   width: number;
//   height: number;
//   id: string;
// };


function Aphi({ navigation }) {
    const group = 'Aphi';
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    const [filterCategory, setFilterCategory] = useState('all');
    const [clothes, setClothes] = useState([]);
    const [startDate, setstartDate] = React.useState(''); //these variables get populated with startDate and endDate!
    const [endDate, setendDate] = React.useState('');



    const auth = getAuth();
    const user = auth.currentUser;

    // https://github.com/mmazzarolo/react-native-modal-datetime-picker
    const [isTimePickerVisibleStart, setTimePickerVisibilityStart] = useState(false);

    const [isTimePickerVisibleEnd, setTimePickerVisibilityEnd] = useState(false);

    const showTimePickerStart = () => {
      setTimePickerVisibilityStart(true);
    };
    const showTimePickerEnd = () => {
      setTimePickerVisibilityEnd(true);
    };
    const hideTimePickerStart = () => {
      setTimePickerVisibilityStart(false);
    };
    const hideTimePickerEnd = () => {
      setTimePickerVisibilityEnd(false);
    };
    const handleConfirmStart = (date) => {
      hideTimePickerStart();
      setstartDate(date)
      console.warn("A start date has been picked: ", startDate); // datetime format
    };
    const handleConfirmEnd = (date) => {
      hideTimePickerEnd();
      setendDate(date)
      console.warn("An end date has been picked: ", endDate); // datetime format
    };



      
    // let all_clothes = [];
    const heights = [280, 220];

    useEffect(() => {
      const imagesRef = ref(storage, 'groupImages/'+group);
      listAll(imagesRef)
        .then((res) => {
          setClothes([]);
          // let newClothes = [];
          res.items.forEach( async (imageRef) => {
            const imagePath = imageRef.fullPath;
            // console.log("imagePath", imagePath);
            const url = await getDownloadURL(ref(storage, imagePath));
            const metadata = await getMetadata(ref(storage, imagePath));
            // console.log("metadata", metadata)
            // .substring(0, url.lastIndexOf('.jpg')+4)
            const itemData = {
              id: imagePath.substring(imagePath.lastIndexOf('/') + 1),
              text: metadata.customMetadata?.brand + " (" + metadata.customMetadata?.size + ")",
              source: {uri : url} ,
              cleaningPref: metadata.customMetadata?.cleaningPref,
              owner: metadata.customMetadata?.owner,
              tags: metadata.customMetadata?.tags.split(","),
              width: 160,
              height: heights[Math.floor(Math.random()*heights.length)]
            };
            // newClothes.push(itemData);
            // console.log("imageRef", imageRef);
            if ((filterCategory == 'all') || itemData.tags.includes(filterCategory)) {
              setClothes(prev => [...prev, itemData]);
            }
          });
          // console.log("new cloths", newClothes);
          // setClothes(prev => [...prev]+newClothes);
        })
        .catch((error) => {
          console.log("error", error)
          // Uh-oh, an error occurred!
        });

    }, []);

    // const getData = async () => {
    //   reference
    //     .ref('items')
    //   if (user) {
    //     let data = [];
    //     const q = await getDocs(collection(db, "groups", group, "posts"));
    //     q.forEach( async (doc) => {
    //       let newItem = doc.data();
    //       newItem.id = doc.id;
    //       newItem.width = 160;
    //       newItem.height = heights[Math.floor(Math.random()*heights.length)];
    //       newItem.text = newItem.brand + " (" + newItem.size + ")"
    //       console.log("newItem pre", newItem);
    //       const url = await getDownloadURL(ref(storage, newItem.imagePath))
    //       newItem.source = url
    //       data.push(newIem);
    //     });
    //     // all_clothes = all_clothes.concat(data);
    //     setClothes(data)
    //     // console.log("data", data);
    //   } else {
    //     console.log("user not signed in");
    //   }    
    // }
    // getData();

    // console.log("start")


    // const handleData = () => {
    //   const getData = async () => {
    //     if (user) {
    //       // const q = query(collection(db, "cities"), where("capital", "==", true)); -> can try this for filtering
    //       // let data = [];
    //       const q = await getDocs(collection(db, "groups", group, "posts"));
    //       q.forEach( async (doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         let newItem = doc.data();
    //         newItem.id = doc.id;
    //         // newItem.source = do something here
    //         newItem.width = 160;
    //         newItem.height = heights[Math.floor(Math.random()*heights.length)];
    //         newItem.text = newItem.brand + " (" + newItem.size + ")"
    //         console.log("newItem pre", newItem);
    //         // const url = await getDownloadURL(ref(storage, newItem.imagePath));
    //         // newItem.source = url
    //         const url = await getDownloadURL(ref(storage, newItem.imagePath))
    //           // .then((url) => {
    //           //   console.log("url", url)
    //           //   newItem["source"] = url
    //           // })
    //           // .catch((error) => {
    //           //   console.log("error getting image url:", error);
    //           // })
    //         newItem.source = url
    //         // console.log("newItem", newItem);
    //         // data.push(newItem);
    //         // console.log("pre data", data);
    //         all_clothes.push(newIem);
  
    //       });
    //       all_clothes = all_clothes.concat(data);
    //       // console.log("data", data);
    //     } else {
    //       console.log("user not signed in");
    //     }    
    //   }
    //   getData();
    // }



    // handleData();
    // console.log("all clothes", all_clothes);

    // let clothes = all_clothes.filter((item) => {
    //   return item.tags.some(tag => filterCategory === tag.name);    
    // })

    console.log("clothes", clothes)
    const handleFilterCategory = ({item}) => {
    
      setFilterCategory(item.text);
  };
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
              marginLeft:15,
              marginRight: 5,
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
              color: '#5A5A5A',
              textAlign: 'center'
            }}
          >
            {item.text}
          </Text>
        </View>
      );
    return(
        <SafeAreaView style={styles.background}>
          <View style={styles.filterContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {categories.map((item) => (
              <Pressable style={styles.filterButton} key={item.id} onPress={() => handleFilterCategory({item})}>
                <Text style={styles.filterText}>{item.text}</Text>
              </Pressable>
            ))}     
            </ScrollView>
          </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalStyle}>
                    <>
                        <Image
                        source={modalItem?.source}
                        style={{
                            height: modalItem?.height * 1,
                            alignSelf: 'center',
                            width: modalItem?.width * 1,
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
                        <Text style={{fontSize: 15,
                                color: '#5A5A5A', 
                                alignSelf: 'center',}}><Text style={{ fontWeight: 'bold' }}>Wash preference:</Text> {modalItem?.washingPref}</Text>
                        
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <DateTimePickerModal
                                  isVisible={isTimePickerVisibleStart}
                                  mode='date'
                                  onConfirm={handleConfirmStart}
                                  onCancel={hideTimePickerStart}
                                  isDarkModeEnabled={true}
                                />
                         <DateTimePickerModal
                                  isVisible={isTimePickerVisibleEnd}
                                  mode='date'
                                  onConfirm={handleConfirmEnd}
                                  onCancel={hideTimePickerEnd}
                                  isDarkModeEnabled={true}
                                />
                          <Button 
                                  buttonStyle= {{backgroundColor:  '#e8def9', 
                                  borderColor: '#f5dceb',
                                  width: '70%',
                                  borderWidth: 0,
                                  borderRadius: 15,       
                                  alignSelf: 'center',
                                  padding: 10,}} 
                              titleStyle={{ color:'#5A5A5A' }} 
                                  title="start date"
                                  onPress={showTimePickerStart}
                                  />
                        <Button 
                                  buttonStyle= {{backgroundColor:  '#e8def9', 
                                  borderColor: '#f5dceb',
                                  width: '70%',
                                  borderWidth: 0,
                                  borderRadius: 15,       
                                  alignSelf: 'center',
                                  padding: 10,}} 
                              titleStyle={{ color:'#5A5A5A' }} 
                                  title="end date"
                                  onPress={showTimePickerEnd}
                                  />
                        </View> 
                        
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
                  marginRight:15,
                  marginLeft:5,
                  alignSelf: 'stretch',
                  alignContent: 'stretch',
                  }}
            >
            </MasonryList>
            <FAB
            visible={true}
            icon={{ name: 'add', color: 'white' }}
            color="#e8def9"
            placement="right"
            onPress={() => navigation.navigate('Upload', {group: group})}
        />
        </SafeAreaView>
    )
}

export default Aphi;


// //handle date confirmation
// const handleConfirm = (date) => {
//   console.warn("A date has been picked: ", date); // note that this time will have the current date associated with it
//   hideTimePicker();
// };

/* <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >
<Image 
source={require("../icons/uploadicon.png")} 
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
  filterButton: {
    backgroundColor:'white',
    padding:5,
    margin:5
  },

  filterText: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#5A5A5A',
  },
});