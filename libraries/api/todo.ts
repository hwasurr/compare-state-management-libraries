import { Todo } from '../interface/todo';

export default async function getTodos(): Promise<Todo[]> {
  const res = await fetch('http://localhost:3000/api/todos');
  const body = await res.json();
  return body;
}

export async function addTodo(title: string) {
  const res = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify({ title }),
  });

  return res.json();
}

export async function removeTodo(id: number) {
  const res = await fetch('/api/todos?id=' + id, { method: 'DELETE' });
  return res.json();
}
