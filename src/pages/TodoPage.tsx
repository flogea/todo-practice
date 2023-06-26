import React from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Context from '../Context';
import { ITodo } from '../types/data';

import Navbar from '../widgets/Navbar';
import { TodoList } from '../entities/TodoList';

import '../index.scss';
import Notification from '../widgets/Notification';
import NotificationContext from '../context/NotificationContext';

const TodoPage: React.FC = () => {
  const { setShowNotification } = React.useContext(NotificationContext);

  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  React.useEffect(() => {
    darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }, [darkMode]);

  const { t, i18n } = useTranslation();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const [value, setValue] = React.useState<string>('');
  const [todoList, setTodoList] = React.useState<ITodo[]>([]);

  const addTodo = () => {
    if (value) {
      setTodoList([
        ...todoList,
        {
          id: Date.now(),
          title: value,
          isCompleted: false,
        },
      ]);
      setValue('');
    }
  };

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

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const ErrorNotify = (err: string) => toast.error(`Error: ${err}`);

  const SuccessNotify = () => toast.success('Success');

  React.useEffect(() => {
    axios
      .get('https://64958126b08e17c917923215.mockapi.io/api/v1/todo')
      .then((res) => {
        if (res.data) {
          SuccessNotify();
        }
      })
      .catch((err) => {
        ErrorNotify(err);
      });
  }, []);

  return (
    <>
      <Context>
        <div className={darkMode ? 'container dark' : 'container'}>
          <Navbar />
          <div className="addTodo">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              ref={inputRef}
            />
            <button onClick={addTodo}>{t<string>('add')}</button>
          </div>
          <TodoList items={todoList} removeTodo={removeTodo} checkTodo={checkTodo} />
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Notification />
      </Context>
    </>
  );
};

export default TodoPage;
