import "bootstrap/dist/css/bootstrap.min.css";
import "../config";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Container } from "reactstrap";
import { observer } from "mobx-react";
import CustomNav from "../components/CustomNav.component";
import NewTodo from "../components/NewTodo.component";
import ItemTodo from "../components/ItemTodo.component";
import TodoStore from "../stores/Todo.store";

@observer
class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "wolrd"
    };
  }

  componentDidMount() {
    TodoStore.fetchData();
  }

  render() {
    const { url } = this.props;

    return (
      <div>
        <Head>
          <title>Todo</title>

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        {/* <CustomNav /> */}

        <Container>
          <NewTodo />
          <ul style={{ listStyleType: "none" }}>
            {TodoStore.todos.map((todo, index) => (
              <ItemTodo
                key={index}
                id={todo._id}
                content={todo.content}
                isDone={todo.isDone}
              />
            ))}
          </ul>
        </Container>
      </div>
    );
  }
}

export default Index;
