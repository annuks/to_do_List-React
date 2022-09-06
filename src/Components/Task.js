import React, { Component } from 'react'

class Task extends Component {
  render() {
    const { id, title } = this.props.task;
    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                {title}
            </td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    )
  }
}

export default Task;