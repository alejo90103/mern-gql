import React, { Component } from 'react';

import Task from './components/Task/Task';
import TaskForm from './components/Task/TaskForm';

class App extends Component {
  constructor() {
    super();

    this.handleAllTasks = this.handleAllTasks.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);

    this.state = {
      tasks: []
    };

    this.handleAllTasks(this);

  }

  handleAllTasks(e) {
    $.ajax(
      {
        url: '/graphql',
        data:{query: 'query {allTasks{_id, title, responsible, description, priority}}'},
        type: 'GET',
        dataType: 'json',
        async: 'false',
        success: function (res) {
          e.setState({
            tasks: res.data.allTasks
          });
        }
      }
    );
  }

  handleAddTask (task) {
    var state = this;
    $.ajax(
      {
        url: 'http://localhost:3000/graphql',
        data:{query: `mutation{createTask(title: "${task.title.toString()}", responsible: "${task.responsible.toString()}", description: "${task.description.toString()}", priority: "${task.priority.toString()}"){_id,title,responsible,description,priority}}`},
        type: 'POST',
        dataType: 'json',
        success: function (res) {
          console.log(`Response: ${res.data.createTask}`);
          state.setState({
            tasks: [...state.state.tasks, res.data.createTask]
          });
        },
        error: function (err) {
          console.log(err);
        }
      }
    );
  }

  handleDeleteTask (index, _id) {
    var state = this;
    if (window.confirm('Do you want to remove the task?')) {
      $.ajax(
        {
          url: 'http://localhost:3000/graphql',
          data:{query: `mutation{deleteTask(_id: "${_id}"){_id,title,description,responsible,priority}}`},
          type: 'POST',
          dataType: 'json',
          success: function (res) {
            console.log(`Response: ${res.data.createTask}`);
            state.setState({
              tasks: state.state.tasks.filter((e, i)=>{
                return i !== index;
              })
            });
          },
          error: function (err) {
            console.log(err);
          }
        }
      );

    }
  }

  render() {
    return (
      <div>
        <div className="App">

          <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
              Tasks
              <span className="badge badge-pill badge-light ml-2">
                {this.state.tasks.length}
              </span>
            </a>
          </nav>

          <div className="row">
            <div className="col-md-4 mt-5">
              <TaskForm onAddTask={this.handleAddTask} />
            </div>
            <div className="col-md-8 text-center">
              <div className="row mt-4">
                <Task tasks={this.state.tasks} onDeleteTask={this.handleDeleteTask}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
