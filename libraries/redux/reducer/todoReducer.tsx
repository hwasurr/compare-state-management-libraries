import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import getTodos, {
  addTodo as apiAddTodo,
  removeTodo as apiRemoveTodo,
} from '../../api/todo';
import { Todo } from '../../interface/todo';

export type TodoState = {
  loading: boolean;
  todos: Todo[];
  searchText?: string;
};

export const fetchTodos = createAsyncThunk('todoList/fetchTodos', async () => {
  const data = await getTodos();
  return data;
});

export const addTodo = createAsyncThunk(
  'todoList/addTodo',
  async (title: Todo['title']) => {
    const data = await apiAddTodo(title);
    return data;
  }
);

export const removeTodo = createAsyncThunk(
  'todoList/removeTodo',
  async (id: Todo['id']) => {
    const isSuccess = await apiRemoveTodo(id);
    return isSuccess;
  }
);

const initialState: TodoState = {
  loading: false,
  todos: [],
  searchText: '',
};
const todoSlice = createSlice({
  name: 'todoList',
  initialState: initialState,
  reducers: {
    changeSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload.toLowerCase();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos = state.todos.filter((todo) => todo.id !== action.meta.arg);
      }
    });
  },
});

export const { changeSearchText } = todoSlice.actions;

export default todoSlice.reducer;
