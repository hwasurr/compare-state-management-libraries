import { useEffect, useState } from 'react';
import getTodos, {
  addTodo as _addTodo,
  removeTodo as _removeTodo,
} from '../../api/todo';
import { Todo } from '../../interface/todo';

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data);
    });
  }, []);

  async function addTodo(title: string) {
    const data = await _addTodo(title);
    if (data) {
      setTodos([...todos, data]);
    }
  }

  async function removeTodo(targetId: Todo['id']) {
    const isSuccess = await _removeTodo(targetId);
    if (isSuccess) {
      setTodos(todos.filter((todo) => todo.id !== targetId));
    }
  }

  return { todos, setTodos, addTodo, removeTodo };
};
export default useTodos;
