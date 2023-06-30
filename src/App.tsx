import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import './index.scss';
import TodoPage from './pages/TodoPage';
import Context from './Context';
import Notification from './widgets/Notification';

const App: React.FC = () => {
  return (
    <Context>
      <Notification />
      <TodoPage />
    </Context>
  );
};

export default App;
