import React from 'react';
import { ITodo } from '../../types/data';
import { TodoItem } from './TodoItem';

interface ITodoList {
  items: ITodo[];
  removeTodo: (id: number) => void;
  checkTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoList> = (props) => {
  const { removeTodo, checkTodo, items } = props;

  return (
    <div className="todoList">
      {items.map((todo) => (
        <TodoItem key={todo.id} removeTodo={removeTodo} checkTodo={checkTodo} {...todo} />
      ))}
    </div>
  );
};

export { TodoList };
