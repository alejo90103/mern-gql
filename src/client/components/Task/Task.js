import React, { Component } from 'react';

class Task extends Component {
  constructor() {
    super();

    this.handlePriority = this.handlePriority.bind(this);
  }

  handlePriority(priority) {
    if (priority === 'High') {
      return <span className="badge badge-pill badge-danger ml-2">{ priority }</span>;
    } else if (priority === 'Medium') {
      return <span className="badge badge-pill badge-warning ml-2">{ priority }</span>;
    } else {
      return <span className="badge badge-pill badge-info ml-2">{ priority }</span>;
    }
  }

  render() {
    return (
      this.props.tasks.map((task, i) => {
        return (
          <div className="col-md-4" key={i}>
            <div className="card mt-4">
              <div className="card text-white bg-secondary">
                <div className="card-header">
                  <h1>{ task.title }</h1>
                  {this.handlePriority(task.priority)}
                </div>
                <div className="card-body">
                  <p className="card-text">{ task.description }</p>
                </div>
                <div className="card-footer text-muted">
                  <p className="card-text text-white">{ task.responsible }</p>
                  <button type="button" className="btn btn-danger" onClick={this.props.onDeleteTask.bind(this, i, task._id)}>Delete</button>
                </div>

              </div>
            </div>
          </div>
        );
      })
    );
  }
}

export default Task;
