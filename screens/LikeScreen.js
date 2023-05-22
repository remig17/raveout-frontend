<<<<<<< HEAD
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
=======
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
>>>>>>> e30f0b2ba75ae7d14938a9d569d4723f78cc6ded
import React, { useEffect } from "react";
import NavbarScreen from "./NavbarScreen";
import Card from "../components/Card";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PORT } from "@env";
import { useSelector } from "react-redux";

export default function LikeScreen({ navigation }) {
  const [likesData, setLikesData] = useState([]);
  const user = useSelector((state) => state.user.value);
  const event = useSelector((state) => state.event.value);
  const likedEvents = event.likedEvents


  useEffect(() => {
    fetch(`http://${PORT}:3000/users/showLike/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.like && data.like.length > 0) {
          setLikesData(data.like);
        }
      });
  }, []);

  const handleBrowse = () => {
    navigation.navigate("TabNavigator");
  };

 


  let likes;


  if (event.likedEvents.length > 0) {
    likes = event.likedEvents.map((data, i) => {

      const isLiked = likedEvents.some(event => event.name === data.name)

      return(<Card
        key={i}
        photo={data.photo}
        name={data.name}
        lieu={data.lieu}
        date_debut={data.date_debut}
        tag={data.tags}
        _id={data._id}
        isLiked={isLiked}
      />)
      
      });
  } else {
    likes = (
      <View style={styles.noLikesContainer}>
        <Text style={styles.noLikesText}>
          Vous n'avez pas encore liké d'évènements
        </Text>
        <TouchableOpacity onPress={handleBrowse} style={styles.browseButton}>
          <Text style={styles.browseButtonText}>Parcourir</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <NavbarScreen style={styles.navbar}></NavbarScreen>
      <SafeAreaView style={styles.all}>
        <ScrollView>
          <Text style={styles.intro}>MES EVENEMENTS: </Text>
   
          <View style={styles.main}>{likes}</View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#262626",
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
  },
  all: {
    backgroundColor: "#262626",
    marginBottom: 100,
  },
  intro: {
    fontFamily: "PoppinsBold",
    fontSize: 20,
    color: "white",
    marginBottom: 40,
    marginLeft: 12,
  },
  noLikesContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 180,
  },
  noLikesText: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  browseButton: {
    backgroundColor: "#7C4DFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  browseButtonText: {
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    color: "white",
  },
});
