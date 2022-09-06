import React, { Component } from "react";
import { getTaskList } from "../Actions";
import { Connect } from "react-redux";
import {bindActionCreators} from "redux";
import To_Do_list from  './To_Do_list';



class App extends Component{
    async componentDidMount(){
        this.props.getTaskList();
    }
    render (){
        return(
            <div>
            <h3>To Do List </h3>
            <To_Do_list/>

            </div>
        )

    }
}

function dispatchToProps(dispatch){
    return bindActionCreators({getTaskList},dispatch);
}
export default connect (()=>{return{}}, dispatchToProps)(App);