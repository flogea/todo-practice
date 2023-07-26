import { ITodoStore } from './ITodoStore';
import { makeAutoObservable } from 'mobx';

export default class TodoStoreImpl implements ITodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  todo = [{ id: 0, title: '', isCompleted: false }];

  get sortedTodoDesc() {
    return this.todo.slice().sort();
  }
}
