import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: '',
      Comments: '',
      topic: 'react'
    };
  }

  userNameChange = event => {
    this.setState({
      UserName: event.target.value
    });
  };

  handleCOmmentsChange = event => {
    this.setState({
      Comments: event.target.value
    });
  };

  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    });
  };

  handleSubmit = event => {
    alert(`${this.state.UserName} ${this.state.Comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { UserName, Comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={UserName}
            onChange={this.userNameChange}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={Comments}
            onChange={this.handleCOmmentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
