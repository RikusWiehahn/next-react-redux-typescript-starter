import * as React from 'react';
import Layout from '../components/templates/Layout';
import { LandingPage } from '../components/templates/LandingPage';

const Home = () => {
  return (
    <Layout title="Home">
      <LandingPage />
    </Layout>
  );
};

export default Home;
