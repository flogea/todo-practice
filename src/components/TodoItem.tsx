import React from 'react';

import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  checkTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, checkTodo } = props;

  return (
    <div className="todoItem">
      <input
        type="checkbox"
        name="todos"
        id=""
        checked={complete}
        className="completing"
        onChange={() => checkTodo(id)}
      />
      <h1 className="title">{title}</h1>
      <button onClick={() => removeTodo(id)} className="closeBtn">
        &#x2715;
      </button>
    </div>
  );
};

export { TodoItem };
