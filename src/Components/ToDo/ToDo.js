import React from 'react'
import Form from './Form'
import ListOfTasks from './ListOfTasks';
import PaperContainer from '../PaperContainer';

class ToDo extends React.Component {
    state ={
        tasks: [
            {name: 'Posprzątaj mieszkanie', key:'123'},
            {name: 'Wyprowadź psa', key:'456'},
            {name: 'Umyj okna', key:'789'}
        ]
    }

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