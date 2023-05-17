import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function LikeScreen(){


    return(
        <View style={styles.main}>
            <Text style={styles.text}>LikeScreen</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
    }
})