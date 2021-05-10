import React from 'react';
import { useSnapshot } from 'valtio';
import { onSearchFieldChanged, todoProxyState } from './proxies/todoProxy';

function TodoSearchBox(): React.ReactElement {
  const { searchValue } = useSnapshot(todoProxyState)

  return (
    <div style={{ margin: '16px 0px', textAlign: 'right' }}>
      <label htmlFor="search">SEARCH</label>
      <input
        name="search"
        type="text"
        value={searchValue}
        onChange={onSearchFieldChanged}
      />
    </div>
  );
}

export default TodoSearchBox;
