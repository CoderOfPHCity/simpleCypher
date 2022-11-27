import React from "react";
import { connect } from "react-redux";

class AddTodoForm extends React.Component {
  state = { text: "" };

  handleTextChange = event => {
    const text = event.target.value;
    this.setState({ text });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.text} onChange={this.handleTextChange} />
        <button type="submit">Add todo</button>
      </form>
    );
  };
}

const mapDispatch = dispatch => ({
  addTodo: dispatch.todos.add
});

export default connect(null, mapDispatch)(AddTodoForm);
