import React, { useState } from 'react';
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

function Header() {

    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity>
                    <Icon name='menu' color='white' />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name='location-pin' color='red'
                        style={{ marginLeft: '2%' }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ textAlign: "left", fontSize: 12, margin: 3, color: "white", fontWeight: 'bold' }}>
                        Dallas </Text>

                    <Icon
                        name='keyboard-arrow-down' color='white' />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: '30%' }}>
                <Icon style={{ marginRight: 5 }}
                    name='circle-notifications' color='grey' />

                <Button
                    title="Subscribe"
                    buttonStyle={{ backgroundColor: "red", borderRadius: 50, width: 80, padding: 1, marginLeft: '2%' }}
                />
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        height: 60,
        padding: 15,
        justifyContent: "space-between",
        backgroundColor: "black",
        flexDirection: 'row',
    },
});

export default Header;


