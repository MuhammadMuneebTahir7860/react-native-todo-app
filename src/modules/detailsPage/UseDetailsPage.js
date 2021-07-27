import { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector,useDispatch} from 'react-redux';
import { deleteTask } from '../../redux/actions/TaskActions';

export default function UseDetailsPage(){
    const tasksData=useSelector(state=>state.TaskReducer.tasks);
    const dispatch=useDispatch();
    const[docId,setDocId]=useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const[deleteDocId,setDeletDocId]=useState('');
    let singleTask=tasksData.filter((item)=>{
        if(item.docId==docId){
            return item;
        }
    })
    const showModal = (docId) =>{
        setDeletDocId(docId)
        setModalVisible(true)
    }

    const deleteHandler = (navigation) =>{
        dispatch(deleteTask(deleteDocId,navigation))
    }


    return[setDocId,singleTask,setModalVisible,modalVisible,showModal,deleteHandler]
}