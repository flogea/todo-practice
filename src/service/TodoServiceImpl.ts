import { ITodoService } from './ITodoService';
import { ITodoStore } from '../store/ITodoStore';
import { ITodo } from '../types/data';
import { runInAction } from 'mobx';

export default class TodoServiceImpl implements ITodoService {
  constructor(private store: ITodoStore) {}

  setTodos = (todos: ITodo[]) => {
    runInAction(() => {
      this.store.todo = todos;
    });
  };
}
