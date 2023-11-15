// Hello.jsx
import React from 'react';
import { Helmet } from 'react-helmet';


const Hello = () => {
  return (
    <div>
      <Helmet>
        <title>Hello Page</title>
      </Helmet>
      Hello
    </div>
  );
};

export default Hello;
