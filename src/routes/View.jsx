// View.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Hello from '../pages/Hello';
import { Helmet } from 'react-helmet';

const View = () => {
  return (
    <>
      <Helmet>
        <title>Vite + React</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </>
  );
};

export default View;
