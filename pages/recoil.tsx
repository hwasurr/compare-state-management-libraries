import React from 'react';
import Layout from '../components/Layout';
import TodoList from '../libraries/recoil/TodoList';
import TodoOverview from '../libraries/recoil/TodoOverview';
import TodoSearchBox from '../libraries/recoil/TodoSearchBox';

function Recoil(): React.ReactElement {
  return (
    <Layout>
      <TodoSearchBox />

      <TodoList />

      <TodoOverview />
    </Layout>
  );
}

export default Recoil;
