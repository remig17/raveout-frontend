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

  const UserData = userData.map((data, i) => {
    return (
      <View
        key={i}
        pseudo={data.photo}
        email={data.name}
        password={data.password}
        avatar={data.avatar}
        ville={data.ville}
        tags={[data.tags]}
        tickets={[data.tickets]}
        like={[data.likes]}
      />
    );
  });

  return (
    <View style={styles.main}>
      <NavbarScreen></NavbarScreen>
      <TouchableOpacity>
        <View style={styles.content}>{UserData}</View>
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
