import React from "react";
import {StyleSheet ,View} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import UseCalender from './UseCalender';
export default function Calender({navigation}){
    const[]=UseCalender();
    return(
        <View style={styles.container}>
        <CalendarStrip
          scrollable
          style={{height:90, paddingTop: 16, paddingBottom: 10}}
          calendarColor={'black'}
          calendarHeaderStyle={{color: 'white'}}
          dateNumberStyle={{color: 'white'}}
          dateNameStyle={{color: 'white'}}
          iconContainer={{flex: 0.1}}
          highlightDateNameStyle={{color:'white',fontSize:10}}
          highlightDateNumberStyle={{color:'white',fontSize:14}}
          highlightDateContainerStyle={{backgroundColor:'#FF6347'}}
          onDateSelected={(date)=>navigation.navigate('Calender',{date:date.toDate()})}
          selectedDate={new Date()}
        />
      </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1 }
  });