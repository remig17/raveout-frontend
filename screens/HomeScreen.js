import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import NavbarScreen from "./NavbarScreen";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const [eventsData, setEventsData] = useState([]);
  const [likedEvents, setLikedEvents] = useState([]);

  const updateLikedEvents = (eventTitle) => {
    if (likedEvents.find((event) => event === eventTitle)) {
      setLikedEvents(likedEvents.filter((event) => event !== eventTitle));
    } else {
      setLikedEvents([...likedEvents, eventTitle]);
    }
  };

  useEffect(() => {
    fetch("http://10.2.1.35:3000/events/showAllEvent")
      .then((response) => response.json())
      .then((data) => {
        console.log("data fetch", data.event);
        setEventsData(data.event);
      });
  }, []);

  const events = eventsData.map((data, i) => {
    return (
      <Card
        key={i}
        photo={data.photo}
        name={data.name}
        lieu={data.lieu}
        date_debut={data.date_debut}
        tag={data.tags}
        updateLikedEvents={updateLikedEvents}
      />
    );
  });

  return (
    <>
      <NavbarScreen style={styles.navbar}></NavbarScreen>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.main}>{events}</View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});