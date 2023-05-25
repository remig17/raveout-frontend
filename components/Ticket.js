import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Moment from "moment";
import "moment/locale/fr";

export default function Card(props) {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.value);

  return (
    <View style={styles.card}>
      <View style={styles.photocontainer}>
        <TouchableOpacity>
          <Image
            style={styles.photo}
            source={{ uri: `${props.photo}` }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptioncontainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.lieu}>{props.lieu}</Text>
        <Text style={styles.datedebut}>{props.date_debut}</Text>
        <Text style={styles.telecharger}>Télécharger votre ticket</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    height: 200,
  },
  photo: {
    resizeMode: "contain",
    width: 120,
    height: 160,
    marginRight: 10,
  },
  descriptioncontainer: {
    flex: 1,
    backgroundColor: "#262626",
    justifyContent: "center",
    paddingVertical: 10,
  },
  name: {
    fontFamily: "PoppinsBold",
    color: "white",
    marginBottom: 5,
  },
  lieu: {
    color: "#9B9B9B",
    fontFamily: "PoppinsRegular",
    marginBottom: 5,
  },
  datedebut: {
    color: "#9B9B9B",
    fontFamily: "PoppinsRegular",
  },
  //   card: {
  //     flex: 1,
  //     flexDirection: "row",
  //     justifyContent: "flex-start",
  //     alignContent: "center",
  //     width: 350,
  //     height: 200,
  //   },
  //   photocontainer: {
  //     width: "100%",
  //     height: "100%",
  //   },
  //   photo: {
  //     resizeMode: "contain",
  //     width: "50%",
  //     height: "80%",
  //   },
  //   descriptioncontainer: {
  //     marginTop: 10,
  //     backgroundColor: "#262626",
  //     justifyContent: "center",
  //     alignContent: "center",
  //   },
  //   name: {
  //     fontFamily: "PoppinsBold",
  //     color: "white",
  //   },
  //   lieu: {
  //     color: "#9B9B9B",
  //     fontFamily: "PoppinsRegular",
  //   },
  //   datedebut: {
  //     color: "#9B9B9B",
  //     fontFamily: "PoppinsRegular",
  //   },
});
