import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View , Image, SafeAreaView, FlatList, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import * as React from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import { FAB } from '@rneui/themed';



// interface Clothes {
//     source: string;
//     width: number;
//     hieght: number;
//     text: string;
//     id: string;
//   }

const clothes = [
    { source: require("../clothes_images/pinkpants.jpeg"),
        width: 160,
        height: 280,
        id: '1',
        text: 'I AM GIA (S)',
        tags: ['Bottoms'] },
    { source: require("../clothes_images/greenset.jpeg"),
        width: 160,
        height: 200,
        id: '2',
        text: 'SHIEN (S)',
        tags: ['Sets', 'Tops', 'Bottoms']  },
    { source: require("../clothes_images/blueoneshouldertop.jpeg"),
        width: 160,
        height: 200,
        id: '3',
        text: 'LIONESS (M)',
        tags: ['Tops']  },
    { source: require("../clothes_images/chainmailtop.jpeg"),
        width: 160,
        height: 250,
        id: '4',
        text: 'H&M (XS/S)' ,
        tags: ['Tops'] },
    { source: require("../clothes_images/greendress.jpeg"),
        width: 160,
        height: 210,
        id: '5',
        text: 'SHEIN (S)',
        tags: ['Dresses']  },
    { source: require("../clothes_images/redscarftop.jpeg"),
        width: 160,
        height: 190,
        id: '6',
        text: 'PrincessPolly (6)' ,
        tags: ['Tops'] },
    { source: require("../clothes_images/swirltop.jpeg"),
        width: 160,
        height: 230,
        id: '7',
        text: 'Adika (S)',
        tags: ['Tops']  },
    { source: require("../clothes_images/yellowbralette.jpeg"),
        width: 160,
        height: 250,
        id: '8',
        text: 'FreePeople (S)',
        tags: ['Tops']  },
    { source: require("../clothes_images/denimtop.jpeg"),
        width: 160,
        height: 210,
        id: '9',
        text: 'Amazon (S)' ,
        tags: ['Tops'] },
    { source: require("../clothes_images/blackstrappydress.jpeg"),
        width: 160,
        height: 200,
        id: '10',
        text: 'TigerMist (S)' ,
        tags: ['Dresses'] }
];

const categories = [
  { text: 'Tops',
      id: '1' },
  { text: 'Bottoms',
      id: '2' },
  { text: 'Dresses',
      id: '3' },
  { text: 'Accessories',
      id: '4' },
  { text: 'Sets',
      id: '5' },
  { text: 'Shoes',
      id: '5' }
]


