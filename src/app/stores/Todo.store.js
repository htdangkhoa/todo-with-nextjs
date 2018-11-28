import { observable, action } from "mobx";
import axios from "axios";

class Store {
  @observable todos = [];

  @action fetchData = async () => {
    const result = await axios({
      url: `${global.host}/todos`,
      method: "GET"
    });

    const { data } = result;

    const { payload } = data;

    this.todos = payload || [];
  };

  @action add = async content => {
    const result = await axios({
      url: `${global.host}/todo`,
      method: "POST",
      data: { content }
    });

    const { data } = result;

    const { payload } = data;

    if (!payload) return;

    this.todos.push(payload);
  };

  @action update = async id => {
    const todo = this.todos.find(t => t._id === id);

    if (!todo) return;

    const result = await axios({
      url: `${global.host}/todo`,
      method: "PATCH",
      data: { id, isDone: !todo.isDone }
    });

    const { data } = result;

    const { payload } = data;

    if (!payload) return;

    todo.isDone = payload.isDone;
  };
}

export default new Store();
