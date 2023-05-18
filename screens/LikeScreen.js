import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import NavbarScreen from "./NavbarScreen";
import CardLike from "../components/Card";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PORT } from "@env";
import { useSelector, useDispatch } from "react-redux";
import { removeEventFromLike } from "../reducers/event";

export default function LikeScreen({ navigation }) {
  const [likesData, setLikesData] = useState([]);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://${PORT}:3000/users/showLike/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setLikesData(data.like);
      });
  }, []);

  const handleUnlike = (eventId) => {
    dispatch(removeEventFromLike(eventId));
    setLikesData(likesData.filter((event) => event._id !== eventId));
  };

  const likes = likesData.map((data, i) => {
    return (
      <CardLike
        key={i}
        photo={data.photo}
        name={data.name}
        lieu={data.lieu}
        date_debut={data.date_debut}
        tag={data.tags}
        _id={data._id}
        onUnlike={handleUnlike}
      />
    );
  });

  return (
    <>
      <NavbarScreen style={styles.navbar}></NavbarScreen>
      <SafeAreaView style={styles.all}>
        <ScrollView>
          <Text style={styles.intro}>MES EVENEMENTS: </Text>
          <View style={styles.main}>{likes}</View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
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
});
