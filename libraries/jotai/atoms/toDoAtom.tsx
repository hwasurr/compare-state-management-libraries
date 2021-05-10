import { atom } from 'jotai';
import { atomWithQuery } from 'jotai/query';
import getTodos from '../../api/todo';
import { Todo } from '../../interface/todo';

export const todoAtom = atom<Todo[]>([]);

// does not supported async atom on nextjs
export const fetchAtom = atom(async () => {
  if (typeof window === 'undefined') {
    return [];
  }
  const data = await getTodos();
  return data;
});

// does not supported async atom on nextjs
const todosAsyncAtom = atomWithQuery(() => ({
  queryKey: 'todos',
  queryFn: async () => getTodos()
}));

export const addTodoAtom = atom<Todo[], string>(
  (get) => get(todoAtom),
  (get, set, _arg) =>
    set(todoAtom, () => {
      const todos = get(todoAtom);
      let i = 1;
      todos.forEach(({ id }) => {
        if (id >= i) i = id + 1;
      });
      const newId = todos.length === 0 ? 1 : i;
      return [...todos, { id: newId, title: _arg }];
    })
);

export const removeTodoAtom = atom<Todo[], number>(
  (get) => get(todoAtom),
  (_, set, _arg) =>
    set(todoAtom, (prev) => prev.filter((todo) => todo.id !== _arg))
);

export const todoSearchTextAtom = atom('');

// derived atom
export const filteredTodoAtom = atom<Todo[]>((get) => {
  const todoList = get(todoAtom);
  const searchText = get(todoSearchTextAtom);

  return todoList.filter((todo) => todo.title.includes(searchText));
});
