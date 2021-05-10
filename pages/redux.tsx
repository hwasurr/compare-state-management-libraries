import React from 'react';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import TodoList from '../libraries/redux-toolkit/TodoList';
import todoStore from '../libraries/redux-toolkit/store';
import TodoOverview from '../libraries/redux-toolkit/TodoOverview';
import TodoSearchBox from '../libraries/redux-toolkit/TodoSearchBox';

function Redux(): React.ReactElement {
  return (
    <Provider store={todoStore}>
      <Layout>
        <TodoSearchBox />

        <TodoList />

        <TodoOverview />
      </Layout>
    </Provider>
  );
}

export default Redux;
