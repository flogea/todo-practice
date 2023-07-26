import React from 'react';
import Input from '../uiKit/Input';
import { ITodo } from '../types/data';
import { useTranslation } from 'react-i18next';
import todoService from '../service/Todoservice';
import todoStore from '../store/TodoStore';

function InteractionWidget() {
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState<string>('');

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
      <button className="sort" onClick={() => todoService.setTodos(todoStore.sortedTodoAsc)}>
        &uarr;
      </button>
      <button className="sort" onClick={() => todoService.setTodos(todoStore.sortedTodoDesc)}>
        &darr;
      </button>
    </>
  );
}

export default InteractionWidget;
