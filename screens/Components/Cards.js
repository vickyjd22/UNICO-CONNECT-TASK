import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Avatar, Card } from 'react-native-elements'
import { Icon, Button } from 'react-native-elements'
import { Chip, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const data1 = [
  {
    color: "#6495ED",
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.travelandleisure.com%2Fculture-design%2Fwhy-we-click-on-blue-things&psig=AOvVaw3KvoaRjO5z_qujZGrAzkVH&ust=1630185277639000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDChsaP0vICFQAAAAAdAAAAABAD",
    title: "Rewind"
  },
  {
    color: "gold",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "Harry poter"
  },
  {
    color: "skyblue",
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.travelandleisure.com%2Fculture-design%2Fwhy-we-click-on-blue-things&psig=AOvVaw3KvoaRjO5z_qujZGrAzkVH&ust=1630185277639000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDChsaP0vICFQAAAAAdAAAAABAD",
    title: "Spider Man"
  },
  {
    color: "gold",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "Harry poter"
  }
];

const data2 = [
  {
    color: "purple",
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.travelandleisure.com%2Fculture-design%2Fwhy-we-click-on-blue-things&psig=AOvVaw3KvoaRjO5z_qujZGrAzkVH&ust=1630185277639000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDChsaP0vICFQAAAAAdAAAAABAD",
    title: "Captain America"
  },
  {
    color: "green",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "Hulk"
  },
  {
    color: "gold",
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.travelandleisure.com%2Fculture-design%2Fwhy-we-click-on-blue-things&psig=AOvVaw3KvoaRjO5z_qujZGrAzkVH&ust=1630185277639000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDChsaP0vICFQAAAAAdAAAAABAD",
    title: "Black Shadow"
  },
  {
    color: "gold",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "Thor"
  }
];

const data3 = [
  {
    color: "violet",
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.travelandleisure.com%2Fculture-design%2Fwhy-we-click-on-blue-things&psig=AOvVaw3KvoaRjO5z_qujZGrAzkVH&ust=1630185277639000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDChsaP0vICFQAAAAAdAAAAABAD",
    title: "something"
  },
  {
    color: "tomato",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    color: "pink",
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.travelandleisure.com%2Fculture-design%2Fwhy-we-click-on-blue-things&psig=AOvVaw3KvoaRjO5z_qujZGrAzkVH&ust=1630185277639000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDChsaP0vICFQAAAAAdAAAAABAD",
    title: "something"
  },
  {
    color: "gold",
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  }
];



function Cards() {


  const [data, setData] = useState(data1);
  const navigation = useNavigation();


  return (
    <View style={{ flex: 3 }}>

      <View style={{ flexDirection: "row", marginLeft: '5%', justifyContent: 'space-evenly' }}>
        <Chip onPress={() => setData(data1)} icon="wifi" textStyle={{ color: "white", fontWeight: "bold" }} selectedColor="white" style={{ flex: 3, margin: '2%', backgroundColor: "red", height: 35 }}>Live</Chip>
        <Chip onPress={() => setData(data2)} icon="movie" textStyle={{ color: "white", fontWeight: "bold" }} selectedColor="white" style={{ flex: 4, margin: '2%', backgroundColor: "red", height: 35 }}>Movies</Chip>
        <Chip onPress={() => setData(data3)} icon="play" textStyle={{ color: "white", fontWeight: "bold" }} selectedColor="white" style={{ flex: 4, margin: '2%', backgroundColor: "red", height: 35 }}>Hotstar</Chip>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item: rowData }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Details")}>
              <Card
                title={null}
                image={{ uri: rowData.imageUrl }}
                containerStyle={styles.cardDesign}>

                <View style={{ margin: '2%', backgroundColor: rowData.color, height: 180, borderRadius: 8 }}>
                  <Text style={{ textAlign: "center", fontSize: 25, margin: '4%', color: "white", fontWeight: 'bold' }}>
                    {rowData.title}
                  </Text>
                  <Text style={{ textAlign: "center", fontSize: 15, margin: '4%', color: "white", fontWeight: 'bold' }}>
                    Dallas
                  </Text>
                  <Text style={{ textAlign: "center", fontSize: 15, marginTop: '4%', color: "white", fontWeight: 'bold' }}>
                    Curtis Culwell Center
                  </Text>
                  <Text style={{ textAlign: "center", fontSize: 15, margin: '2%', color: "white", fontWeight: 'bold' }}>
                    20-Mar-2022
                  </Text>
                  <Image
                    style={styles.shareButton}
                    source={{
                      uri: 'https://i.dlpng.com/static/png/6987854_preview.png',
                    }} />
                </View>

                <Text style={{ textAlign: "left", fontSize: 15, margin: '4%', color: "white", fontWeight: 'bold' }}>
                  {rowData.title}
                </Text>
                <Text style={{ textAlign: "left", fontSize: 12, margin: '4%', marginTop: '6%', color: "darkgrey", fontWeight: 'bold' }}>
                  Curtis Culwell Center
                </Text>
                <Text style={{ textAlign: "left", fontSize: 12, marginLeft: '4%', color: "grey", fontWeight: 'bold' }}>
                  Go back in time and revisit
                </Text>
                <Text style={{ textAlign: "left", fontSize: 12, marginLeft: '4%', color: "grey", fontWeight: 'bold' }}>
                  the legendary symphonies
                </Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ textAlign: "left", fontSize: 16, margin: '5%', color: "red", fontWeight: 'bold' }}>
                    20
                  </Text>
                  <Text style={{ textAlign: "left", fontSize: 16, marginLeft: -90, margin: '5%', color: "grey", fontWeight: 'bold' }}>
                    March
                  </Text>
                  <Text style={{ textAlign: "left", fontSize: 16, margin: '5%', color: "red", fontWeight: 'bold' }}>
                    02 PM
                  </Text>
                </View>

              </Card>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </View>

  );

}

const styles = StyleSheet.create({
  shareButton: {
    width: 40,
    backgroundColor: "white",
    height: 40,
    borderRadius: 60,
    marginLeft: 200,
  },

  centerImage: {
    height: 300,
    width: 300,
  },

  cardDesign: {
    padding: 10, margin: 20, backgroundColor: "black", height: 370, width: 300, borderRadius: 10, borderColor: "#333", marginBottom: 50
  }
});

export default Cards;


