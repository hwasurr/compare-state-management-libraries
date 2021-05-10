import create from 'zustand';
import getTodos, { addTodo, removeTodo } from '../../api/todo';
import { Todo } from '../../interface/todo';

export type TodoState = {
  todos: Todo[];
  fetchAllTodos: () => void;
  addTodo: (todoTitle: Todo['title']) => void;
  removeTodo: (targetId: Todo['id']) => void;
  // -> todo search text
  todoSearchText: string;
  changeSearchText: (t: string) => void;

  // -> statistics fields
  stats: {
    length: number;
    includeA: Todo[];
  };
};

const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  fetchAllTodos: async () => set({ todos: await getTodos() }),
  addTodo: async (todoTitle) => {
    const newTodo = await addTodo(todoTitle);
    return set((state) => ({ todos: [...state.todos, newTodo] }));
  },
  removeTodo: async (targetId) => {
    const isRemoveSuccess = await removeTodo(targetId);
    if (isRemoveSuccess)
      return set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== targetId),
      }));
  },
  todoSearchText: '',
  changeSearchText: (searchText) => {
    const { todos } = get();
    const filtered = todos.filter((todo) => todo.title.includes(searchText));
    set({
      stats: {
        length: filtered.length,
        includeA: filtered.filter((todo) =>
          todo.title.toLowerCase().includes('a')
        ),
      },
    });
    return set({ todoSearchText: searchText });
  },
  stats: {
    length: 0,
    includeA: [],
  },
}));

export default useTodoStore;
