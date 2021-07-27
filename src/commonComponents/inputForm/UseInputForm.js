import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTask} from "../../redux/actions/TaskActions";
import GetCurrentUserUidHook from "../../customHooks/GetCurrentUserUidHook";
import { Alert } from "react-native";
export default function UseInputForm(){
    const dispatch=useDispatch();
    const[loading,uid]=GetCurrentUserUidHook();
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[addTaskLoading,setAddTaskLoading]=useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const[date,setDate]=useState('');
    const[time,setTime]=useState('');
    const ctaAddHandler = (navigation) =>{
      if(title!='' && date!='' && time!=''){
        const year=date.getFullYear();
        const month=date.getMonth()+1;
        const currentDate=date.getDate();
        const hours=time.getHours();
        const minutes=time.getMinutes();
        const dateData=new Date(year,month,currentDate,hours,minutes).toISOString();
        const data={
            title,
            description,
            Uid:uid,
            start:dateData,
            date:getDate(),
            time:getTime(),
        }
        dispatch(AddTask(data,navigation,setAddTaskLoading))
        }
        else{
            Alert.alert('Please fill all fields ')
        }
    }
    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        hideDatePicker();
        setDate(date);
      };
      const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
    
      const handleTimeConfirm = (time) => {
        hideTimePicker();
        setTime(time);
      };
    
    const getDate = () => {
        let tempDate = date.toString().split(' ');
        if(tempDate[2]==new Date().getDate()){
          return 'Today'
        }
        else if(tempDate[2]==new Date().getDate()-1){
          return 'Yesterday'
        }
        else if(tempDate[2]==new Date().getDate()+1){
          return 'Tomorrow'
        }
        else{
        return date !== ''
          ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
          : '';
        }
      };
      const getTime = () => {
        let tempTime = time.toString().split(' ');
        return time !== ''
          ? `${tempTime[4]}`
          : '';
      };
    return[setTitle,title,ctaAddHandler,addTaskLoading,description,setDescription,isDatePickerVisible,showDatePicker,hideDatePicker,handleConfirm,getDate,isTimePickerVisible,showTimePicker,hideTimePicker,handleTimeConfirm,getTime]
}