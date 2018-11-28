import React, { Component } from "react";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { observer } from "mobx-react";
import TodoStore from "../stores/Todo.store";

const Wrapper = styled.li`
  text-decoration: ${props => (props.isDone ? "line-through" : "none")};

  label {
    word-break: break-all;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
    font-size: 24px;
  }

  label div {
    width: 28px;
    height: 28px;
    display: inline-block;
    text-align: center;
    margin-right: 16px;
    border-radius: 3px;
    cursor: pointer;
    word-break: break-all;
    -webkit-transition: color 0.4s;
    transition: color 0.4s;
    border: 2px solid #000000;
    vertical-align: middle;

    .icon {
      display: ${props => (props.isDone ? "inline" : "none")};
    }
  }

  label:hover div {
    background: #d0d0d0;
  }

  input:checked + label div {
    background: #d0d0d0;
  }
`;

@observer
class ItemTodo extends Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    const { id, isDone } = this.props;

    TodoStore.update(id, isDone);
  };

  render() {
    return (
      <Wrapper id={this.props.id} isDone={this.props.isDone}>
        <label onClick={this.onClick}>
          <div>
            <FontAwesomeIcon className="icon" icon={faCheck} size="sm" />
          </div>
          <code>{this.props.content}</code>
        </label>
      </Wrapper>
    );
  }
}

export default ItemTodo;
