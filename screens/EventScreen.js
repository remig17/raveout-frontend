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
import Moment from "moment";
import "moment/locale/fr";
import { BilletModal } from "../components/BilletModal";

export default function EventScreen() {
  const [eventsData, setEventsData] = useState([]);
  const event = useSelector((state) => state.event.value);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

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


  return (
    <>
      <NavbarScreen></NavbarScreen>
      <SafeAreaView style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {eventsData.photo && (
            <Event
              style={styles.event}
              photo={eventsData.photo}
              name={eventsData.name}
              lieu={eventsData.lieu}
              date_debut={Moment(eventsData.date_debut).format(
                "ddd D MMM [à] HH[h]"
              )}
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
    marginBottom: 150,

  },
  event: {
    backgroundColor: "#262626",
  },
  scrollViewContent: {
    marginBottom: 300,
  },
 
});
