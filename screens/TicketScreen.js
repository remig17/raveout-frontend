import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NavbarScreen from "./NavbarScreen";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ticket from "../components/Ticket";
import Card from "../components/Event";

import Moment from "moment";
import "moment/locale/fr";
import { clearTicket } from "../reducers/event";

export default function TicketScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.value);
  const event = useSelector((state) => state.event.value);
  // console.log("event reducer", event.tickets);

  const ticketsList = event.tickets;
  let tickets;

  const clear = () => {
    dispatch(clearTicket());
  };

  if (ticketsList.length > 0) {
    tickets = ticketsList.map((data, i) => {
      Moment.locale("fr");
      const formattedDate = Moment(data.date_debut, "DD/MM/YYYY").format(
        "D MMM [à] HH[h]"
      );
      return (
        <Ticket
          key={i}
          photo={data.photo}
          name={data.name}
          lieu={data.lieu}
          date_debut={formattedDate}
        />
      );
    });
  } else {
    tickets = (
      <>
        <SafeAreaView style={styles.content}>
          <View style={styles.noTicketContainer}>
            <Text style={styles.noTicketTitre}>
              Pas de billet pour le moment.
            </Text>
            <Text style={styles.noTicketText}>
              Envie de raver {user.pseudo} ? Découvre les prochains évènements
              dans ta ville 🪩
            </Text>
            <View style={styles.btnView}>
              <TouchableOpacity
                style={styles.explorerBtn}
                onPress={() => navigation.navigate("TabNavigator")}
              >
                <Text style={styles.btnText}>Découvrir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <NavbarScreen></NavbarScreen>
      <ScrollView>
        <SafeAreaView style={styles.all}>
          <View style={styles.main}>{tickets}</View>
        </SafeAreaView>
      </ScrollView>
    </View>
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
  content: {
    flex: 1,
    backgroundColor: "#262626",
  },
  noTicketContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#262626",
  },
  noTicketTitre: {
    textAlign: "center",
    fontFamily: "PoppinsBold",
    color: "white",
  },
  noTicketText: {
    textAlign: "center",
    color: "white",
    marginTop: 20,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  explorerBtn: {
    marginTop: 15,
    padding: 15,
    width: 120,
    backgroundColor: "#7C4DFF",
    borderRadius: 10,
  },
  btnText: {
    fontFamily: "PoppinsSemiBold",
    color: "white",
    textAlign: "center",
  },
});
