import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import todoListStatsState from './atoms/todoListStats';

function TodoOverview(): React.ReactElement {
  const todoListStatsLoadable = useRecoilValueLoadable(todoListStatsState);
  return (
    <div>
      <h2>Todo Overview</h2>
      {todoListStatsLoadable.state === 'hasValue' && (
        <div>
          <p>총 개수: {todoListStatsLoadable.contents.length}</p>
          <p>
            a 가 들어간 총 개수:{' '}
            {todoListStatsLoadable.contents.IncludeA.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default TodoOverview;
