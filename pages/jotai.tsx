import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import TodoOverview from '../libraries/jotai/TodoOverview';
import TodoSearchBox from '../libraries/jotai/TodoSearchBox';

const TodoList = dynamic(() => import('../libraries/jotai/TodoList'));

export default function Jotai(): React.ReactElement {
  return (
    <Layout>
      <TodoSearchBox />

      <TodoList />

      <TodoOverview />
    </Layout>
  );
}
