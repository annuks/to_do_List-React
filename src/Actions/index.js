    export const  ADD_NEW_TASK = "ADD_NEW_TASK";
    export const  GET_TASK_LIST = "GET_TASK_LIST";


    export const addNewTAsk = (task)=>{

        return{
            type: ADD_NEW_TASK,
            payload:task
        }
    }



    export const getTaskList = (tasks=[])=>{
            
        return{
            type: GET_TASK_LIST,
            payload:tasks
        }
    }