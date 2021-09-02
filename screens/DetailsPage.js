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
import { Avatar, Card } from 'react-native-elements'
import Header from './Components/Header'




const data = [
  {
    color: "#6495ED",
    imageUrl: "https://image.flaticon.com/icons/png/512/3030/3030786.png",
    title: "Appliance Stores"
  },
  {
    color: "gold",
    imageUrl: "https://image.flaticon.com/icons/png/512/2553/2553629.png",
    title: "Automotive"
  },
  {
    color: "skyblue",
    imageUrl: "https://image.flaticon.com/icons/png/512/3022/3022147.png",
    title: "Barber Shops / Beauty Saloon"
  },
  {
    color: "gold",
    imageUrl: "https://image.flaticon.com/icons/png/512/2059/2059802.png",
    title: "Harry poter"
  },
  {
    color: "#6495ED",
    imageUrl: "https://image.flaticon.com/icons/png/512/3030/3030786.png",
    title: "Appliance Stores"
  },
  {
    color: "gold",
    imageUrl: "https://image.flaticon.com/icons/png/512/2553/2553629.png",
    title: "Automotive"
  },
  {
    color: "skyblue",
    imageUrl: "https://image.flaticon.com/icons/png/512/3022/3022147.png",
    title: "Barber Shops / Beauty Saloon"
  },
  {
    color: "gold",
    imageUrl: "https://image.flaticon.com/icons/png/512/2059/2059802.png",
    title: "Harry poter"
  }
];



export class DetailPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }


  render() {


    return (
      <View style={styles.sectionContainer}>


        <ScrollView style={styles.sectionContainer}>

          <Header />

          <Text style={styles.titleText}>
            Popular Offer Category
          </Text>
          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <View style={{ alignItems: "center" }}>
                  <Avatar
                    rounded
                    avatarStyle={{ margin: 15 }}
                    containerStyle={{ backgroundColor: "black" }}
                    size="large"
                    source={{
                      uri:
                        rowData.imageUrl,
                    }} />
                  <Text style={{ textAlign: "center", fontSize: 12, color: "grey", fontWeight: 'bold', width: 100 }}>
                    {rowData.title}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => index}
          />


          <Text style={styles.titleText}>
            Why become Showfest Member TODAY!
          </Text>

          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <View>
                  <Card
                    title={null}
                    image={{ uri: rowData.imageUrl }}
                    containerStyle={styles.cardDesign}>
                    <View style={{ flexDirection: "row", backgroundColor: "black", height: 50, width: 50, borderRadius: 50 }}>
                      <Text style={{ color: "white", padding: 15, fontWeight: 'bold', fontSize: 20, marginLeft: 4 }}>1</Text>
                      <Text style={{ textAlign: "left", fontSize: 15, margin: '15%', color: "white", fontWeight: 'bold', width: 200 }}>
                        Grab the best seats in the house before they are gone
                      </Text>
                    </View>
                  </Card>
                </View>
              );
            }}
            keyExtractor={(item, index) => index}
          />


          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <View>
                  <Card
                    title={null}
                    image={{ uri: rowData.imageUrl }}
                    containerStyle={styles.cardDesignForMembership}>
                    <Text style={styles.titleText}>
                      Membership Perks
                    </Text>
                    <View style={{ backgroundColor: "white", height: 120, }}>
                      <View style={{ flexDirection: "row", backgroundColor: "red", height: 90, width: 90, borderRadius: 20, margin: '5%' }}>
                        <Text style={{ color: "white", padding: 30, fontWeight: 'bold', fontSize: 20, marginLeft: '2%' }}>01</Text>
                        <View style={{ flexDirection: 'column' }}>
                          <Text style={{ textAlign: "left", fontSize: 17, marginLeft: '8%', color: "black", fontWeight: 'bold', width: 200 }}>
                            Pay in Full Or Pay Monthly
                          </Text>
                          <Text style={{ textAlign: "left", fontSize: 12, marginLeft: '8%', color: "grey", fontWeight: 'bold' }}>
                            Enjoy your showfest membership with easy installments, or pay in full for additional perks
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Card>
                </View>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: "#222",
    height: '100%'
  },


  centerImage: {
    height: 300,
    width: 300,
  },

  titleText: {
    fontSize: 20,
    margin: '4%',
    color: "white",
    alignSelf: 'flex-start',
    fontWeight: "bold"
  },

  cardDesign: {
    width: 360, backgroundColor: "red", height: 90, borderRadius: 10, borderColor: "#333"
  },

  cardDesignForMembership: {
    width: 360, backgroundColor: "black", height: 250, borderRadius: 10, borderColor: "#333"
  }

});

export default DetailPage;
