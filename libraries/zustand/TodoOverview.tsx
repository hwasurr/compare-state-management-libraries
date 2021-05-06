import React from 'react';
import useTodoStore from './store/useTodoStore';


function TodoOverview(): React.ReactElement {
  const {stats, todoSearchText, todos } = useTodoStore();
  return (
    <div>
      <h2>Todo Overview</h2>
      <div>
        <p>총 개수: {todoSearchText ? stats.length : todos.length}</p>
        <p>
          a 가 들어간 총 개수:{' '}
          {todoSearchText ? stats.includeA.length : todos.filter((todo) => todo.title.includes('a')).length}
        </p>
      </div>
    </div>
  );
}

export default TodoOverview;
