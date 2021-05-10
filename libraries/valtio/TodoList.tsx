import { useSnapshot } from 'valtio';
import { fetchTodos, todoProxyState } from './proxies/todoProxy';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useEffect } from 'react';

function TodoList(): React.ReactElement {
  const todoSnapshot = useSnapshot(todoProxyState);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos])

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
        {todoSnapshot.todos
        .filter((todo) => todo.title.includes(todoSnapshot.searchValue))
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </section>
    </div>
  );
}

export default TodoList;