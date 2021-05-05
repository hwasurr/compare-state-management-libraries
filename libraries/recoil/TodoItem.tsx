import React from 'react';
import { useSetRecoilState } from 'recoil';
import { removeTodo } from '../api/todo';
import { Todo } from '../interface/todo';
import todoListState from './atoms/todoList';

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo: { id, title } }: TodoItemProps): React.ReactElement {
  const setTodoList = useSetRecoilState(todoListState);

  const onRemoveClick = async () => {
    const isSuccess = await removeTodo(id);
    if (isSuccess) {
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    } else {
      alert('삭제실패');
    }
  };
  return (
    <li key={id}>
      {`${id}. ${title}`}
      <button type="button" onClick={onRemoveClick}>
        done
      </button>
    </li>
  );
}

export default TodoItem;
