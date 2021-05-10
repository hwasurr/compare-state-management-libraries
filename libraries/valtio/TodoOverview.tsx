import React, { useMemo } from 'react';
import { useSnapshot } from 'valtio';
import { todoProxyState } from './proxies/todoProxy';

function TodoOverview(): React.ReactElement {
  const snapshot = useSnapshot(todoProxyState);

  const filtered = useMemo(() => snapshot.todos
  .filter((todo) => todo.title.includes(snapshot.searchValue)), [snapshot.searchValue])

  return (
    <div>
      <h2>Todo Overview</h2>
      <div>
        <p>총 개수: {filtered.length}</p>
        <p>
          a 가 들어간 총 개수:{' '}
          {filtered.filter((todo) => todo.title.includes('a')).length}
        </p>
      </div>
    </div>
  );
}

export default TodoOverview;
