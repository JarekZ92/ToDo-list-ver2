import React from 'react'

import SingleTask from './SingleTask'

const ListOfTasks = (props) => (
   <div>
       {props.taskProp}
   <SingleTask />
   </div>
)

export default ListOfTasks

