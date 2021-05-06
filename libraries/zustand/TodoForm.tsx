import React, { useRef } from 'react';
import useTodoStore from './store/useTodoStore';

function TodoForm(): React.ReactElement {
  const inputref = useRef<HTMLInputElement>();

  const addTodo = useTodoStore((state) => state.addTodo);

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
