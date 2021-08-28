/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  FlatList,

} from 'react-native';
import { Card } from 'react-native-elements'
import { Chip, TouchableRipple } from 'react-native-paper';
import { withNavigation } from 'react-navigation';



const data = [
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


export class HomePage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }


  render() {


    return (
      <ScrollView style={styles.sectionContainer}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/header.png')}
            />
          </View>
          <Card containerStyle={{ backgroundColor: "black", borderColor: "#333", padding: 20, borderRadius: 15 }} >
            <Image
              style={styles.centerImage}
              source={require('../assets/card1.png')}
            />
          </Card>
          <Text style={styles.titleText}>
            Experiences
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Chip onPress={() => this.setState({ data: data })} textStyle={{ color: "white", fontWeight: "bold", marginLeft: 20 }} selectedColor="white" style={{ width: 80, backgroundColor: "red", height: 35, marginRight: 20, textAlign: "center" }}>Live</Chip>
            <Chip onPress={() => this.setState({ data: data2 })} textStyle={{ color: "white", fontWeight: "bold", marginLeft: 20 }} selectedColor="white" style={{ backgroundColor: "red", height: 35, marginRight: 20, }}>Movies</Chip>
            <Chip onPress={() => this.setState({ data: data3 })} textStyle={{ color: "white", fontWeight: "bold", marginLeft: 20 }} selectedColor="white" style={{ backgroundColor: "red", height: 35, marginRight: 20, }}>Hotstar</Chip>
          </View>

          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <TouchableRipple
                  onPress={() => this.props.navigation.navigate("Details")}
                  rippleColor="rgba(0, 0, 0, .32)">       
                  <Card
                    title={null}
                    image={{ uri: rowData.imageUrl }}
                    containerStyle={styles.cardDesign}
                  >
                    <View style={{ margin: 10, backgroundColor: rowData.color, height: 180, borderRadius: 8 }}>

                      <Text style={{ textAlign: "center", fontSize: 25, margin: 20, color: "white", fontWeight: 'bold' }}>
                        {rowData.title}
                      </Text>

                      <Text style={{ textAlign: "center", fontSize: 15, margin: 10, color: "white", fontWeight: 'bold' }}>
                        Dallas
                      </Text>

                      <Text style={{ textAlign: "center", fontSize: 15, marginTop: 20, color: "white", fontWeight: 'bold' }}>
                        Curtis Culwell Center
                      </Text>
                      <Text style={{ textAlign: "center", fontSize: 15, margin: 2, color: "white", fontWeight: 'bold' }}>
                        20-Mar-2022
                      </Text>

                      <Image
                        style={styles.shareButton}
                        source={{
                          uri: 'https://i.dlpng.com/static/png/6987854_preview.png',
                        }} />

                    </View>

                    <Text style={{ textAlign: "left", fontSize: 15, margin: 10, color: "white", fontWeight: 'bold' }}>
                      {rowData.title}
                    </Text>
                    <Text style={{ textAlign: "left", fontSize: 12, margin: 10, marginTop: 30, color: "darkgrey", fontWeight: 'bold' }}>
                      Curtis Culwell Center
                    </Text>

                    <Text style={{ textAlign: "left", fontSize: 12, marginLeft: 10, color: "grey", fontWeight: 'bold' }}>
                      Go back in time and revisit
                    </Text>
                    <Text style={{ textAlign: "left", fontSize: 12, marginLeft: 10, color: "grey", fontWeight: 'bold' }}>
                      the legendary symphonies
                    </Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <Text style={{ textAlign: "left", fontSize: 16, margin: 20, color: "red", fontWeight: 'bold' }}>
                        20
                      </Text>
                      <Text style={{ textAlign: "left", fontSize: 16, marginLeft: -70, margin: 20, color: "grey", fontWeight: 'bold' }}>
                        March
                      </Text>
                      <Text style={{ textAlign: "left", fontSize: 16, margin: 20, color: "red", fontWeight: 'bold' }}>
                        02 PM
                      </Text>
                    </View>
                  </Card>
                </TouchableRipple>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: "#222",
    height: '100%'
  },

  header: {
    justifyContent: "space-between",
    backgroundColor: "black",
    flexDirection: 'row',
  },

  tinyLogo: {
    width: '100%',
    backgroundColor: "grey",
    height: 50,
  },

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

  titleText: {
    fontSize: 20,
    margin: '5%',
    color: "white",
    alignSelf: 'flex-start',
    fontWeight: "bold"
  },

  cardDesign: {
    padding: 10, margin: 20, width: 160, backgroundColor: "black", height: 400, width: 300, borderRadius: 10, borderColor: "#333"
  }

});

export default HomePage;
