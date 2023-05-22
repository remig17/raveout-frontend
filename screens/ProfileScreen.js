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
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PORT } from "@env";

export default function ProfileScreen() {
  const [userData, setUserData] = useState([]);

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    fetch(`http://${PORT}:3000/users/userdata/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.user);
      });
  }, []);

  console.log("user Data", userData);

  return (
    <View style={styles.main}>
      <NavbarScreen></NavbarScreen>
      <TouchableOpacity>
        <View style={styles.content}>
          <TouchableOpacity>
            <Image
              style={styles.avatarPhoto}
              source={require("../assets/avatar.png")}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.pseudo}>{userData.pseudo}</Text>
          <Text style={styles.titre}>Description</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!
          </Text>
          <Text style={styles.passedEvents}>Evènements passés</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#262626",
  },
  content: {
    backgroundColor: "#262626",
    marginTop: 10,
  },
  avatarPhoto: {
    width: 100,
    height: 100,
    marginLeft: 130,
  },
  pseudo: {
    fontFamily: "PoppinsBold",
    color: "white",
    fontSize: 30,
    marginTop: 10,
    marginLeft: 130,
  },
  titre: {
    fontFamily: "PoppinsSemiBold",
    color: "white",
    marginLeft: 15,
    marginTop: 30,
  },
  description: {
    fontFamily: "PoppinsRegular",
    color: "white",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    fontSize: 13,
  },
  passedEvents: {
    fontFamily: "PoppinsSemiBold",
    color: "white",
    marginLeft: 15,
    marginTop: 30,
  },
});
