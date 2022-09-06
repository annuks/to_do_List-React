import {combineReducers} from 'redux';
import { ADD_NEW_TASK, GET_TASK_LIST } from '../Actions';


const taskReducers = (state = [],action)=>{
    switch(action.type){

        
        case GET_TASK_LIST:
        return action.payload;  

        case ADD_NEW_TASK:
        state = state.concat(action.payload)
        break;
        default:
            return state;
    }
}
const reducers = combineReducers({
    tasks:taskReducers
});

export default reducers;