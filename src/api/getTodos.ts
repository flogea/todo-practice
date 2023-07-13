import axios from 'axios';
import NotificationContext from '../context/NotificationContext';
import React from 'react';
import { ITodo } from '../types/data';
import TodoServiceImpl from '../service/TodoServiceImpl';

enum Status {
  danger = 'danger',
  success = 'success',
  warning = 'warning',
}

export default function getTodos() {
  const { NotificationHandler } = React.useContext(NotificationContext);
  const [todoList, setTodoList] = React.useState<ITodo[]>([]);

  axios
    .get('https://64958126b08e17c917923215.mockapi.io/api/v1/todo')
    .then((res) => {
      if (res.data) {
        console.log(res.data);
        NotificationHandler(Status.success, 'something string');

        setTodoList(
          res.data.map((todo) => {
            return { ...todo, id: todo.id, title: todo.todo, isCompleted: false };
          }),
        );

        const TodoService = new TodoServiceImpl(res.data);
        TodoService.setTodos(res.data);
      }
    })
    .catch((err) => {
      NotificationHandler(Status.danger, `${err.message}`);
    });
}
