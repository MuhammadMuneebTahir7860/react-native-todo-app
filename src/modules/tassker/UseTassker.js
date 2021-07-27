import { useSelector,useDispatch } from 'react-redux';
import { GetTask } from '../../redux/actions/TaskActions';
import { useEffect, useState }  from 'react';
import { doLogout, GetCurrentUserData} from '../../redux/actions/AuthActions';
import GetCurrentUserUidHook from '../../customHooks/GetCurrentUserUidHook';
export default function UseTassker(){
    const tasksData=useSelector(state=>state.TaskReducer.tasks);
    const[userDetailsLoading,setUserDetailsLoading]=useState(false);
    const[loading,uid]=GetCurrentUserUidHook();
    const[taskLoading,setTaskLoading]=useState(false);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(GetTask(setTaskLoading))
        dispatch(GetCurrentUserData(setUserDetailsLoading))
    },[])
    const filteredTasks=tasksData?.filter((item)=>{
        if(item?.Uid==uid){
            return item
        }
    })
    const logoutHandler = (navigation) =>{
        dispatch(doLogout(navigation))
    }
    return[tasksData,logoutHandler,userDetailsLoading,filteredTasks,taskLoading]
}