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

  const handleSave = () => {
    fetch(`http://${PORT}:3000/users/cityUpdate`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: user.token, // Assuming you have the user token available
        ville: userCity,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("console log retour fetch", data);
        if (data.modifiedCount > 0) {
          dispatch(ville({ ville: ville }));
        }
        onClose();
      });
  };
  return (
    <Modal visible={visible} onRequestClose={onClose} style={styles.modal}>
      <View style={styles.container}>
        <TextInput
          placeholder="Ville"
          value={ville}
          onChangeText={setUserCity}
          style={styles.ville}
        />
        <Button title="Enregistrer" onPress={handleSave} />
      </View>
    </Modal>
  );
}
