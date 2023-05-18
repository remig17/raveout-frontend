import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTags } from "../reducers/user";
import { PORT } from "@env";

export default function PreferenceScreen({ navigation }) {
  const user = useSelector((state) => state.user.value);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleButtonPress = (style) => {
    if (selectedButtons.includes(style)) {
      setSelectedButtons(selectedButtons.filter((s) => s !== style));
    } else if (selectedButtons.length < 3) {
      setSelectedButtons([...selectedButtons, style]);
    }
  };
  console.log("reducer", user);

  const handleSubmit = () => {
    if (selectedButtons.length === 3) {
      fetch(`http://${PORT}:3000/users/musicUpdate`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: user.token, tags: selectedButtons }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            dispatch(addTags(selectedButtons));
            navigation.navigate("Home");
          } else {
            setErrorMessage("Veuillez sélectionner exactement trois styles.");
          }
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisir vos 3 styles favoris :</Text>
      <View style={styles.stylesContainer}>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            selectedButtons.includes("Jungle/Drum'n Bass") && {
              backgroundColor: "#7C4DFF",
            },
          ]}
          onPress={() => handleButtonPress("Jungle/Drum'n Bass")}
        >
          <Text style={styles.styleTxt}>Jungle/Drum'n Bass</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.styleBtn,
            selectedButtons.includes("Breakbeat") && {
              backgroundColor: "#7C4DFF",
            },
          ]}
          onPress={() => handleButtonPress("Breakbeat")}
        >
          <Text style={styles.styleTxt}>Breakbeat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            selectedButtons.includes("Bass Music") && {
              backgroundColor: "#7C4DFF",
            },
          ]}
          onPress={() => handleButtonPress("Bass Music")}
        >
          <Text style={styles.styleTxt}>Bass Music</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            selectedButtons.includes("Trance") && {
              backgroundColor: "#7C4DFF",
            },
          ]}
          onPress={() => handleButtonPress("Trance")}
        >
          <Text style={styles.styleTxt}>Trance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            selectedButtons.includes("Techno") && {
              backgroundColor: "#7C4DFF",
            },
          ]}
          onPress={() => handleButtonPress("Techno")}
        >
          <Text style={styles.styleTxt}>Techno</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            selectedButtons.includes("House") && { backgroundColor: "#7C4DFF" },
          ]}
          onPress={() => handleButtonPress("House")}
        >
          <Text style={styles.styleTxt}>House</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            selectedButtons.includes("Experimental") && {
              backgroundColor: "#7C4DFF",
            },
          ]}
          onPress={() => handleButtonPress("Experimental")}
        >
          <Text style={styles.styleTxt}>Experimental</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.styleBtn,
            selectedButtons.includes("Hard Music") && {
              backgroundColor: "#7C4DFF",
            },
          ]}
          onPress={() => handleButtonPress("Hard Music")}
        >
          <Text style={styles.styleTxt}>Hard Music</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.validerBtn}
          onPress={() => {
            handleSubmit();
          }}
        >
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
  errorMessage: {
    color: "red",
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    marginBottom: 20,
  },
});
