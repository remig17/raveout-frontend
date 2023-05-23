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
import { ville } from "../reducers/user";

export default function NavbarScreen() {
  const user = useSelector((state) => state.user.value);

  const [userCity, setUserCity] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetch(`http://${PORT}:3000/users/userdata/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "c la data");
        setUserCity(data.user);
      });
  }, []);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.navbar}>
      <TouchableOpacity>
        <Button
          style={styles.modifyBtn}
          title="${userCity.ville}"
          onPress={handleOpenModal}
        />
      </TouchableOpacity>
      <EditProfileModal visible={isModalVisible} onClose={handleCloseModal} />
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
