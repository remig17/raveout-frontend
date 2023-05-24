import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";


export default function DateSlider(){


const dates = eachWeekOfInterval({
    start: subDays(new Date(), 14),
    end: addDays(new Date(), 14),
}, {
    weekStartsOn: 1,
}).reduce(); 

    return(

    )
}