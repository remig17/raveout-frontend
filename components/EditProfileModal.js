import React, { useState } from "react";
import {
  Modal,
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { PORT } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";

const EditProfileModal = ({ visible, onClose }) => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handleSave = () => {
    fetch(`https://raveout-backend-hypqcn3ef-invectivsystem.vercel.app/users/modifyProfile`, {
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
        // if (data.modifiedCount > 0) {
        dispatch(login({ email: email, pseudo: pseudo, token: user.token }));
        // }
        onClose();
      });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal visible={visible} onRequestClose={onClose}>
          <View style={styles.container}>
            <Text style={styles.title}>MODIFIER VOS INFORMATIONS</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Pseudo"
                value={pseudo}
                onChangeText={setPseudo}
                style={styles.input}
              />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
              />
              <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                style={styles.input}
              />
              <TouchableOpacity style={styles.save} onPress={handleSave}>
                <Text style={styles.textbtn}>Enregistrer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default EditProfileModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#262626",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontFamily: "PoppinsBold",
    color: "white",
    textAlign: "center",
    marginTop: 150,
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
  },
});
