import { atom, selector } from 'recoil';
import getTodos from '../../api/todo';
import { Todo } from '../../interface/todo';

const todoListState = atom<Todo[]>({
  key: 'todos', // unique id
  default: selector({
    key: 'todos/default',
    get: async () => {
      const body = await getTodos();
      return body;
    },
  }),
});

export default todoListState;
