import React, { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { addTodo } from '../api/todo';
import todoListState from './atoms/todoList';

function TodoForm(): React.ReactElement {
  const inputref = useRef<HTMLInputElement>();

  const setTodoList = useSetRecoilState(todoListState);

  const handleAddButton = async () => {
    // Update atom
    const data = await addTodo(inputref.current.value);
    if (data) {
      setTodoList((prev) => [
        ...prev,
        {
          id: data.id,
          title: data.title,
        },
      ]);
      inputref.current.value = '';
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '16px 0px' }}>
      <input ref={inputref} type="text"></input>
      <button type="button" onClick={handleAddButton}>
        add todo
      </button>
    </div>
  );
}

export default TodoForm;
