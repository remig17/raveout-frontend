import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavbarScreen from './NavbarScreen';

export default function TicketScreen(){


    return(
        <View style={styles.main}>
            <NavbarScreen></NavbarScreen>
            <View style={styles.content}></View>
        </View>

    )
}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: 'black'
    },
    content: {
        backgroundColor: "#262626"
    }
})