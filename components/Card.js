import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

export default function Card(props) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    props.updateLikedEvents(props.name); // Appeler la fonction parent pour mettre à jour les événements aimés
  };
  return (
    <View style={styles.card}>
      <View style={styles.photocontainer}>
        <Image style={styles.photo} source={{ uri: `${props.photo}` }}></Image>
      </View>
      <View style={styles.descriptioncontainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.lieu}>{props.lieu}</Text>
        <Text style={styles.datedebut}>{props.date_debut}</Text>
        <TouchableOpacity
          onPress={() => {
            handleLike();
          }}
        >
          <FontAwesome
            name={isLiked ? "heart" : "heart-o"} // Utiliser un cœur rempli ou vide en fonction de l'état du like
            size={20}
            color={"#7C4DFF"} // Utiliser une couleur différente pour le like aimé ou non aimé
            style={styles.likeIcon}
          />
        </TouchableOpacity>
        <View style={styles.tagsContainer}>
          <TouchableOpacity style={styles.tag}>{props.tags}</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    width: "100%",
    height: "100%",
  },
  photocontainer: {
    width: "100%",
    height: "100%",
  },
  photo: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  likeIcon: {},
  descriptioncontainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  name: {},
  lieu: {},
  datedebut: {},
  tagsContainer: {},
  tag: {},
});