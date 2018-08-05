import React from 'react'

import SingleTask from './SingleTask'

const ListOfTasks = (props) => (
   <div>
       {props.tasksFunc.map(task => (
       <SingleTask 
        name = {task.name}
        deleteTaskFunc={() => props.deleteTaskFunc(task.key)}
       />
       ))}
   </div>
)

export default ListOfTasks

