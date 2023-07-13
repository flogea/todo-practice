import { ITodoStore } from './ITodoStore';
import { makeAutoObservable } from 'mobx';

export default class TodoStoreImpl implements ITodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  todo = [];

  get sortedTodoDesc() {
    return this.todo.slice().sort();
  }
}
