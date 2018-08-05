import React from 'react'

import MenuItem from 'material-ui/MenuItem'
import Delete from 'material-ui/svg-icons/action/delete'

const SingleTask = (props) => (
    <MenuItem 
    primaryText={props.nameProp}
    rightIcon={<Delete onClick={() => {props.deleteTaskProp}}/>}
    />
)

export default SingleTask