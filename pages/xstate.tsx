import React from 'react';
import Layout from '../components/Layout';
import TodoList from '../libraries/xstate/TodoList';

function Redux(): React.ReactElement {
  return (
      <Layout>

        <TodoList />

      </Layout>
  );
}

export default Redux;
