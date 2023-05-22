import React, { useState } from "react";
import { Modal, View, Button, TextInput, StyleSheet } from "react-native";

const EditProfileModal = ({ visible, onClose }) => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    // Effectuez ici la logique de sauvegarde des informations de l'utilisateur
    // ...

    // Fermez la modal après la sauvegarde
    onClose();
  };

  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <View>
        <TextInput
          placeholder="Pseudo"
          value={pseudo}
          onChangeText={setPseudo}
        />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <Button title="Enregistrer" onPress={handleSave} />
      </View>
    </Modal>
  );
};

export default EditProfileModal;

const styles = StyleSheet.create({});
