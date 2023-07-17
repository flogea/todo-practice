import React from 'react';
import Input from '../uiKit/Input';
import { ITodo } from '../types/data';
import { useTranslation } from 'react-i18next';
import TodoStoreImpl from '../store/TodoStoreImpl';
import TodoServiceImpl from '../service/TodoServiceImpl';

function InteractionWidget() {
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState<string>('');

  const todoStore = new TodoStoreImpl();
  const todoService = new TodoServiceImpl(todoStore);

  const addTodo = () => {
    if (value) {
      todoService.setTodos([
        ...todoStore.todo,
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
      <button onClick={() => todoService.setTodos(todoStore.sortedTodoDesc)}>ask</button>
      <button onClick={() => todoService.setTodos(todoStore.sortedTodoDesc)}>desc</button>
    </>
  );
}

export default InteractionWidget;
