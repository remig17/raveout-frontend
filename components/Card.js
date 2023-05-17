import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <ImageBackground style={styles.image} uri={props.image}></ImageBackground>
      <View style={styles.descriptioncontainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.lieu}>{props.lieu}</Text>
        <Text style={styles.datedebut}>{props.date_debut}</Text>
        <TouchableOpacity>
          <FontAwesome
            name="heart"
            size={20}
            color="#000000"
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
  image: {
    width: "90%",
    height: "20%",
  },
  likeIcon: {},
  descriptioncontainer: {},
  name: {},
  lieu: {},
  datedebut: {},
  tagsContainer: {},
  tag: {},
});
