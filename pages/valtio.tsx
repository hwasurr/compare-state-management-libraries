import React from 'react';
import Layout from '../components/Layout';
import TodoOverview from '../libraries/valtio/TodoOverview';
import TodoList from '../libraries/valtio/TodoList';
import TodoSearchBox from '../libraries/valtio/TodoSearchBox';

export default function Valtio(): React.ReactElement {
  return (
    <Layout>
      
      <TodoSearchBox />

      <TodoList />

      <TodoOverview />
      
    </Layout>
  )
}