import { useAtom } from 'jotai';
import React from 'react';
import { todoSearchTextAtom } from './atoms/toDoAtom';

function TodoSearchBox(): React.ReactElement {
  const [searchText, setSearchText] = useAtom(todoSearchTextAtom);

  return (
    <div style={{ margin: '16px 0px', textAlign: 'right' }}>
      <label htmlFor="search">SEARCH</label>
      <input
        name="search"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default TodoSearchBox;
