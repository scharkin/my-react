import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Email submitted", this.state.email);
  }

  handleEmailChange(event) {
    console.log("Email changed", event.target.value);
    this.setState({email: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.handleEmailChange}
          className="emailField"
        />
        <button className="submitBtn">Save</button>
      </form>
    )
  }
}

export default RegistrationForm;
