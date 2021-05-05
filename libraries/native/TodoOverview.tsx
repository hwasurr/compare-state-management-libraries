import React, { useContext, useMemo } from 'react';
import { Todo } from '../interface/todo';
import { searchContext } from './context/searchContext';

interface TodoOverviewProps {
  todos: Todo[];
}

function TodoOverview({ todos }: TodoOverviewProps): React.ReactElement {
  const searchContextValue = useContext(searchContext);

  const filteredTodoList = useMemo(
    () => todos.filter((todo) => todo.title.includes(searchContextValue)),
    [todos, searchContextValue]
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
