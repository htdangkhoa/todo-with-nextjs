import React, { Component } from "react";
import { Input } from "reactstrap";
import styled from "styled-components";
import { observer } from "mobx-react";
import TodoStore from "../stores/Todo.store";

const Wrapper = styled.input`
  ::-webkit-input-placeholder {
    font-style: italic;
  }
  :-moz-placeholder {
    font-style: italic;
  }
  ::-moz-placeholder {
    font-style: italic;
  }
  :-ms-input-placeholder {
    font-style: italic;
  }

  border: 1px solid black;
  border-radius: 0px;
  font-size: 24px;
  padding: 24px;
  margin-bottom: 16px;
  margin-top: 16px;
`.withComponent(Input);

@observer
class NewTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  onKeyDown = e => {
    if (e.keyCode === 13) {
      console.log("Enter key is pressed.");

      TodoStore.add(this.state.inputValue);

      this.setState({ inputValue: '' })
    }
  };

  onChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <Wrapper
        placeholder="What needs to be done?"
        value={this.state.inputValue}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default NewTodo;
