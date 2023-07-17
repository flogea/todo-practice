import React from 'react';

import { ITodo } from '../types/data';
import TodoStoreImpl from '../store/TodoStoreImpl';
import TodoServiceImpl from '../service/TodoServiceImpl';

const TodoItem: React.FC<ITodo> = (props) => {
  const { id, title, isCompleted } = props;

  const todoStore = new TodoStoreImpl();
  const todoService = new TodoServiceImpl(todoStore);

  return (
    <div className="todoItem">
      <input
        type="checkbox"
        name="todos"
        id={`${id}`}
        checked={isCompleted}
        className="completing"
        onChange={() => todoService.checkTodo(id)}
      />
      <h1 className="title">{title}</h1>
      <button onClick={() => todoService.removeTodo(id)} className="closeBtn">
        &#x2715;
      </button>
    </div>
  );
};

export { TodoItem };
