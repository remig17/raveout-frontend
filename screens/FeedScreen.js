import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import React from "react";
import { View } from "react-native/types";

export default function FeedScreen({ navigation }) {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEventData(data);
      });
  }, []);

  return <View style={styles.container}></View>;
}
