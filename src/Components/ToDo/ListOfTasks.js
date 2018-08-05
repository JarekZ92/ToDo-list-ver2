import React from 'react'

import SingleTask from './SingleTask'

const ListOfTasks = (props) => (
   <div>
       {props.tasksProp.map(task => (
       <SingleTask 
        nameProp = {task.name}
        deleteTaskProp2={() => props.deleteTaskProp(task.key)}
       />
       ))}
   </div>
)

export default ListOfTasks

