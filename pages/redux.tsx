import React from 'react';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import TodoList from '../libraries/redux/TodoList';
import todoStore from '../libraries/redux/store';
import TodoOverview from '../libraries/redux/TodoOverview';
import TodoSearchBox from '../libraries/redux/TodoSearchBox';

function redux(): React.ReactElement {
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

export default redux;
