import React from 'react'
import Form from './Form'
import ListOfTasks from './ListOftasks';

class ToDo extends React.Component {
    render() {
        return(
            <div>
                <Form />
                <ListOfTasks />
            </div>
        )
    }
}

export default ToDo