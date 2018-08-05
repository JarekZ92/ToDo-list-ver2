import React from "react";
import Form from "./Form";
import ListOfTasks from "./ListOfTasks";
import PaperContainer from "../PaperContainer";

class ToDo extends React.Component {
  state = {
    tasks: [
      { name: "Posprzątaj mieszkanie", key: "123" },
      { name: "Wyprowadź psa", key: "456" },
      { name: "Umyj okna", key: "789" }
    ],
    newTaskName: ""
  };

  newTaskNameChange = (event, newValue) => {
    this.setState({
      newTaskName: newValue
    });
  };

  addNewTask = () => {
    const newTask = {
      name: this.state.newTaskName,
      key: Date.now()
    };

    const newTasksArray = this.state.tasks.concat(newTask)
    this.setState({
        tasks: newTasksArray,
        newTaskName: ''
      });
  };

  removeTask = taskKey => {
    const newTasksArray = this.state.tasks.filter(task => taskKey !== task.key);
    this.setState({
      tasks: newTasksArray
    });
  };

  render() {
    return (
      <div>
        <PaperContainer>
          <Form
            newTaskNameChange={this.newTaskNameChange}
            newTaskName={this.state.newTaskName}
            addNewTask={this.addNewTask}
          />
        </PaperContainer>
        <PaperContainer>
          <ListOfTasks
            tasksFunc={this.state.tasks}
            deleteTaskFunc={this.removeTask}
          />
        </PaperContainer>
      </div>
    );
  }
}

export default ToDo;
