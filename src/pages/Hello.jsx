// Hello.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const Hello = () => {
  return (
    <div>
      <Helmet>
        <title>Hello Page</title>
        <meta name="description" content="This is the Hello page" />
      </Helmet>
      Hello
    </div>
  );
};

export default Hello;
