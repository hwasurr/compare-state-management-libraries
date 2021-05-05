import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import filteredTodoListState from './atoms/filteredTodoList';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function TodoList(): React.ReactElement {
  const todosLoadable = useRecoilValueLoadable(filteredTodoListState);

  return (
    <div style={{ margin: '0 auto', maxWidth: 960 }}>
      <h1 style={{ textAlign: 'center' }}>TODO LIST</h1>

      <TodoForm />

      <section style={{ border: '1px solid #ddd', padding: 16 }}>
        {todosLoadable.state === 'hasValue' &&
          todosLoadable.contents.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </section>
    </div>
  );
}

export default TodoList;
