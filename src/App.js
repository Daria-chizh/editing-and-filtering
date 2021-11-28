import React from 'react';

import ServiceFields from './components/ServiceFields';
import ServiceList from './components/ServiceList';
import ServiceFilter from "./components/ServiceFilter";

function App() {
  return (
    <>
      <ServiceFilter />
      <ServiceFields />
      <ServiceList />
    </>
  );
}

export default App;
