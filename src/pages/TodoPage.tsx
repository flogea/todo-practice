import React from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import todoStore from '../store/todoStore';

import { ITodo } from '../types/data';

import Navbar from '../widgets/Navbar';
import { TodoList } from '../entities/TodoList';

import '../index.scss';
import NotificationContext from '../context/NotificationContext';
import ThemeContext from '../context/ThemeContext';

const TodoPage: React.FC = observer(() => {
  const { showNotification, NotificationHandler } = React.useContext(NotificationContext);
  const { darkMode } = React.useContext(ThemeContext);
  console.log(darkMode);

  // const [darkMode, setDarkMode] = React.useState<boolean>(false);
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

  React.useEffect(() => {
    axios
      .get('https://64958126b08e17c917923215.mockapi.io/api/v1/todo')
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          NotificationHandler('success', 'something string');

          setTodoList(
            res.data.map((todo) => {
              return { ...todo, id: todo.id, title: todo.todo, isCompleted: false };
            }),
          );

          // const mystore = new todoStore();
          todoStore.setTodos(res.data);
        }
      })
      .catch((err) => {
        NotificationHandler('danger', `${err.message}`);
      });
  }, []);

  return (
    <>
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
          <button onClick={() => setTodoList(todoStore.sortedTodoAsk)}>ask</button>
          <button onClick={() => setTodoList(todoStore.sortedTodoDesc)}>desc</button>
        </div>
        <TodoList items={todoList} removeTodo={removeTodo} checkTodo={checkTodo} />
      </div>
    </>
  );
});

export default TodoPage;
