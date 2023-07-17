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

  checkTodo = (id: number): void => {
    this.setTodos(
      this.store.todo.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }),
    );
  };

  removeTodo = (id: number): void => {
    this.setTodos(this.store.todo.filter((todo) => todo.id !== id));
  };
}
