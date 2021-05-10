import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './reducer/todoReducer';
import { AppDispatch } from './store';

function TodoForm(): React.ReactElement {
  const inputref = useRef<HTMLInputElement>();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: 'center', margin: '16px 0px' }}>
      <input ref={inputref} type="text"></input>
      <button
        type="button"
        onClick={() => {
          const newTodo = inputref.current.value;
          dispatch(addTodo(newTodo));
          inputref.current.value = '';
        }}
      >
        add todo
      </button>
    </div>
  );
}

export default TodoForm;
