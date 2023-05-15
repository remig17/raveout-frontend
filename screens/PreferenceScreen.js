import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function PreferenceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisir vos 3 styles favoris :</Text>
      <View style={styles.stylesContainer}>
        <TouchableOpacity style={styles.jungleBtn}>
          <Text style={styles.jungleTxt}>Jungle/Drum'n Bass</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.breakbeatBtn}>
          <Text style={styles.breakbeatTxt}>Breakbeat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bassBtn}>
          <Text style={styles.bassTxt}>Bass Music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tranceBtn}>
          <Text style={styles.tranceTxt}>Trance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.technoBtn}>
          <Text style={styles.technoTxt}>Techno</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.houseBtn}>
          <Text style={styles.houseTxt}>House</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.experimentalBtn}>
          <Text style={styles.experimentalTxt}>Experimental</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.validerBtn}>
          <Text style={styles.validerTxt}>Valider</Text>
        </TouchableOpacity>
      </View>

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
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
    flex: 0.8,
    alignItems: "center",
    fontFamily: "PoppinsBold",
    color: "white",
  },
  stylesContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
  },
  jungleBtn: {
    width: 300,
    height: 40,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: "#262626",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  jungleTxt: {
    color: "white",
    fontFamily: "PoppinsRegular",
  },
  breakbeatBtn: {
    width: 300,
    height: 40,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: "#262626",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  breakbeatTxt: {
    color: "white",
    fontFamily: "PoppinsRegular",
  },
  bassBtn: {
    width: 300,
    height: 40,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: "#262626",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  bassTxt: {
    color: "white",
    fontFamily: "PoppinsRegular",
  },
  tranceBtn: {
    width: 300,
    height: 40,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: "#262626",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  tranceTxt: {
    color: "white",
    fontFamily: "PoppinsRegular",
  },
  technoBtn: {
    width: 300,
    height: 40,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: "#262626",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  technoTxt: {
    color: "white",
    fontFamily: "PoppinsRegular",
  },
  houseBtn: {
    width: 300,
    height: 40,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: "#262626",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  houseTxt: {
    color: "white",
    fontFamily: "PoppinsRegular",
  },
  experimentalBtn: {
    width: 300,
    height: 40,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: "#262626",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  experimentalTxt: {
    color: "white",
    fontFamily: "PoppinsRegular",
  },
  validerBtn: {
    flex: 0.4,
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
