import React, { useState } from "react";
import { Modal, View, Button, TextInput, StyleSheet } from "react-native";
import { PORT } from "@env";
import { useSelector } from "react-redux";
import { login } from "../reducers/user";

const EditProfileModal = ({ visible, onClose }) => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const user = useSelector((state) => state.user.value);
  console.log("données", pseudo, email, description);
  const handleSave = () => {
    fetch(`http://${PORT}:3000/users/modifyProfile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: user.token, // Assuming you have the user token available
        pseudo: pseudo,
        email: email,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("console log retour fetch", data);
        if (data.modifiedCount > 0) {
          dispatch(login({ email: email, pseudo: pseudo }));
        }
        onClose();
      });
  };

  return (
    <Modal visible={visible} onRequestClose={onClose} style={styles.modal}>
      <View style={styles.container}>
        <TextInput
          placeholder="Pseudo"
          value={pseudo}
          onChangeText={setPseudo}
          style={styles.pseudo}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.email}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={styles.description}
        />
        <Button title="Enregistrer" onPress={handleSave} />
      </View>
    </Modal>
  );
};

export default EditProfileModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#262626",
  },
  container: {
    flex: 1,
    marginLeft: 60,
    height: "80%",
    width: "80%",
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
  },
  pseudo: {
    fontFamily: "PoppinsRegular",
    backgroundColor: "red",
    marginBottom: 20,
  },
  email: {
    fontFamily: "PoppinsRegular",
    backgroundColor: "red",
    marginBottom: 20,
  },
  description: { fontFamily: "PoppinsRegular", backgroundColor: "red" },
});
