import { selector } from 'recoil';
import todoListState from './todoList';
import todoListSearchState from './todoSearchValue';

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const list = get(todoListState);
    const searchText = get(todoListSearchState);

    return list.filter((todo) => todo.title.includes(searchText));
  },
});

export default filteredTodoListState;
