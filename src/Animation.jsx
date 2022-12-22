import React from 'react';

const Animation = () => {
  return (
    <div className="flex items-center justify-center">
      <button type="button" className="hover:animate-spin inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed">
        Bouncy or Spinny
      </button>
    </div>
  )
};

export default Animation;