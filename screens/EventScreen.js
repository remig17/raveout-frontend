import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import NavbarScreen from "./NavbarScreen";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PORT } from "@env";
import { useSelector } from "react-redux";
import Event from "../components/Event";

export default function EventScreen() {
  const [eventsData, setEventsData] = useState([]);
  const event = useSelector((state) => state.event.value);

  useEffect(() => {
    fetch(`http://${PORT}:3000/events/showEventById/${event.eventId}`)
      .then((response) => response.json())
      .then((data) => {
        setEventsData(data.event);

        
      });
  }, []);

  console.log("checkkk", eventsData.photo)

  return (
    <>
      <NavbarScreen style={styles.navbar}></NavbarScreen>
      <SafeAreaView style={styles.content}> 
      
      {eventsData.photo && (
    <Event style={styles.event}
      photo={eventsData.photo}
      name={eventsData.name}
      lieu={eventsData.lieu}
      date_debut={eventsData.date_debut}
      tag={eventsData.tags}
      _id={eventsData._id}
      description={eventsData.description}
      organisateur={eventsData.organisateur}
    />
  )}
      </SafeAreaView> 
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "black",
  },

  name: {
    color: "white",
  },
  content: {
    height: "100%",
    backgroundColor: "#262626",
  },
  event: {
    backgroundColor: "#262626",
  },
 
});
