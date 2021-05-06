import React, { useEffect } from 'react';
import useTodoStore from './store/useTodoStore';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function TodoList(): React.ReactElement {
  const { todos, fetchAllTodos, todoSearchText } = useTodoStore();

  useEffect(() => {
    fetchAllTodos();
  }, [fetchAllTodos])

  return (
    <div style={{ margin: '0 auto', maxWidth: 960 }}>
      <h1 style={{ textAlign: 'center' }}>TODO LIST</h1>

      <TodoForm />

      <section
        style={{
          border: '1px solid #ddd',
          padding: 16,
        }}
      >
        {todos
          .filter((todo) => todo.title.includes(todoSearchText))
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </section>
    </div>
  );
}

export default TodoList