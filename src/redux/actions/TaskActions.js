import { Alert } from 'react-native';
import {db} from '../../config/Firebase';
export const AddTask=(data,navigation,setAddTaskLoading)=> async (dispatch)=>{
    try{
        setAddTaskLoading(true)
        await db.collection('tasks').add(data);
        dispatch(
            {
                type:'ADD_TASK',
                payload:data,
            }
        );
        navigation.replace("Home")
    }
    catch(error){
        console.log(error.message);
    }
    finally{
        setAddTaskLoading(false)
    }
}

export const updateTask=(editedData,navigation,setEditTaskLoading,docId)=> async (dispatch)=>{

    try{
        setEditTaskLoading(true)
        const completeTask=await db.collection('tasks').doc(docId).update(editedData);
        dispatch(
            {
                type:'UPDATE_TASK',
                payload:{docId,editedData}
            }
        );
        navigation.navigate('Home')
    }
    catch(error){
        Alert.alert(error.toString())
    }
    finally{
        setEditTaskLoading(false)
    }
}

export const deleteTask=(deleteDocId,navigation)=> async (dispatch)=>{

    try{
        const deleteTask=await db.collection('tasks').doc(deleteDocId).delete();
        dispatch(
            {
                type:'DELETE_TASK',
                payload:deleteDocId
            }
        );
        navigation.navigate('Home')
    }
    catch(error){
        Alert.alert(error.toString())
    }
}


export const GetTask=(setTaskLoading)=> async (dispatch)=>{

    try{
        setTaskLoading(true)
        const getData=await db.collection('tasks').get();
        const dataArray=[];
        getData.forEach(item => {
            dataArray.push({docId:item.id,...item.data()});
        });
        dispatch(
            {
                type:'GET_TASK',
                payload:dataArray,
            }
        );
    }
    catch(error){
        Alert.alert(error.toString())
    }
    finally{
        setTaskLoading(false);
    }
}


export const CompleteTask=(docId,updateData,setToggleCheckBox)=> async (dispatch)=>{

    try{
        const completeTask=await db.collection('tasks').doc(docId).update(updateData)
        dispatch(
            {
                type:'COMPLETE_TASK',
                payload:{docId,updateData}
            }
        );
        setToggleCheckBox(updateData.TaskComplete)
    }
    catch(error){
        Alert.alert(error.toString())
    }
}



