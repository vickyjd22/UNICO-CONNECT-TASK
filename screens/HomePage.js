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
import { Card, Button } from 'react-native-elements'
import { Chip, TouchableRipple } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements'
import Header from './Components/Header'
import Cards from './Components/Cards.js'




export class HomePage extends React.Component {


  render() {


    return (
      <View style={styles.sectionContainer} >

        <ScrollView>

          <Header />

          <View style={{ flex: 1, alignItems: "center" }}>
            <Card containerStyle={{ backgroundColor: "black", borderColor: "#333", padding: '2%', borderRadius: 15 }} >
              <View style={{ alignSelf: "center", margin: '2%', backgroundColor: "black", height: 260, borderRadius: 8 }}>
                <Text style={{ textAlign: "left", fontSize: 20, margin: '2%', color: "white", fontWeight: 'bold' }}>
                  Welcome to </Text>
                <Text style={{ textAlign: "center", fontStyle: "italic", fontSize: 35, margin: '2%', color: "tomato", fontWeight: 'bold' }}>
                  SHOWFEST </Text>
                <Text style={{ textAlign: "left", fontSize: 12, margin: '2%', color: "white", fontWeight: 'bold' }}>
                  Bollywood, Lifestyle, Rewards, Community. </Text>
                <Text style={{ textAlign: "left", fontSize: 12, color: "grey", maxWidth: '80%', fontWeight: 'bold' }}>
                  One-of-a-kind lifestyle membership program with state-of-the-art productions Showfest brings you yhe future of Bollywood Live Experiences with a modern and striking twist plus a multitude of ongoing benefits throughout the year.</Text>
                <Button
                  title="Know More"
                  buttonStyle={{ backgroundColor: "red", borderRadius: 50, width: 130, padding: 3, margin: '3%' }} />
              </View>
            </Card>
          </View>

          <View style={{ flex: 2 }}>
            <Text style={styles.titleText}>
              Experiences
            </Text>
            <Cards />
          </View>
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

  tinyLogo: {
    width: '100%',
    backgroundColor: "grey",
    height: 50,
  },

  titleText: {
    fontSize: 20,
    margin: '5%',
    color: "white",
    alignSelf: 'flex-start',
    fontWeight: "bold"
  },

});

export default HomePage;
