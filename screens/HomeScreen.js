import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import NavbarScreen from "./NavbarScreen";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PORT } from "@env";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const [eventsData, setEventsData] = useState([]);
  const event = useSelector((state) => state.event.value);

  useEffect(() => {
    fetch(`http://${PORT}:3000/events/showAllEvent`)
      .then((response) => response.json())
      .then((data) => {
        setEventsData(data.event);
      });
  }, []);

  const events = eventsData.map((data, i) => {
    console.log("checkEventsdata", data);
    return (
      <Card
        key={i}
        photo={data.photo}
        name={data.name}
        lieu={data.lieu}
        date_debut={data.date_debut}
        tag={data.tags}
        _id={data._id}
      />
    );
  });

  return (
    <>
      <NavbarScreen style={styles.navbar}></NavbarScreen>
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
  },
  intro: {
    fontFamily: "PoppinsBold",
    fontSize: 20,
    color: "white",
    marginBottom: 40,
    marginLeft: 12,
  },
});
