// Hello.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Hello = () => {
  const [metaTags, setMetaTags] = useState({
    title: 'Hello Page',
    description: 'This is the Hello page description.',
  });

  useEffect(() => {
    // Update meta tags when the component mounts
    setMetaTags({
      title: 'Hello Page',
      description: 'This is the Hello page description.',
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
      </Helmet>
      <Link to="/">
        <button className="bg-red-500 hover:bg-blue-700 ml-11 text-white font-bold py-2 px-4 rounded mt-4">
          Rev Page
        </button>
      </Link>
      Hello
    </div>
  );
};

export default Hello;
