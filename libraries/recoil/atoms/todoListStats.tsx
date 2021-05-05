import { selector } from 'recoil';
import filteredTodoListState from './filteredTodoList';

const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(filteredTodoListState);

    return {
      length: todoList.length,
      IncludeA: todoList.filter((todo) => todo.title.includes('a')),
    };
  },
});

export default todoListStatsState;
