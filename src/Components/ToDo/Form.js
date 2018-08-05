import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';



const Forms = (props) => (
    <div>
        <TextField 
        fullWidth={true}
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