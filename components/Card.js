import { View, Image, Stylesheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={props.image}>
          <TouchableOpacity>
            <FontAwesome
              name="heart"
              size={20}
              color="#000000"
              style={styles.likeIcon}
            />
          </TouchableOpacity>
        </Image>
      </View>
      <View style={styles.descriptioncontainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.lieu}>{props.lieu}</Text>
        <Text style={styles.datedebut}>{props.date_debut}</Text>
        <View style={styles.tagsContainer}>
          <TouchableOpacity style={styles.tag}>{props.tag}</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  imgContainer: {},
  image: {},
  descriptioncontainer: {},
  name: {},
  lieu: {},
  datedebut: {},
  tagsContainer: {},
  tag: {},
});
