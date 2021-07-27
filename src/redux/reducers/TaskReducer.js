
const initialState = {
    tasks: [],
};

const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
        const task=state.tasks;
            return {
                ...state,
                tasks:[...task,action.payload]
            }
            case 'DELETE_TASK':{
                const newArray=state.tasks.filter((item)=>{
                    if(item.docId!=action.payload){
                        return item;
                    }
                })
                return{
                    ...state,
                    tasks:newArray,
                }
            }
            case 'UPDATE_TASK':{
                let updateDataArray=state.tasks.map((item)=>{
                    if(action.payload.docId==item.docId){
                        return action.payload.editedData
                    }
                    else{
                        return item
                    }
                })
                console.log(updateDataArray);
                return{
                    ...state,
                    tasks:updateDataArray,
                }
            }
            case 'GET_TASK':
                return{
                ...state,
                tasks:action.payload,
            }
            case 'COMPLETE_TASK':{
                let updataDataArrayCompleteTasks=state.tasks.map((item)=>{
                    if(action.payload.docId==item.docId){
                        return action.payload.updateData
                    }
                    else{
                        return item
                    }
                })
                return{
                    ...state,
                    tasks:updataDataArrayCompleteTasks,
                }
            }
          
            
        default:
            return state;
    }
}

export default TaskReducer;