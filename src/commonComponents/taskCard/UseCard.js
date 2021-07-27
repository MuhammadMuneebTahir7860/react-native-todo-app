import { useDispatch } from "react-redux"
import { CompleteTask} from "../../redux/actions/TaskActions";
import { useState } from "react";
export default function UseCard(){
    const dispatch=useDispatch();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const taskCompleteHandler = (newValue,docId,data) =>{
        const updateData={
            ...data,
            TaskComplete:newValue,
        }
        dispatch(CompleteTask(docId,updateData,setToggleCheckBox))
    }   


    return[taskCompleteHandler,toggleCheckBox]
}