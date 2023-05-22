import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Button,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NavbarScreen from "./NavbarScreen";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PORT } from "@env";
import EditProfileModal from "../components/EditProfileModal";

export default function ProfileScreen() {
  const [userData, setUserData] = useState([]);

  const user = useSelector((state) => state.user.value);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    fetch(`http://${PORT}:3000/users/userdata/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.user);
      });
  }, []);

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
          <Button
            style={styles.modifyBtn}
            title="Modifier mes informations"
            onPress={handleOpenModal}
          />
          <Text style={styles.titre}>Description</Text>
          <Text style={styles.description}>{userData.description}</Text>
          <Text style={styles.passedEvents}>Evènements passés</Text>
        </View>
      </TouchableOpacity>
      <EditProfileModal visible={isModalVisible} onClose={handleCloseModal} />
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
    width: 75,
    height: 75,
    marginLeft: 130,
    marginTop: 10,
  },
  pseudo: {
    fontFamily: "PoppinsBold",
    color: "white",
    fontSize: 25,
    marginTop: 10,
    marginLeft: 130,
  },
  modifyBtn: {
    marginTop: 15,
    padding: 15,
    marginLeft: 120,
    width: 120,
    backgroundColor: "#7C4DFF",
    borderRadius: "10%",
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
