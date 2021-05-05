import React from 'react';

interface TodoSearchBoxProps {
  onChange: React.ChangeEventHandler;
}

function TodoSearchBox({ onChange }: TodoSearchBoxProps): React.ReactElement {
  return (
    <div style={{ margin: '16px 0px', textAlign: 'right' }}>
      <label htmlFor="search">SEARCH</label>
      <input name="search" type="text" onChange={onChange} />
    </div>
  );
}

export default TodoSearchBox;
