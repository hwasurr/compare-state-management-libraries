import { useAtom } from 'jotai';
import React from 'react';
import { Todo } from '../interface/todo';
import { filteredTodoAtom } from './atoms/toDoAtom';

function TodoOverview(): React.ReactElement {
  const [filteredTodoList] = useAtom(filteredTodoAtom);
  return (
    <div>
      <h2>Todo Overview</h2>
      <div>
        <p>총 개수: {filteredTodoList.length}</p>
        <p>
          a 가 들어간 총 개수:{' '}
          {filteredTodoList.filter((todo) => todo.title.includes('a')).length}
        </p>
      </div>
    </div>
  );
}

export default TodoOverview;
