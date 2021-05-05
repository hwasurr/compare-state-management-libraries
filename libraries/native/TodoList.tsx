import { useContext } from 'react';
import { searchContext } from './context/searchContext';
import useTodos, { Todo } from './hook/useTodo';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  addTodo: ReturnType<typeof useTodos>['addTodo'];
  removeTodo: ReturnType<typeof useTodos>['removeTodo'];
}
function TodoList({
  todos,
  addTodo,
  removeTodo,
}: TodoListProps): React.ReactElement {
  const searchContextValue = useContext(searchContext);
  return (
    <div style={{ margin: '0 auto', maxWidth: 960 }}>
      <h1 style={{ textAlign: 'center' }}>TODO LIST</h1>

      <TodoForm addTodo={addTodo} />

      <section
        style={{
          border: '1px solid #ddd',
          padding: 16,
        }}
      >
        {todos
          .filter((todo) => todo.title.includes(searchContextValue))
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
          ))}
      </section>
    </div>
  );
}

export default TodoList;
