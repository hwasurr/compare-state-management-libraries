import TodoItem from './TodoItem';

function TodoList(): React.ReactElement {
  const todos = [{ id: 1, title: 'test', }];

  return (
    <div style={{ margin: '0 auto', maxWidth: 960 }}>
      <h1 style={{ textAlign: 'center' }}>TODO LIST</h1>

      {/* <TodoForm addTodo={addTodo} /> */}

      <section
        style={{
          border: '1px solid #ddd',
          padding: 16,
        }}
      >
        {todos
          // .filter((todo) => todo.title.includes(searchContextValue))
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </section>
    </div>
  );
}

export default TodoList;