const Item = ({item}) => (
    <View key={item.id} style={{marginTop: 12, flex: 1}}>
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

// <View key={item.id} style={styles.imageContainer}>
// <Image style={styles.image} source={item.source}/>
// </View>  
// buttonStyle= {styles.button}
// titleStyle={styles.buttonText}
// title='login' onPress={() =>
// navigation.navigate('Home')
// {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
// {categories.map((item) => (
//     <Button 
//       key={item.id} 
//       buttonStyle={styles.filterButton}
//       title={item.text}
//     />            
// ))}
// <FlatList style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
// </ScrollView> */}
// {categories.map((item) => (
//   <View key={item.id} style={styles.filterButtonContainer}>
//     <Button title={item.text} />  
//   </View>          
// ))}

function ExplorePage({ navigation }) {
    return(
        <SafeAreaView style={styles.background}>
          <View style={styles.filterContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {categories.map((item) => (
              <Pressable style={styles.filterButton}>
                <Text style={styles.filterText}>{item.text}</Text>
              </Pressable>
            ))}     
            </ScrollView>
          </View>       
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
            />
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


export default ExplorePage;

/* <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >
<Image 
source={require("./uploadicon.png")} 
style={styles.FloatingButtonStyle} />
</TouchableOpacity> */

const styles = StyleSheet.create({

background: {
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 0,
    margin: 0

},
scroll: {
  backgroundColor: 'white',
  borderBottomWidth: 0,
  flex: 1,
  heigh: 10
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
  filterContainer: {
  },

  filterButton: {
    backgroundColor:'white',
    padding:5,
    margin:5
  },

  filterText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#5A5A5A',
  },

  filterButtonContainer: {
    height: 40,
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
    border: 0

  }
});

// function ExplorePage({ navigation }) {
//     return(
//         <View>
//         <FAB
//             visible={true}
//             icon={{ name: 'add', color: 'white' }}
//             color="#e8def9"
//             placement="right"
//         />
//         <MasonryList
//             data={clothes}
//             renderItem={({item}) => <Item item={item} />}
//             keyExtractor={item => item.id}
//             numColumns={2}
//             showsVerticalScrollIndicator={false}
//             ListHeaderComponent={<View />}
//             contentContainerStyle={{
//             paddingHorizontal: 24,
//             alignSelf: 'stretch',
//             }}
//         />
//       </View>
//     )
// }

{/* <TouchableOpacity activeOpacity={0.5}>
<Image
    ssource={require("./uploadicon.png")}
/>
onPress={() => navigation.navigate('Upload')}
</TouchableOpacity> */}

{/* <Button 
icon={
    <Icon
    name="arrow-right"
    size={15}
    color="white"
    />
}
buttonStyle = {{position: 'absolute', bottom:0, left:0}}
onPress={() => navigation.navigate('Create Account')}
/> */}
// return(
//     <SafeAreaView>
//         <FlatList
//         data={DATA}
//         renderItem={({item}) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//         />
//         <MasonryList
//             data={clothes}
//             renderItem={({item}) => <Item item={item} />}
//             keyExtractor={item => item.id}
//             numColumns={2}
//             showsVerticalScrollIndicator={false}
//             ListHeaderComponent={<View />}
//             contentContainerStyle={{
//             paddingHorizontal: 24,
//             alignSelf: 'stretch',
//             }}
//         />   
//     </SafeAreaView>     

{/* <View key={item.id} style={[{marginTop: 12, flex: 1}, style]}> */}

// const getRandomNumber = () => {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     setNumber(randomNumber);
// }

// const randomBool = useMemo(() => Math.random() < 0.5, []);

{/* <Image
source={item.source}
style={{
  height: randomBool ? 150 : 280,
  alignSelf: 'stretch',
}}
resizeMode="cover"
/> */}

// const light = {
//     background: '#FFFFFF',
//     paper: '#EAEBF4',
//     primary: '#393D7A',
//     accent: '#B446BF',
//     link: '#393D7A',
//     heading: '#393D7A',
//     titleText: '#000000',
//     subText: '#404040',
//     text: '#000000',
//     textContrast: '#D3D8E8',
//     disabled: colors.mediumGray,
//     border: '#EDEDED',
//     placeholder: '#999999',
//   };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//       backgroundColor: '#f9c2ff',
//       padding: 20,
//       marginVertical: 8,
//       marginHorizontal: 16,
//     },
//     title: {
//       fontSize: 32,
//     },
//   });

// const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
//   ];
  
  
  
// const Item = ({title}) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
  
//   const App = () => {
//     return (
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={DATA}
//           renderItem={({item}) => <Item item={item.title} />}
//           keyExtractor={item => item.id}
//           numColumns={2}
//           showsVerticalScrollIndicator={false}
//         />
//       </SafeAreaView>
//     );
//   };
  

// return(
//     <View>
//         <MasonryList
//             data={clothes}
//             keyExtractor={(item, index): string => index.toString()}
//             numColumns={2}
//             showsVerticalScrollIndicator={false}
//             renderItem={({item}) => <CardItem />}
//             refreshing={isLoadingNext}
//             onRefresh={() => refetch({first: ITEM_CNT})}
//             onEndReachedThreshold={0.1}
//             onEndReached={() => loadNext(ITEM_CNT)}
//         />        
//     </View>
// )

//