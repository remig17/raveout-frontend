import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { addDays, format, getDate, isSameDay, startOfWeek } from 'date-fns';


function DateSlider({ onDateSelect }) {
  const [week, setWeek] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const weekDays = getWeekDays(new Date());
    const allOption = { formatted: 'All', date: null, day: null };
    setWeek([allOption, ...weekDays]); // Add the "All" option to the week state
  }, []);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate); // Utilisez setSelectedDate pour mettre à jour la date sélectionnée
    onDateSelect(newDate); // Appeler la fonction de rappel onDateSelect avec la nouvelle date sélectionnée
  };

  return (
    <View style={styles.container}>
      {week.map((weekDay) => {
        const textStyles = [styles.label];
        const touchable = [styles.touchable];

        const sameDay = isSameDay(weekDay.date, new Date());
        if (sameDay || weekDay.date === null) { // Highlight the "All" option if selected
          textStyles.push(styles.selectedLabel);
          touchable.push(styles.selectedTouchable);
        }

        return (
          <View style={styles.weekDayItem} key={weekDay.formatted}>
            <Text style={styles.weekDayText}>{weekDay.formatted}</Text>
            <TouchableOpacity
              onPress={() => handleDateChange(weekDay.date)}
              style={touchable}
            >
              <Text style={textStyles}>{weekDay.day}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#262626',
  },
  weekDayText: {
    color: '#7C4DFF',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  touchable: {
    borderRadius: 20,
    padding: 7.5,
    height: 35,
    width: 35,
  },
  selectedTouchable: {
    backgroundColor: '#7C4DFF',
  },
  weekDayItem: {
    alignItems: 'center',
  },
});

function getWeekDays(date) {
  const start = startOfWeek(date, { weekStartsOn: 1 });

  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, 'EEE'),
      date,
      day: getDate(date),
    });
  }

  return final;
}

export default DateSlider;
