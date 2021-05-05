import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../interface/todo';
import { removeTodo } from './reducer/todoReducer';
import { AppDispatch } from './store';

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo: { id, title } }: TodoItemProps): React.ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <li key={id}>
      {`${id}. ${title}`}
      <button type="button" onClick={() => dispatch(removeTodo(id))}>
        done
      </button>
    </li>
  );
}

export default TodoItem;
