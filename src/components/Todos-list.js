import _ from 'lodash';
import React from 'react';


export default class TodosList extends React.Component {
  
  render () {
    /* const props = _.omit(this.props, 'todos'); */
    /* let labelStyle={
        'textDecoration': this.state.checked ? 'line-through':''
      }; */
    
    /* if (this.props.todos.length > 0){
      return (
            <div>
              {this.props.todos.map((item,key)=>{
                return (
                    <span key={key}>
                      <input type="checkbox"/>
                      {item.task} 
                      <button onClick={this.props.fnDeleteTask()}>Delete</button>
                    </span>
                )
              })
              }
            </div>
          );
    }

    return null     */

    if (this.props.todos.length > 0){
      return (<ul>
              {
                this.props.todos.map((item,key)=>{
                  return (
                    <li key={key}>
                    <button type="button" onClick={()=>this.props.fnDeleteTask(item.id)}>Delete</button>
                     <input id={item.id} onChange={(e)=>this.props.fnHandleChecked(item.id,e)} type="checkbox"/>
                      {item.task}
                    </li>
                  )
                })             
              }
    
              </ul>
      );
    }

    return null    
  }
}