import React from 'react';
import Input from '../uiKit/Input';
import { ITodo } from '../types/data';
import { useTranslation } from 'react-i18next';
import TodoStoreImpl from '../store/TodoStoreImpl';

function InteractionWidget() {
  const { t, i18n } = useTranslation();
  const [todoList, setTodoList] = React.useState<ITodo[]>([]);
  const [value, setValue] = React.useState<string>('');

  const TodoStore = new TodoStoreImpl();

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

  return (
    <>
      <Input value={value} setValue={setValue} addTodo={addTodo} />
      <button onClick={addTodo}>{t<string>('add')}</button>
      <button onClick={() => setTodoList(TodoStore.sortedTodoDesc)}>ask</button>
      <button onClick={() => setTodoList(TodoStore.sortedTodoDesc)}>desc</button>
    </>
  );
}

export default InteractionWidget;
