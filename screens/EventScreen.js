import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import NavbarScreen from "./NavbarScreen";
import Event from "../components/Event";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PORT } from "@env";
import { useSelector } from "react-redux";

export default function EventScreen() {
  const [eventsData, setEventsData] = useState([]);
  const event = useSelector((state) => state.event.value);
  console.log("reducer event", event);

  useEffect(() => {
    fetch(`http://${PORT}:3000/events/showEventById/:6464c645a65a8d374cdb8414`)
      .then((response) => response.json())
      .then((data) => {
        setEventsData(data.event);
      });
  }, []);

  const events = eventsData.map((data, i) => {
    return (
      <Event
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
    <View style={styles.main}>
      <NavbarScreen></NavbarScreen>
      <ScrollView>
        <View style={styles.content}>{events}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "black",
  },
  content: {
    flex: 1,
    backgroundColor: "#262626",
  },
});
