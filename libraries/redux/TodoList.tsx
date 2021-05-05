import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './reducer/todoReducer';
import { AppDispatch, RootState } from './store';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function TodoList(): React.ReactElement {
  const todoState = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [fetchTodos]);

  return (
    <div>
      <TodoForm />
      {todoState.todos
        .filter((todo) => todo.title.includes(todoState.searchText))
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
}

export default TodoList;
