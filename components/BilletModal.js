import React, { useState } from "react";
import {
  Modal,
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function BilletModal({ isModalVisible, onClose }) {
  return (
    <SafeAreaView>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.container}>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}>Fermer</Text>
          </TouchableOpacity>
          <View style={styles.text}>
            <Text style={styles.textContent}>
              Votre billet a bien été ajouté !
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.billetBtn}>
              <Text style={styles.btnText}>Voir mon billet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flex: 1,
    justifyContent: "center",
  },
  textContent: {
    color: "white",
    textAlign: "center",
  },
  closeText: {
    color: "white",
  },
  closeBtn: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 50,
    marginLeft: 250,
  },
  btnContainer: {
    flex: 1,
  },
  billetBtn: {
    backgroundColor: "#7C4DFF",
    borderRadius: 5,
    width: 120,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});
