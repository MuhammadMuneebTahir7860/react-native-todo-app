import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask} from "../../redux/actions/TaskActions";
import { Alert } from "react-native";
export default function UseEditTaskPage(){
    const dispatch=useDispatch();
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[editTaskLoading,setEditTaskLoading]=useState(false);
    const ctaEditHandler = (navigation,data,docId) =>{
        const editedData={
            ...data,
            title,
            description,
        }
        if(title!=''){
        dispatch(updateTask(editedData,navigation,setEditTaskLoading,docId))
        }
        else{
            Alert.alert('Please Enter Task')
        }
    }
    return[title,setTitle,description,setDescription,editTaskLoading,setEditTaskLoading,ctaEditHandler]
}