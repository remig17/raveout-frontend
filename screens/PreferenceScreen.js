import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useState } from "react";

export default function PreferenceScreen({ navigation }) {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonPress = (button) => {
    if (selectedButtons.includes(button)) {
      // Button is already selected, so remove it from the selection
      setSelectedButtons(
        selectedButtons.filter((selectedButton) => selectedButton !== button)
      );
    } else if (selectedButtons.length < 3) {
      // Button is not selected and selection limit is not reached, so add it to the selection
      setSelectedButtons([...selectedButtons, button]);
    }
  };

  const isButtonSelected = (button) => {
    return selectedButtons.includes(button);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisir vos 3 styles favoris :</Text>
      <View style={styles.stylesContainer}>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            isButtonSelected(1) && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(1)}
        >
          <Text style={styles.styleTxt}>Jungle/Drum'n Bass</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            isButtonSelected(2) && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(2)}
        >
          <Text style={styles.styleTxt}>Breakbeat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            isButtonSelected(3) && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(3)}
        >
          <Text style={styles.styleTxt}>Bass Music</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            isButtonSelected(4) && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(4)}
        >
          <Text style={styles.styleTxt}>Trance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            isButtonSelected(5) && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(5)}
        >
          <Text style={styles.styleTxt}>Techno</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            isButtonSelected(6) && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(6)}
        >
          <Text style={styles.styleTxt}>House</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            isButtonSelected(7) && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(7)}
        >
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
  selectedButton: {
    width: 300,
    height: 40,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: "#7C4DFF",
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
