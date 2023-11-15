// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/hello">
        <button className="bg-red-500 hover:bg-blue-700 ml-11 text-white font-bold py-2 px-4 rounded mt-4">
          Next Page
        </button>
      </Link>
      <div className="font-pacifico">What is Lorem Ipsum?</div>
      <div className="mt-9 font-saira-condensed">Lorem Ipsum is</div>
    </div>
  );
};

export default Home;
