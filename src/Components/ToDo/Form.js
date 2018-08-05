import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';



const Forms = (props) => (
    <div>
        <TextField 
        value={props.newTaskName}
        fullWidth={true}
        onChange={props.newTaskNameChange}
        />
        <RaisedButton
        label={'Add new task!'}
        fullWidth={true}
        secondary={true}
        onClick={props.addNewTask}
        />
    </div>
)

export default Forms