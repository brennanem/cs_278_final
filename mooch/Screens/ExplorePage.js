import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View , Image} from 'react-native';
import * as React from 'react';
import MasonryList from '@react-native-seoul/masonry-list';

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
        i: 0,
        text: 'I AM GIA (S)' },
    { source: require("../clothes_images/greenset.jpeg"),
        width: 160,
        height: 200,
        id: '2',
        i: 1,
        text: 'SHIEN (S)' },
    { source: require("../clothes_images/blueoneshouldertop.jpeg"),
        width: 160,
        height: 200,
        id: '3',
        i: 2,
        text: 'LIONESS (M)' },
    { source: require("../clothes_images/chainmailtop.jpeg"),
        width: 160,
        height: 250,
        id: '4',
        i: 3,
        text: 'H&M (XS/S)' },
    { source: require("../clothes_images/greendress.jpeg"),
        width: 160,
        height: 210,
        id: '5',
        i: 4,
        text: 'SHEIN (S)' },
    { source: require("../clothes_images/redscarftop.jpeg"),
        width: 160,
        height: 190,
        id: '6',
        i: 5,
        text: 'PrincessPolly (6)' },
    { source: require("../clothes_images/swirltop.jpeg"),
        width: 160,
        height: 230,
        id: '7',
        i: 6,
        text: 'Adika (S)' },
    { source: require("../clothes_images/yellowbralette.jpeg"),
        width: 160,
        height: 250,
        id: '8',
        i: 7,
        text: 'FreePeople (S)' },
    { source: require("../clothes_images/denimtop.jpeg"),
        width: 160,
        height: 210,
        id: '9',
        i: 8,
        text: 'Amazon (S)' },
    { source: require("../clothes_images/blackstrappydress.jpeg"),
        width: 160,
        height: 200,
        id: '10',
        i: 9,
        text: 'TigerMist (S)' }
];


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


function ExplorePage({ navigation }) {
    return(
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
    )
}


export default ExplorePage;

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

// function ExplorePage({ navigation }) {
//     return(
//         <View>
//             <Text>ExplorePage.js is the place where we should edit the explore page (for now) to get the drawers to work</Text>
//         </View>
//     )
// }

// export default ExplorePage;

// const clothes = [
//     { source: require("../clothes_images/pinkpants.jpeg"),
//         width: 1080,
//         height: 1900 },
//     { source: require("../clothes_images/greenset.jpeg"),
//         width: 1080,
//         height: 1920 },
//     { source: require("../clothes_images/blueoneshouldertop.jpeg"),
//         width: 1080,
//         height: 1950 },
//     { source: require("../clothes_images/chainmailtop.jpeg"),
//         width: 1080,
//         height: 1950 },
//     { source: require("../clothes_images/greendress.jpeg"),
//         width: 1080,
//         height: 1930 },
//     { source: require("../clothes_images/redscarftop.jpeg"),
//         width: 1080,
//         height: 1910 },
//     { source: require("../clothes_images/swirltop.jpeg"),
//         width: 1080,
//         height: 1920 },
//     { source: require("../clothes_images/yellowbralette.jpeg"),
//         width: 1080,
//         height: 1900 },
//     { source: require("../clothes_images/denimtop.jpeg"),
//         width: 1080,
//         height: 1920 },
//     { source: require("../clothes_images/blackstrappydress.jpeg"),
//         width: 1080,
//         height: 1920 }
// ];