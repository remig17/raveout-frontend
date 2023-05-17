import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [likedEvents, setLikedEvents] = useState([]);
  const dispatch = useDispatch();

  const updateLikedEvents = (eventTitle) => {
    if (likedEvents.find((event) => event === eventTitle)) {
      setLikedEvents(likedEvents.filter((event) => event !== eventTitle));
      dispatch(removeEventFromLike(eventTitle))

    } else {
      setLikedEvents([...likedEvents, eventTitle]);
      dispatch(addEventToLike(eventTitle))
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    updateLikedEvents(props.name); // Appeler la fonction parent pour mettre à jour les événements aimés
    
      fetch('http://10.2.2.38:3000/events/showAllEvent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: user.token, eventName: props.name }),
    }).then(response => response.json())
      .then(data => {
        data.result && dispatch(updateLikedEvents({ tweetId: props._id, name: event.name}));
      });
   
  };
  return (
    <View style={styles.card}>
      <View style={styles.photocontainer}>
        <Image style={styles.photo} source={{ uri: `${props.photo}` }}></Image>
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
            name={isLiked ? "heart" : "heart-o"} // Utiliser un cœur rempli ou vide en fonction de l'état du like
            size={20}
            color={"#7C4DFF"} // Utiliser une couleur différente pour le like aimé ou non aimé
            style={styles.likeIcon}
          />
        </TouchableOpacity>
        </View>
        </View>
        
        
      
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
    width: 350,
    height: 200,
    marginBottom: 50,
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
    alignContent: "center",
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
  tagsContainer: {},
  tag: {},
  heartcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});