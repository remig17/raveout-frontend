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
import { clearEvent, importDatabase } from "../reducers/event";
/* import DateSlider from "../components/DateSlider";
 */
export default function HomeScreen({ navigation }) {
  const [eventsData, setEventsData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetch(`http://${PORT}:3000/events/showAllEvent`)
      .then((response) => response.json())
      .then((data) => {
        setEventsData(data.event);
      });
    fetch(`http://${PORT}:3000/users/showLike/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.like && data.like.length > 0) {
          // console.log(data);
          dispatch(importDatabase(data.like));
          
        }
      });
  }, []);

  const events = eventsData.map((data, i) => {
    console.log(data.tags);

    const tags = Array.isArray(data.tags)
      ? data.tags
      : String(data.tags).split(" ");
    return (
      <Card
        key={i}
        photo={data.photo}
        name={data.name}
        lieu={data.lieu}
        date_debut={data.date_debut}
        tags={tags}
        _id={data._id}
        isLiked={isLiked}
      />
    );
  });

  return (
    <>
     <NavbarScreen></NavbarScreen>
 {/*       <DateSlider></DateSlider>
 */}      <TouchableOpacity
        style={styles.clear}
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
    width: 20,
    backgroundColor: "white",
    marginTop: 50,
  },
});
