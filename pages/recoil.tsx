import React from 'react';
import { RecoilRoot } from 'recoil';
import Layout from '../components/Layout';
import TodoList from '../libraries/recoil/TodoList';
import TodoOverview from '../libraries/recoil/TodoOverview';
import TodoSearchBox from '../libraries/recoil/TodoSearchBox';

function Recoil(): React.ReactElement {
  return (
    <RecoilRoot>
      <Layout>
        <TodoSearchBox />

        <TodoList />

        <TodoOverview />
      </Layout>
    </RecoilRoot>
  );
}

export default Recoil;
