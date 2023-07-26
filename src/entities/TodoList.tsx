import React from 'react';
import { TodoItem } from './TodoItem';
import todoStore from '../store/TodoStore';
import { observer } from 'mobx-react-lite';

const TodoList: React.FC = observer(() => {
  React.useEffect(() => {
    console.log(todoStore);
  }, [todoStore]);

  return (
    <div className="todoList">
      {todoStore.todo.map((todo, index) => (
        <TodoItem key={index} {...todo} />
      ))}
    </div>
  );
});

export { TodoList };
