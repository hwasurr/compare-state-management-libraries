import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchText } from './reducer/todoReducer';
import { AppDispatch } from './store';

function TodoSearchBox(): React.ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div style={{ margin: '16px 0px', textAlign: 'right' }}>
      <label htmlFor="search">SEARCH</label>
      <input
        name="search"
        type="text"
        onChange={(e) => dispatch(changeSearchText(e.target.value))}
      />
    </div>
  );
}

export default TodoSearchBox;
