import { atom } from 'recoil';

const todoListSearchState = atom({
  key: 'todoListSearchState',
  default: '',
});

export default todoListSearchState;
