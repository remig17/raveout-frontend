import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PORT } from "@env";
import { addEventToLike, removeEventFromLike } from "../reducers/event";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Card(props) {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const updateLikedEvents = () => {
    if (isLiked) {
      dispatch(removeEventFromLike(props._id));
    } else {
      dispatch(addEventToLike(props));
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);

    fetch(`http://${PORT}:3000/users/like`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: user.token, eventId: props._id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          updateLikedEvents();
        }
      });
  };
  return (
    <View style={styles.card}>
      <View style={styles.photocontainer}>
        <TouchableOpacity
          style={styles.photoContainer}
          onPress={() => navigation.navigate("Event")}
        >
          <Image
            style={styles.photo}
            source={{ uri: `${props.photo}` }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptioncontainer}>
        <Text style={styles.name}>{props.name}</Text>
        <View>
          <View style={styles.heartcontainer}>
            <View>
              <Text style={styles.organisateur}>Par {props.organisateur}</Text>
              <TouchableOpacity style={styles.btnBillet}>
                <Text style={styles.textBtn}>Billet</Text>
              </TouchableOpacity>
              <Text style={styles.lieu}>{props.lieu}</Text>
              <Text style={styles.datedebut}>{props.date_debut}</Text>
            </View>
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
          </View>
        </View>
        <View style={styles.tagsContainer}>
          <Text style={styles.tags}>{props.tags}</Text>
        </View>
        <Text style={styles.description}>{props.description}</Text>
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
    height: 500,
    marginBottom: 50,
    backgroundColor: "#262626",
  },
  photocontainer: {
    width: "100%",
    height: "70%",
  },
  photo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    paddingBottom: 30,
  },
  likeIcon: {
    marginRight: 10,
  },
  descriptioncontainer: {
    marginTop: 10,
    backgroundColor: "#262626",
    justifyContent: "center",
    alignContent: "center",
  },
  description: {
    color: "white",
    marginLeft: 10,
    marginRight: 10,
  },
  name: {
    fontFamily: "PoppinsBold",
    color: "white",
    fontSize: 25,
    marginTop: 10,
    marginLeft: 22,
  },
  organisateur: {
    fontFamily: "PoppinsSemiBold",
    color: "white",
    fontSize: 15,
    marginTop: 10,
    marginLeft: 92,
  },
  btnBillet: {
    marginTop: 15,
    padding: 15,
    marginLeft: 120,
    width: 120,
    backgroundColor: "#7C4DFF",
    borderRadius: "10%",
  },
  textBtn: {
    fontFamily: "PoppinsSemiBold",
    color: "white",
    paddingLeft: 25,
  },
  lieu: {
    paddingTop: 15,
    marginLeft: 5,
    color: "#9B9B9B",
    fontFamily: "PoppinsRegular",
  },
  datedebut: {
    marginLeft: 5,
    color: "#9B9B9B",
    fontFamily: "PoppinsRegular",
  },
  tagsContainer: { justifyContent: "center", alignContent: "center" },
  tags: { fontFamily: "PoppinsBold", color: "white", marginTop: 10 },
  heartcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
