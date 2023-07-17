import React from 'react';
import { TodoItem } from './TodoItem';
import TodoStoreImpl from '../store/TodoStoreImpl';

const TodoList: React.FC = () => {
  const todoStore = new TodoStoreImpl();

  React.useEffect(() => {
    console.log(todoStore);
  }, [todoStore]);

  return (
    <div className="todoList">
      {todoStore.todo.map((todo) => (
        <TodoItem id={0} title={''} isCompleted={false} key={todo} {...todoStore.todo} />
      ))}
    </div>
  );
};

export { TodoList };
