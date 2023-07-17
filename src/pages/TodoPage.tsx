import React from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';

import '../index.scss';

import ThemeContext from '../context/ThemeContext';
import InteractionWidget from '../widgets/InteractionWidget';
import NotificationContext from '../context/NotificationContext';
import Navbar from '../widgets/Navbar';
import TodoServiceImpl from '../service/TodoServiceImpl';
import { TodoList } from '../entities/TodoList';
import TodoStoreImpl from '../store/TodoStoreImpl';

enum Status {
  danger = 'danger',
  success = 'success',
  warning = 'warning',
}

const TodoPage: React.FC = observer(() => {
  const { NotificationHandler } = React.useContext(NotificationContext);
  const { darkMode } = React.useContext(ThemeContext);
  console.log(darkMode);

  React.useEffect(() => {
    darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }, [darkMode]);

  const todoStore = new TodoStoreImpl();
  const todoService = new TodoServiceImpl(todoStore);

  React.useEffect(() => {
    axios
      .get('https://64958126b08e17c917923215.mockapi.io/api/v1/todo')
      .then((res) => {
        if (res.data) {
          NotificationHandler(Status.success, 'something string');
          todoService.setTodos(
            res.data.map((todo) => {
              return { ...todo, id: todo.id, title: todo.todo, isCompleted: false };
            }),
          );
        }
      })
      .catch((err) => {
        NotificationHandler(Status.danger, `${err.message}`);
      });
  }, []);

  return (
    <>
      <div className={darkMode ? 'container dark' : 'container'}>
        <Navbar />
        <div className="addTodo">
          <InteractionWidget />
        </div>
        <TodoList />
      </div>
    </>
  );
});

export default TodoPage;
