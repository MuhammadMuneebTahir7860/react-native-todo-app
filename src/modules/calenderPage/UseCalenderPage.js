import UseTassker from "../tassker/UseTassker";
export default function UseCalenderPage(){
    const[tasksData,logoutHandler,userDetailsLoading,filteredTasks,taskLoading]=UseTassker();
    return[filteredTasks]
}