import React from 'react';

export default class TodosListItems extends React.Component {
  constructor(props){
      super(props);

      this.state = {
          isEditing: false,
          isChecked: false
      };
      
  }
 
  renderActionsSection(){
      if (this.state.isEditing){
      return (
        <td>
            <button>Save</button>
            <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>

      );
    }
    return (
        <td>
            
            <button onClick={this.onEditClick.bind(this)}>Edit</button>
            <button>Delete</button>
        </td>
    );

  }
  handleChecked(event) {
    this.setState({ checked: event.target.checked });
  }

  
    render () {
        let labelStyle={
            'text-decoration': this.state.checked ? 'line-through':''
          };
        return (
                <tr>
                    <td>
                    <label style={labelStyle}>
                    <input 
                    type="checkbox"
                    state={this.state.isChecked}
                    onChange={this.handleChecked.bind(this)}  />
                    {this.props.task}
                    </label>
                    </td>
                    {this.renderActionsSection()}
                </tr>
        );
}
onEditClick() {
    this.setState({ isEditing: true});

  }
  onCancelClick() {
    this.setState({ isEditing: false});
  } 
}