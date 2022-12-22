import React from 'react';

const Flex = () => {
  return (
    <div className="flex flex-nowrap space-x-10">
      <div className="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-2xl gap">Flex 01</div>
      <div className="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-2xl gap">Flex 02</div>
      <div className="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-2xl gap">Flex 03</div>
    </div>
  )
};

export default Flex;