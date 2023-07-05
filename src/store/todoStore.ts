import { observable, computed, action } from 'mobx';
import { ITodo } from '../types/data';

class TodoStore {
  @observable todo: ITodo[] = [];

  @action
  setTodos(todo: ITodo[]) {
    this.todo = todo;
  }

  @computed get sortedTodoAsk(): ITodo[] {
    return this.todo.slice().sort((a, b) => a.id - b.id);
  }

  @computed get sortedTodoDesc(): ITodo[] {
    return this.todo.slice().sort((a, b) => b.id - a.id);
  }
}

// const todoStore = new TodoStore();
export default new TodoStore();
