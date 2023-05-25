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
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function TicketScreen() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.value);
  console.log("user ville", user);

  return (
    <>
      <NavbarScreen></NavbarScreen>
      <SafeAreaView style={styles.content}>
        <View style={styles.noTicketContainer}>
          <Text style={styles.noTicketTitre}>
            Pas de billet pour le moment.
          </Text>
          <Text style={styles.noTicketText}>
            Envie de raver {user.pseudo} ? Découvre les prochains évènements
            dans ta ville 🪩
          </Text>
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.explorerBtn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.btnText}>Découvrir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#262626",
  },
  noTicketContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#262626",
  },
  noTicketTitre: {
    textAlign: "center",
    fontFamily: "PoppinsBold",
    color: "white",
  },
  noTicketText: {
    textAlign: "center",
    color: "white",
    marginTop: 20,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  explorerBtn: {
    marginTop: 15,
    padding: 15,
    width: 120,
    backgroundColor: "#7C4DFF",
    borderRadius: 10,
  },
  btnText: {
    fontFamily: "PoppinsSemiBold",
    color: "white",
    textAlign: "center",
  },
});
