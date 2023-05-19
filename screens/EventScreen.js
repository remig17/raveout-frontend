import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import NavbarScreen from "./NavbarScreen";
import Event from "../components/Event";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PORT } from "@env";
console.log(PORT);
import { useSelector } from "react-redux";
import { getEventById } from "../reducers/event";

export default function EventScreen() {
  const [eventsData, setEventsData] = useState([]);
  const event = useSelector((state) => state.event.value);
  console.log("reducer event", event.eventId);

  useEffect(() => {
    fetch(`http://${PORT}:3000/events/showEventById/${event.eventId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEventsData(data.event);
      });
  }, []);

  return (
    <View style={styles.main}>
      <NavbarScreen></NavbarScreen>
      <ScrollView>
        <Text style={styles.name}>{eventsData.name}</Text>
        {/* <View style={styles.content}>{events}</View> */}
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
  name: {
    color: "white",
  },
});
