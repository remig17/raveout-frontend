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
import { useDispatch } from "react-redux";
import { addTags } from '../reducers/user';

export default function PreferenceScreen({ navigation }) {

  const [selectedButtons, setSelectedButtons] = useState([]);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  const handleButtonPress = (style) => {
    if (selectedButtons.includes(style)) {
      setSelectedButtons(selectedButtons.filter((s) => s !== style));
    } else if (selectedButtons.length < 3) {
      setSelectedButtons([...selectedButtons, style]);
    }
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (selectedButtons.length === 3) {
      fetch("http://10.2.2.38:3000/users/musicUpdate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token, tags: selectedButtons }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            dispatch(addTags({ tags: data.tags, token: token }));
            navigation.navigate("Home");
          }
        });
    } else {
      setErrorMessage("Veuillez sélectionner exactement trois styles.");
    }
  };
  
  
    
  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisir vos 3 styles favoris :</Text>
      <View style={styles.stylesContainer}>
      <TouchableOpacity style={[ styles.styleBtn,    selectedButtons.includes("Jungle/Drum'n Bass") && {backgroundColor: "#44BBA4" }, ]} onPress={() => handleButtonPress("Jungle/Drum'n Bass")}>
          <Text style={styles.styleTxt}>Jungle/Drum'n Bass</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[ styles.styleBtn,    selectedButtons.includes("Breakbeat") && {backgroundColor: "#44BBA4" }, ]} onPress={() => handleButtonPress("Breakbeat")}>
          <Text style={styles.styleTxt}>Breakbeat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ styles.styleBtn,    selectedButtons.includes("Bass Music") && {backgroundColor: "#44BBA4" }, ]} onPress={() => handleButtonPress("Bass Music")}>
          <Text style={styles.styleTxt}>Bass Music</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ styles.styleBtn,    selectedButtons.includes("Trance") && {backgroundColor: "#44BBA4" }, ]} onPress={() => handleButtonPress("Trance")}>
          <Text style={styles.styleTxt}>Trance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ styles.styleBtn,    selectedButtons.includes("Techno") && {backgroundColor: "#44BBA4" }, ]} onPress={() => handleButtonPress("Techno")}>
          <Text style={styles.styleTxt}>Techno</Text>
      </TouchableOpacity>
       <TouchableOpacity style={[ styles.styleBtn,    selectedButtons.includes("House") && {backgroundColor: "#44BBA4" }, ]} onPress={() => handleButtonPress("House")}>
          <Text style={styles.styleTxt}>House</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ styles.styleBtn,    selectedButtons.includes("Experimental") && {backgroundColor: "#44BBA4" }, ]} onPress={() => handleButtonPress("Experimental")}>
          <Text style={styles.styleTxt}>Experimental</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ styles.styleBtn,    selectedButtons.includes("Hard Music") && {backgroundColor: "#44BBA4" }, ]} onPress={() => handleButtonPress("Hard Music")}>
          <Text style={styles.styleTxt}>Hard Music</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.validerBtn} onPress={() => {handleSubmit()}}>
          <Text style={styles.validerTxt}>Valider</Text>
        </TouchableOpacity>
      </View>
      {/* Afficher le message d'erreur */}
      {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
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
  errorMessage: {
    color: "red",
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    marginBottom: 20,
  }
});
