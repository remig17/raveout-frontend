import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function NavbarScreen() {
  return (
    <SafeAreaView style={styles.navbar}>
      <Text style={styles.ville}>Marseille</Text>
      <View style={styles.centerContainer}>
        <Image source={require('../assets/logo1.png')} style={styles.logo} />
      </View>
      <TouchableOpacity>
        <FontAwesome name='heart' size={30} color='white' />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    height: 60,
    paddingHorizontal: 20,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  ville: {
    color: 'white',
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  logo: {
    height: 60,
    width: 60,
  },
});
