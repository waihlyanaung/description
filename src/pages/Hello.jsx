// Hello.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const Hello = () => {
  return (
    <div>
      <Helmet>
        <title>Hello Page</title>
        <meta name="description" content="This is the Hello page" />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Hello Page" />
        <meta property="og:description" content="This is the Hello page" />
        <meta property="og:image" content="URL_TO_AN_IMAGE" />
      </Helmet>
      Hello
    </div>
  );
};

export default Hello;
