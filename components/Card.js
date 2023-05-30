import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PORT } from "@env";
import {
  addEventToLike,
  removeEventFromLike,
  getEventById,
} from "../reducers/event";
import { useNavigation } from "@react-navigation/native";

export default function Card(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [isLiked, setIsLiked] = useState(props.isLiked);

  const handleLike = async () => {
    const response = await fetch(`http://${PORT}:3000/users/like`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: user.token, eventId: props._id }),
    });
    const data = await response.json();
    if (data.result) {
      if (isLiked) {
        dispatch(removeEventFromLike(props));
      } else {
        dispatch(addEventToLike(props));
        setIsLiked(!isLiked);
      }
    }
  };

  const handleClick = () => {
    dispatch(getEventById(props._id));
    navigation.navigate("Event");
  };

  return (
    <View style={styles.card}>
      <View style={styles.photocontainer}>
        <TouchableOpacity onPress={() => handleClick()}>
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
              <Text style={styles.lieu}>{props.lieu}</Text>
              <Text style={styles.datedebut}>{props.date_debut}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                handleLike();
              }}
            >
              <FontAwesome
                name={isLiked ? "heart" : "heart-o"}
                size={20}
                color={"#7C4DFF"}
                style={styles.likeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tagsContainer}>
          {props.tags.map((tag, index) => (
            <TouchableOpacity key={index} style={styles.btntag}>
              <Text style={styles.tagText}>#{tag}</Text>
            </TouchableOpacity>
          ))}
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
    height: 200,
    marginBottom: 80,
  },
  photocontainer: {
    width: "100%",
    height: "100%",
  },
  photo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  likeIcon: {
    marginRight: 10,
  },
  descriptioncontainer: {
    marginTop: 10,
    backgroundColor: "#262626",
    justifyContent: "center",
    paddingLeft: 10,
  },
  name: {
    fontFamily: "PoppinsBold",
    color: "white",
    marginTop: 10,
  },
  lieu: {
    color: "#9B9B9B",
    fontFamily: "PoppinsRegular",
  },
  datedebut: {
    color: "#9B9B9B",
    fontFamily: "PoppinsRegular",
  },
  heartcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tagText: {
    color: "#7C4DFF",
    fontFamily: "PoppinsSemiBold",
    fontSize: 10,
  },
  btntag: {
    backgroundColor: "white",
    textAlign: "center",
    marginRight: 5,
    padding: 2,
    borderRadius: 50,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
});
