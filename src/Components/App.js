import React, { Component } from 'react'
import { getTaskList } from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import To_Do_Entry from './To_Do_Entry';
import To_Do_list from './To_Do_list';

class App extends Component {
  async componentDidMount(){
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.props.getTaskList(json)
      });
  }

  render() {
    return (
      <div className='App'>


        <h2 style={{textAlign:'center' , color: "brown"}}> To-Do List</h2>
        
        <To_Do_Entry/>


        <div className='Todolist'>
          <To_Do_list/>
        </div>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch){
  return bindActionCreators({getTaskList}, dispatch);
}
export default connect(()=>{return {}}, mapDispatchToProps)(App);