import React, { useRef } from 'react';

interface TodoFormProps {
  addTodo: (todotitle: string) => void;
}
function TodoForm({ addTodo }: TodoFormProps): React.ReactElement {
  const inputref = useRef<HTMLInputElement>();

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
