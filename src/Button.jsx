import React from 'react';

const Button = () => {
  return (
    <div className="m-auto w-1/2 flex justify-content p-100">
      <button className="m-auto w-1/2  relative px-4 py-1 text-sm text-stone-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 bg-red-500">Expand Width</button>
    </div>
  );
};

export default Button;