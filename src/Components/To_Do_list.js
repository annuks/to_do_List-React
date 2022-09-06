import React,{Component} from "react";
import { connect, Connect } from "react-redux/es/exports";
import Task from "./Task";

class ToDoList extends Component{

    render(){
        return(
            <div>
                To Do List App
            </div>
        )

        const tasks = this.props.tasks;
        return <div>
          <h1>TasksList</h1>
          <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>
                            S.No
                        </th>
                        <th>
                            Tasks
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
    
                </tbody>
                <tfoot>
                    {
                     tasks.map((task,index)=>{
                      return <Task task = {task} key={index} />
                     }) 
                    }
                </tfoot>
            </table>
          </div>
        </div>;



    }
}

function mapStateToProps(state){
    return{
        tasks:state.tasks
    }
}
export default  connect (mapStateToProps)(ToDoList);