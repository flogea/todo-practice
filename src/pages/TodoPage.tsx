import React from 'react';
import { observer } from 'mobx-react';

import Navbar from '../widgets/Navbar';

import '../index.scss';
import ThemeContext from '../context/ThemeContext';
import getTodos from '../api/getTodos';
import InteractionWidget from '../widgets/InteractionWidget';
import InteractionsWithTodo from '../widgets/InteractionsWithTodo';

const TodoPage: React.FC = observer(() => {
  const { darkMode } = React.useContext(ThemeContext);
  console.log(darkMode);

  React.useEffect(() => {
    darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }, [darkMode]);

  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className={darkMode ? 'container dark' : 'container'}>
        <Navbar />
        <div className="addTodo">
          <InteractionWidget />
        </div>
        <InteractionsWithTodo />
      </div>
    </>
  );
});

export default TodoPage;
