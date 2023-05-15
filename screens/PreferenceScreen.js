import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";

export default function PreferenceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisir vos 3 styles favoris :</Text>
      <View style={styles.stylesContainer}>
        <TouchableOpacity style={styles.styleBtn}>
          <Text style={styles.styleTxt}>Jungle/Drum'n Bass</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.styleBtn}>
          <Text style={styles.styleTxt}>Breakbeat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.styleBtn}>
          <Text style={styles.styleTxt}>Bass Music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.styleBtn}>
          <Text style={styles.styleTxt}>Trance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.styleBtn}>
          <Text style={styles.styleTxt}>Techno</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.styleBtn}>
          <Text style={styles.styleTxt}>House</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.styleBtn}>
          <Text style={styles.styleTxt}>Experimental</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.validerBtn}>
          <Text style={styles.validerTxt}>Valider</Text>
        </TouchableOpacity>
      </View>

      {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    alignItems: "center",
    fontFamily: "PoppinsBold",
    color: "white",
    marginTop: 70,
  },
  stylesContainer: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "center",
    marginTop: 30,
  },
  styleBtn: {
    width: 300,
    height: 40,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: "#262626",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    marginTop: -15,
  },
  styleTxt: {
    color: "white",
    fontFamily: "PoppinsRegular",
  },
  validerBtn: {
    width: 150,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 50,
    paddingTop: 8,
    backgroundColor: "#7C4DFF",
    borderRadius: 10,
    marginLeft: 70,
    paddingBottom: 10,
  },
  validerTxt: {
    color: "white",
    fontFamily: "PoppinsBold",
  },
});
