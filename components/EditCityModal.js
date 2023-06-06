import React from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ville } from "../reducers/user";
import { PORT } from "@env";

const EditCityModal = ({ visible, onClose }) => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [userCity, setUserCity] = useState("");

  //
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`https://raveout-backend-beige.vercel.app/users/userdata/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setUserCity(data.user);
      });
  }, []);

  const handleSave = () => {
    fetch(`https://raveout-backend-beige.vercel.app/users/cityUpdate`, {
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
        // if (data.modifiedCount > 0) {
        dispatch(ville(userCity));
      onClose()        
      });
  };
  return (
    <Modal visible={visible} onRequestClose={onClose} style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.title}>Modifier sa ville</Text>
        <TextInput
          placeholder="Ville"
          onChangeText={setUserCity}
          style={styles.input}
        />
        <View>
          <TouchableOpacity style={styles.save} onPress={handleSave}>
            <Text style={styles.textbtn}>Enregistrer</Text>
          </TouchableOpacity>
        </View>
        </View>
    </Modal>
  );
};

export default EditCityModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#262626",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "PoppinsBold",
    color: "white",
    textAlign: "center",
    marginBottom: 50,
    fontSize: 18,
  },
  input: {
    // flex: 0.5,
    backgroundColor: "#F2F3F3",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 30,
    marginBottom: 30,
    borderRadius: 5,
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  save: {
    backgroundColor: "#7C4DFF",
    color: "white",
    fontFamily: "PoppinsBold",
    borderRadius: "5%",
  },
  textbtn: {
    color: "white",
    padding: 10,
    flexDirection: "row",
  },
});
