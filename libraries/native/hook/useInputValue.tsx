import { useState } from 'react';

export default function useInputValue(initialState = '') {
  const [searchValue, setSearchValue] = useState(initialState);
  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return {
    searchValue,
    onSearchChange,
    setSearchValue,
  };
}
