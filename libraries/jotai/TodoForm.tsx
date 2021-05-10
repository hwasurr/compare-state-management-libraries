import { useAtom } from 'jotai';
import React, { useRef } from 'react';
import { addTodoAtom } from './atoms/toDoAtom';

function TodoForm(): React.ReactElement {
  const inputref = useRef<HTMLInputElement>();

  const [, addTodo] = useAtom(addTodoAtom);

  return (
    <div style={{ textAlign: 'center', margin: '16px 0px' }}>
      <input ref={inputref} type="text"></input>
      <button
        type="button"
        onClick={() => {
          const newTodo = inputref.current.value;
          addTodo(newTodo);
          inputref.current.value = '';
        }}
      >
        add todo
      </button>
    </div>
  );
}

export default TodoForm;
