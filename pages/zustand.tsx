import React from 'react';
import Layout from '../components/Layout';
import TodoList from '../libraries/zustand/TodoList';
import TodoOverview from '../libraries/zustand/TodoOverview';
import TodoSearchBox from '../libraries/zustand/TodoSearchBox';

function zustand(): React.ReactElement {
  return (
    <Layout>
      <TodoSearchBox />

      <TodoList />

      <TodoOverview />
    </Layout>
  );
}

export default zustand;
