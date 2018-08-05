import React from 'react'
import Form from './Form'
import ListOfTasks from './ListOfTasks';
import PaperContainer from '../PaperContainer';

class ToDo extends React.Component {
    state ={
        tasks: [
            {name: 'Posprzątaj mieszkanie',key:'123'},
            {name: 'Wyprowadź psa',key:'456'},
            {name: 'Umyj okna',key:'789'}
        ]
    }

    removeTask = (taskKey) => {
        const newTasksArray = this.state.tasks.filter(task => taskKey !== task.key)
        this.setState({
            tasks: newTasksArray
        })
    }

    render() {
        return(
            <div>
                <PaperContainer>
                <Form />
                </PaperContainer>
                <PaperContainer>
                <ListOfTasks
                tasksProp={this.state.tasks}
                deleteTaskProp={(key) => alert(key)}
                />
                </PaperContainer>
            </div>
        )
    }
}

export default ToDo