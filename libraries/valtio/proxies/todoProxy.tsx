import React from "react";
import { proxy } from "valtio";
import { addComputed } from 'valtio/utils';
import getTodos, { addTodo, removeTodo } from "../../api/todo";
import { Todo } from "../../interface/todo";

export type TodoProxy = {
  todos: Todo[];
  searchValue: string;
}

export const todoProxyState: TodoProxy = proxy<TodoProxy>({
  todos: [],
  searchValue: '',
});

export const fetchTodos = async (): Promise<void> => {
  const data = await getTodos();
  todoProxyState.todos = data;
}

export const _addTodo = async (title: string): Promise<void> => {
  const newTodo = await addTodo(title);
  // You can mutate the state directly
  todoProxyState.todos.push(newTodo);
}

export const _removeTodo = async (id: number): Promise<void> => {
  const isSuccess = await removeTodo(id);
  if (isSuccess) {
    todoProxyState.todos = todoProxyState.todos.filter((todo) => todo.id !== id);
  } else {
    // ...
  }
}

export const onSearchFieldChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  todoProxyState.searchValue =  e.target.value;
}