import React from "react";
import UseCalenderPage from "./UseCalenderPage";
import { Calendar } from 'react-native-big-calendar';
export default function CalenderPage({route,navigation}){
    const {date}=route.params;
    const[filteredTasks]=UseCalenderPage();
    return(
        <Calendar events={filteredTasks} height={600}
        date={new Date(date.getFullYear(),date.getMonth()+1,date.getDate())}
        mode='day'
        />
    )
}