import React from 'react';

import Layout from './layouts/PublicLayout';
import { MainRouter } from './router/MainRouter';
const App = () => {


  return (
    <>
      <Layout>
        <MainRouter />
      </Layout>
    </>
  );
};

export default App;
