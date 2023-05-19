import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NavbarScreen from "./NavbarScreen";

export default function ProfileScreen() {
  return (
    <View style={styles.main}>
      <NavbarScreen></NavbarScreen>
      <TouchableOpacity>
        <View style={styles.content}></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "black",
  },
  content: {
    backgroundColor: "#262626",
  },
});
