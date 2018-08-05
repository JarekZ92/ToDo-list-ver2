import React from 'react'
import Form from './Form'
import ListOfTasks from './ListOfTasks';
import PaperContainer from '../PaperContainer';

class ToDo extends React.Component {
    render() {
        return(
            <div>
                <PaperContainer>
                <Form />
                </PaperContainer>
                <PaperContainer>
                <ListOfTasks />
                </PaperContainer>
            </div>
        )
    }
}

export default ToDo