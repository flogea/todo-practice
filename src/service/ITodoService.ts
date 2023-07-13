import { ITodo } from '../types/data';

export interface ITodoService {
  setTodos: (todo: ITodo[]) => void;
}
