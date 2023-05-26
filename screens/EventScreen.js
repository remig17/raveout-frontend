import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import NavbarScreen from "./NavbarScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Event from "../components/Event";
import Moment from "moment";
import "moment/locale/fr";
import {PORT} from "@env"
import { BilletModal } from "../components/BilletModal";
import { useNavigation } from "@react-navigation/native";

export default function EventScreen() {
  const [eventsData, setEventsData] = useState([]);
  const event = useSelector((state) => state.event.value);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const navigation = useNavigation();

  useEffect(() => {
    fetch(`http://${PORT}:3000/events/showEventById/${event.eventId}`)
      .then((response) => response.json())
      .then((data) => {
        setEventsData(data.event);
      });
  }, []);

  Moment.locale("fr");

  const tags = Array.isArray(eventsData.tags)
    ? eventsData.tags
    : String(eventsData.tags).split(" ");

    const goBack = () => {
      navigation.navigate("TabNavigator")
    }

  return (
    <View style={styles.all}>
      <NavbarScreen />
      <TouchableOpacity style={styles.return} onPress={() => {goBack()}}>
        <Text style={styles.returnText}>◀ retour</Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          {eventsData.photo && (
            <Event
              style={styles.event}
              photo={eventsData.photo}
              name={eventsData.name}
              lieu={eventsData.lieu}
              date_debut={Moment(eventsData.date_debut).format("ddd D MMM [à] HH[h]")}
              tags={tags}
              _id={eventsData._id}
              description={eventsData.description}
              organisateur={eventsData.organisateur}
              onBilletPress={handleOpenModal}
            />
          )}
        </ScrollView>
      </SafeAreaView>
      {isModalVisible && (
        <BilletModal
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({

  all: {
  },
  scrollViewContent: {
    flexGrow: 1,
  },
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
    marginBottom: 150,
  },
  event: {
    backgroundColor: "#262626",
  },
  scrollViewContent: {
    marginBottom: 300,
  },
  return: {
    backgroundColor: "#262626",
    paddingBottom: -150,
    paddingTop: 20,
  },
  returnText: {
    color: "white",
    fontSize: 24,
  },
});
