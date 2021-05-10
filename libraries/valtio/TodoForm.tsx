import React, { useRef } from 'react';
import { _addTodo } from './proxies/todoProxy';

function TodoForm(): React.ReactElement {
  const inputref = useRef<HTMLInputElement>();


  return (
    <div style={{ textAlign: 'center', margin: '16px 0px' }}>
      <input ref={inputref} type="text"></input>
      <button
        type="button"
        onClick={() => {
          const newTodo = inputref.current.value;
          _addTodo(newTodo);
          inputref.current.value = '';
        }}
      >
        add todo
      </button>
    </div>
  );
}

export default TodoForm;
