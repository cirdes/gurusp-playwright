import React from 'react';
import BaseLayout from './BaseLayout';
import Beers from './beers/Beers';

const Home = () => {
  return (
    <BaseLayout component={Beers} />
  );
};

export default Home;