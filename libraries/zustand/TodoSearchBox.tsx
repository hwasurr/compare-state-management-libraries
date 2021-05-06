import React from 'react';
import useTodoStore from './store/useTodoStore';

function TodoSearchBox(): React.ReactElement {
  const onSearchTextChange = useTodoStore((state) => state.changeSearchText);
  return (
    <div style={{ margin: '16px 0px', textAlign: 'right' }}>
      <label htmlFor="search">SEARCH</label>
      <input name="search" type="text" onChange={(e) => onSearchTextChange(e.target.value)} />
    </div>
  );
}

export default TodoSearchBox;
