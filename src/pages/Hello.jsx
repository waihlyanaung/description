import React from 'react'
import { Link } from 'react-router-dom'

const Hello = () => {
  return (
    <div>
        <Link to="/">
        <button className="bg-red-500 hover:bg-blue-700 ml-11 text-white font-bold py-2 px-4 rounded mt-4">
          Rev Page
        </button>
      </Link>
        Hello
        </div>
  )
}

export default Hello