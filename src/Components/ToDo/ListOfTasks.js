import React from 'react'

import SingleTask from './SingleTask'

const ListOfTasks = (props) => (
   <div>
       {props.tasksProp.map(task => (
       <SingleTask 
        nameProp = {task.name}
       />
       ))}
   </div>
)

export default ListOfTasks

