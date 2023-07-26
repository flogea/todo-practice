import { ITodoStore } from './ITodoStore';
import { makeAutoObservable } from 'mobx';

export default class TodoStoreImpl implements ITodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  todo = [{ id: 0, title: '', isCompleted: false }];

  get sortedTodoAsc() {
    return this.todo.slice().sort((a, b) => {
      return a.id - b.id;
    });
  }

  get sortedTodoDesc() {
    return this.todo.slice().sort((a, b) => {
      return b.id - a.id;
    });
  }
}
