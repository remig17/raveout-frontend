import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import NavbarScreen from "./NavbarScreen";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PORT } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { clearEvent } from "../reducers/event";

export default function HomeScreen({ navigation }) {
  const [eventsData, setEventsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://${PORT}:3000/events/showAllEvent`)
      .then((response) => response.json())
      .then((data) => {
        setEventsData(data.event);
      });
  }, []);

  const events = eventsData.map((data, i) => {
    console.log(data.tags);
    return (
      <Card
        key={i}
        photo={data.photo}
        name={data.name}
        lieu={data.lieu}
        date_debut={data.date_debut}
        tags={data.tags}
        _id={data._id}
      />
    );
  });

  return (
    <>
      <NavbarScreen style={styles.navbar}></NavbarScreen>
      <TouchableOpacity
        class={styles.clear}
        onPress={() => {
          dispatch(clearEvent());
        }}
      >
        <Text>CLEAR</Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.all}>
        <ScrollView>
          <Text style={styles.intro}>A VENIR: </Text>

          <View style={styles.main}>{events}</View>
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
  clear: {
    color: "red",
    width: 20,
    backgroundColor: "white",
    marginTop: 50,
  },
});
