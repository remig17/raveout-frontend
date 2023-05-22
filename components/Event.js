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
    <ScrollView style={styles.scroll} >
    <View style={styles.card}>
      <View style={styles.photocontainer}>
        <TouchableOpacity
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
              
            </View>
            <View style={styles.lieudate}>
              <View>
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
        </View>
        <View style={styles.tagsContainer}>
          <Text style={styles.tags}>{props.tags}</Text>
        </View>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#262626",
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  photocontainer: {
    width: "100%",
    height: "100%",
    marginTop: 80,
  },
  photo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  name: {
    fontFamily: "PoppinsBold",
    color: "white",
    fontSize: 25,
    marginTop: 10,
    textAlign: "center",
  },
  organisateur: {
    fontFamily: "PoppinsSemiBold",
    color: "white",
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
  },
  btnBillet: {
    marginTop: 15,
    padding: 15,
    width: 120,
    backgroundColor: "#7C4DFF",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  textBtn: {
    fontFamily: "PoppinsSemiBold",
    color: "white",
    paddingLeft: 25,
  },
  lieu: {
    paddingTop: 15,
    color: "#9B9B9B",
    fontFamily: "PoppinsRegular",
  },
  datedebut: {
    color: "#9B9B9B",
    fontFamily: "PoppinsRegular",
  },
  tagsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  tags: {
    fontFamily: "PoppinsBold",
    color: "white",
    marginTop: 10,
  },
  description: {
    color: "white",
  },
  
  lieudate: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  likeIcon: {
    marginLeft: 120,
    marginTop: 20,
  },
  descriptioncontainer: {
    marginBottom: -150,
    paddingTop: 50,
  },
 
});
