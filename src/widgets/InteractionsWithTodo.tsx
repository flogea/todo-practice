import React from 'react';
import { ITodo } from '../types/data';
import { TodoList } from '../entities/TodoList';

function InteractionsWithTodo() {
  const [todoList, setTodoList] = React.useState<ITodo[]>([]);

  const removeTodo = (id: number): void => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id: number): void => {
    setTodoList(
      todoList.map((todo) => {
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

  return (
    <>
      <TodoList items={todoList} removeTodo={removeTodo} checkTodo={checkTodo} />
    </>
  );
}

export default InteractionsWithTodo;
