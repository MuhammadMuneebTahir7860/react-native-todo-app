import {useSelector} from "react-redux"
import GetCurrentUserUidHook from "../../customHooks/GetCurrentUserUidHook";
import UseTassker from "../../modules/tassker/UseTassker";
export default function UseSideMenu(){
    const[loading,uid]=GetCurrentUserUidHook();
    const[tasksData,logoutHandler,userDetailsLoading,filteredTasks,taskLoading]=UseTassker();
    const userData=useSelector(state=>state.AuthReducer.currentUserData)
    const filterArray=userData?.filter((item)=>{
        if(item?.Uid==uid){
            return item;
        }
    })
    return[filterArray,userDetailsLoading,logoutHandler]
}