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
import { useEffect, useState } from "react";
import { PORT } from "@env";

export default function ProfileScreen() {
  const [userData, setUserData] = useState([]);

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    fetch(`http://${PORT}:3000/users/userdata/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  return (
    <View style={styles.main}>
      <NavbarScreen></NavbarScreen>
      <TouchableOpacity>
        <View style={styles.content}>{userData}</View>
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
