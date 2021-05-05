import React, { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function TodoOverview(): React.ReactElement {
  const todoState = useSelector((state: RootState) => state.todo);

  const filteredTodoList = useMemo(
    () =>
      todoState.todos.filter((todo) =>
        todo.title.includes(todoState.searchText)
      ),
    [todoState.todos, todoState.searchText]
  );

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
