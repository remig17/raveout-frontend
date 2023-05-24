
import React from "react";
import { View } from "react-native";
import { addDays, eachDayOfInterval, eachWeekOfInterval, subDays } from 'date-fns'
import { PagerView } from 'react-native-pager-view';

const DateSlider = () => {
    const dates = eachWeekOfInterval(
    {
    start: subDays(new Date(), 14),
    end: addDays(new Date(), 14),
    },
    {
    weekStartsOn: 1,
    }
    ).reduce((acc: Date[][], cur) => {
    const allDays = eachDayOfInterval({
    start: cur,
    end: addDays(cur, 6),
    });
    acc.push(allDays);
    return acc;
    }, []);
    
    console.log("showdates", dates);
    
    return (
        <PagerView>
            {dates.map((week, i) => {

                return <View key={i}>
                    
                </View>
            })}
        </PagerView>

        );
    };
    
    export default DateSlider;