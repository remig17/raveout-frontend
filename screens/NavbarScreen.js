import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export default function NavbarScreen() {

  const navigation = useNavigation();
  
  return (
   
        <SafeAreaView style={styles.navbar}>
        <Text style={styles.ville}>Marseille</Text>
        <View style={styles.centerContainer}>
            <Image source={require('../assets/logo1.png')} style={styles.logo} />
        </View>
        <TouchableOpacity style={styles.heart} onPress={() => navigation.navigate('Like')}>
            <FontAwesome name='heart' size={30} color='white'/>
        </TouchableOpacity>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'evenly',
    backgroundColor: 'black',
    height: 120,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  ville: {
    color: 'white',
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    marginLeft: 10,
  },
  logo: {
    height: 60,
    width: 60,
  },
  heart: {
    marginRight: 10,
  },
});
