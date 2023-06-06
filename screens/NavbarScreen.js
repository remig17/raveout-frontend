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
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PORT } from "@env";
import EditCityModal from "../components/EditCityModal";

export default function NavbarScreen() {
  const navigation = useNavigation();

  const user = useSelector((state) => state.user.value);

  const [userData, setUserData] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    fetch(`https://raveout-backend.herokuapp.com/users/userdata/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.user);
      });
  }, []);
  let city;
  if (userData.ville === "") {
    city = <Text style={styles.ville}>Choisissez une ville</Text>;
  } else {
    city = <Text style={styles.ville}>{userData.ville}</Text>;
  }

  return (
    <SafeAreaView style={styles.navbar}>
      <TouchableOpacity style={styles.modifyBtn} onPress={handleOpenModal}>
        <Text>{city}</Text>
      </TouchableOpacity>
      <EditCityModal visible={isModalVisible} onClose={handleCloseModal} />
      <View style={styles.centerContainer}>
        <Image source={require("../assets/logo1.png")} style={styles.logo} />
      </View>
      <TouchableOpacity
        style={styles.heart}
        onPress={() => navigation.navigate("Like")}
      >
        <FontAwesome name="heart-o" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "evenly",
    backgroundColor: "black",
    height: 120,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
  },
  ville: {
    color: "white",
    fontFamily: "PoppinsRegular",
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
