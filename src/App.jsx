import React from 'react';
import './input.css';
import Button from './Button.jsx';
import IntroBox from './IntroBox.jsx';
import Animation from './Animation.jsx';
import Flex from './Flex.jsx';

const App = () => {
  return (
    <div className="flex-col space-y-10">
      <div className="border-solid rounded-full m-auto w-1/2 p-100">
        <h1 className="text-center text-purple-700 text-3xl font-bold">
          TailwindCSS Demo
        </h1>
      </div>
      <Button />
      <IntroBox />
      <Animation />
      <Flex />
    </div>
  );
};

export default App;