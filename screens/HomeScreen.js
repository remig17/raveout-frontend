import { Text, View, Button, StyleSheet } from "react-native";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";

export default function HomeScreen({ navigation }) {
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    fetch("http://10.2.1.35:3000/showAllEvent")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEventsData(formatedData);
      });
  }, []);

  const events = eventsData.map((data, i) => {
    // const isLiked = likedMovies.some(movie => movie === data.title);
    return (
      <Card
        key={i}
        /*updateLikedEvents={updateLikedEvents} isLiked={isLiked}*/
        image={data.image}
        name={data.name}
        lieu={data.lieu}
        date_debut={data.date_debut}
        tag={data.tag}
      />
    );
  });
  return (
    <View style={styles.main}>
      <Text>Home Screen</Text>
      <View>{events}</View>
      <Button
        title="Preferences"
        onPress={() => navigation.navigate("Preference")}
      />

      <Button title="SignUp" onPress={() => navigation.navigate("SignUp")} />
      <Button
        title="SignUpSignIn"
        onPress={() => navigation.navigate("SignUpSignIn")}
      />
      <Button title="SignIn" onPress={() => navigation.navigate("SignIn")} />
      <Button
        title="SignUpFormEmail"
        onPress={() => navigation.navigate("SignUpFormEmail")}
      />
      <Button
        title="SignInFormEmail"
        onPress={() => navigation.navigate("SignInFormEmail")}
      />
    </View>
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
