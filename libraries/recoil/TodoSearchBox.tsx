import React from 'react';
import { useRecoilState } from 'recoil';
import todoListSearchState from './atoms/todoSearchValue';

function TodoSearchBox(): React.ReactElement {
  const [searchValue, setSearchValue] = useRecoilState(todoListSearchState);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }
  return (
    <div style={{ margin: '16px 0px', textAlign: 'right' }}>
      <label htmlFor="search">SEARCH</label>
      <input
        name="search"
        type="text"
        value={searchValue}
        onChange={onChange}
      />
    </div>
  );
}

export default TodoSearchBox;
