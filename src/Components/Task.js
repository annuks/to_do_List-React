// importing required components
import React, { Component } from 'react'
import Styles from '../Styles/form.module.css';
import {connect} from 'react-redux';
import { deleteTask } from '../Actions';
import {bindActionCreators} from 'redux';
import Update_Task from './Update_Task';


//components for handling operations in task
class Task extends Component {
    constructor(){
        super();
        this.state = {
            edit : false
        }
    }
    //handling updation in to_do list
    openUpdateList = (sn,title) =>{

        if(this.state.edit){
            this.setState({
                edit:false,
            })
        }else{
            this.setState({
                edit:true,
            })
        }
    }

    //handling deletion in to_do list
    handleDeleteTask = (id) => {

        this.props.deleteTask(id);

    

    }
    render() {
        const {  title } = this.props.task;
        return (
            <tr>
                <td>
                    {this.props.sn + 1}
                </td> 

                { !this.state.edit && <td> {title} </td> }

                
                { !this.state.edit && <td className={Styles.tdCenter}>
                    <button onClick={()=>this.openUpdateList(this.props.sn,title)}><img src='https://cdn-icons-png.flaticon.com/512/1828/1828270.png' alt='Update' width="30px"/></button>
                </td> }

                { !this.state.edit && <td className={Styles.tdCenter}>
                    <button onClick={()=>this.handleDeleteTask(this.props.sn)}><img src='https://cdn-icons-png.flaticon.com/512/3221/3221897.png' alt='Delete' width="30px"/></button>
                </td> }

                { this.state.edit &&  <Update_Task task={this.props.task} sn = {this.props.sn} handleShowEditForm= {this.openUpdateList}/>}

                { this.state.edit && <td className={Styles.tdCenter}>
                    <button onClick={()=>this.openUpdateList(this.props.sn,title)}><img src='https://cdn-icons-png.flaticon.com/512/2763/2763138.png' alt='Update' width="30px"/></button>
                </td> }


            </tr>

        )
    }
}

// dispaching action to reducers
function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteTask}, dispatch);
}
export default connect(()=>{return {}}, mapDispatchToProps)(Task);