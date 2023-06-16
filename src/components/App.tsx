import React from 'react';
import { useTranslation } from 'react-i18next';

import { Context } from '../Context';
import { ITodo } from '../types/data';

import { Navbar } from './';
import { TodoList } from './TodoList';

import '../index.scss';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);
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
          complete: false,
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
          complete: !todo.complete,
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

  return (
    <>
      <Context.Provider value={{ darkMode, setDarkMode }}>
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
            <button onClick={addTodo}>{t('add')}</button>
          </div>
          <TodoList items={todoList} removeTodo={removeTodo} checkTodo={checkTodo} />
        </div>
      </Context.Provider>
    </>
  );
};

export default App;
