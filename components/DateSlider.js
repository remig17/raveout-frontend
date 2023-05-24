/* import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { addDays, eachDayOfInterval, eachWeekOfInterval, subDays, format } from 'date-fns'
import { PagerView } from 'react-native-pager-view';

export default function DateSlider() {
  const dates = eachWeekOfInterval(
    {
      start: subDays(new Date(), 14),
      end: addDays(new Date(), 14),
    },
    {
      weekStartsOn: 1,
    }
  ).reduce((acc, cur) => {
    const allDays = eachDayOfInterval({
      start: cur,
      end: addDays(cur, 6),
    });
    acc.push(allDays);
    return acc;
  }, []);

  console.log("showdates", dates);

  return (
    <PagerView style={styles.container}>
      {dates.map((week, i) => (
        <View key={i}>
          <View style={styles.row}>
            {week.map(day => {
              const txt = format(day, 'EEEEE');
              return (
                <View style={styles.day} key={day.getTime()}>
                  <Text>{txt}</Text>
                  <Text>{day.getDate()}</Text>
                </View>
              );
            })}
          </View>
        </View>
      ))}
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  day: {
    alignItems: "center",
  },
});
 */