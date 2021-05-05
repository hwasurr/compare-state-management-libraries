import React from 'react';
import { Todo } from '../interface/todo';

interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: number) => void;
}

function TodoItem({
  todo: { id, title },
  removeTodo,
}: TodoItemProps): React.ReactElement {
  return (
    <li key={id}>
      {`${id}. ${title}`}
      <button type="button" onClick={() => removeTodo(id)}>
        done
      </button>
    </li>
  );
}

export default TodoItem;
