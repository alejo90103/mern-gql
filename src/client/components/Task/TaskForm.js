import React, { Component } from 'react';

class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      responsible: '',
      priority: 'Low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTask(this.state);
  }

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>

          {/* <img className="mb-4" src="/bootstrap/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/> */}
          <h1 className="h3 mb-3 font-weight-normal text-center">Task</h1>

          <div className="form-group">
            <input id="title" name="title" className="form-control" placeholder="Title" type="text" onChange={this.handleInput}/>
          </div>

          <div className="form-group">
            <input id="responsible" name="responsible" className="form-control" placeholder="Responsible" type="text" onChange={this.handleInput}/>
          </div>

          <div className="form-group">
            <textarea id="description" name="description" className="form-control" placeholder="Description" type="textarea" onChange={this.handleInput}/>
          </div>

          <div className="form-group">
            <label className="text-left">Priority</label>
            <select className="form-control" id="select" name="priority" onChange={this.handleInput}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
