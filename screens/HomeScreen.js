import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import NavbarScreen from "./NavbarScreen";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { removeEventFromLike, addEventToLike } from "../reducers/user";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const [eventsData, setEventsData] = useState([]);

  

  useEffect(() => {
    fetch("http://10.2.2.38:3000/events/showAllEvent")
      .then((response) => response.json())
      .then((data) => {
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
      <SafeAreaView style={styles.all}>
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
    backgroundColor: "#262626",
        alignItems: "center",
    justifyContent: "center",
  },
  all: {
    backgroundColor: "#262626",
  }
});