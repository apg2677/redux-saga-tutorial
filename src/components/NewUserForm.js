import React, { Component } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

class NewUserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });

    this.setState({
      firstName: "",
      lastName: "",
    });
  };
  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            required
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleFirstNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            required
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleLastNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Button block outline type="submit" color="primary">
            Create
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default NewUserForm;
