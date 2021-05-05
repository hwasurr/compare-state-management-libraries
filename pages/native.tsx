import React, { createContext, useState } from 'react';
import Layout from '../components/Layout';
import { searchContext } from '../libraries/native/context/searchContext';
import useInputValue from '../libraries/native/hook/useInputValue';
import useTodos from '../libraries/native/hook/useTodo';
import TodoList from '../libraries/native/TodoList';
import TodoOverview from '../libraries/native/TodoOverview';
import TodoSearchBox from '../libraries/native/TodoSearchBox';

function Native(): React.ReactElement {
  const { todos, addTodo, removeTodo } = useTodos();

  const { searchValue, onSearchChange } = useInputValue();

  return (
    <Layout>
      <searchContext.Provider value={searchValue}>
        <TodoSearchBox onChange={onSearchChange} />

        <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />

        <TodoOverview todos={todos} />
      </searchContext.Provider>
    </Layout>
  );
}

export default Native;
