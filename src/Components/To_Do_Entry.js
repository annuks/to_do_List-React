import React, { Component } from 'react';
import Styles from '../Styles/input.module.css'
import {connect} from 'react-redux';
import { addTask } from '../Actions';
import {bindActionCreators} from 'redux';

class To_Do_Entry extends Component {

  handleFormSubmit=(e)=>{
    e.preventDefault();
    const newTask = this.refs.task.value;
    const addTaskAPI = (newTask) =>{
      fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: newTask,
        userId: 1,
        }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
        .then((response) => response.json())
        .then((json) => this.props.addTask(json));
    }
    if(newTask.length > 0){
      addTaskAPI(newTask);
    }
    this.refs.task.value = '';
  }
  render() {

 

    return (
      <div className={Styles.formcontainer}>
        <h4>Add Task</h4>
            <form onSubmit={this.handleFormSubmit}>
              <input className={Styles.forminput} type='text' ref='task' placeholder='Add New Task'/>
              <button><img src='https://cdn-icons-png.flaticon.com/512/1665/1665680.png' alt="Add Task" width="30px"/></button>
            </form>
      </div>
    )
  }
}




function mapDispatchToProps(dispatch){
  return bindActionCreators({addTask}, dispatch);
}
export default connect(()=>{return {}}, mapDispatchToProps)(To_Do_Entry);