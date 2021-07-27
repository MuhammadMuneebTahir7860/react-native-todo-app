import React from "react";
import { Text, View, TextInput, Button, TouchableOpacity, Image } from "react-native";
import style from './InputFormStyle';
import UseInputForm from "./UseInputForm";
import { ColorDotsLoader } from 'react-native-indicator';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CalendarIcon from 'react-native-vector-icons/FontAwesome';
import TimeIcon from 'react-native-vector-icons/Entypo';
import CheckIcon from '../../assets/CheckIcon.png';
const InputForm = ({ navigation }) => {
  const [setTitle,title, ctaAddHandler, addTaskLoading, description, setDescription, isDatePickerVisible, showDatePicker, hideDatePicker, handleConfirm, getDate, isTimePickerVisible, showTimePicker, hideTimePicker, handleTimeConfirm, getTime] = UseInputForm();

  return (
    <View style={style.formContainer}>
      <View style={style.inputContainer}>
        <Text style={{ marginTop: 20, marginBottom: 10, fontSize: 18 }}>
          What is to be done?
        </Text>
        <TextInput
         autoFocus={true}
          style={style.input}
          placeholder="Enter Task Here"
          keyboardType="text"
          onChangeText={title => setTitle(title)}
          defaultValue={title}
        />
        <Text style={{ marginTop: 20, marginBottom: 10, fontSize: 18 }}>
          Task Description:
        </Text>
        <TextInput
          style={style.input}
          placeholder="Enter Description"
          keyboardType="text"
          onChangeText={description => setDescription(description)}
          defaultValue={description}
        />
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={style.Dateinput}
            placeholder="Date not set"
            keyboardType="text"
            value={getDate()}
            onPressIn={showDatePicker}
          />
          <View>
            <CalendarIcon style={{ marginLeft: 15, marginTop: 15 }} name='calendar' color="#FF6347" size={20} onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={style.Dateinput}
            placeholder="Time not set (all day)"
            keyboardType="text"
            value={getTime()}
            onPressIn={showTimePicker}
          />
          <View>
            <TimeIcon style={{ marginLeft: 15, marginTop: 15 }} name='back-in-time' color="#FF6347" size={25} onPress={showTimePicker} />
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
            />
          </View>
        </View>
        {
          addTaskLoading &&
          <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
            <ColorDotsLoader />
          </View>
        }

      </View>
      <TouchableOpacity onPress={() => ctaAddHandler(navigation)} style={{ position: 'absolute', bottom: 40 ,right:30}}>
        <Image style={{ width: 50, height: 50 }} source={CheckIcon} />
      </TouchableOpacity>
    </View>
  )
};



export default InputForm;