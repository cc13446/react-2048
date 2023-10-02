import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/board'

import './index.css'

const App = () => {
  return (
    <div className="h-full w-full flex justify-center items-center bg-gradient-to-r from-cyan-800 to-emerald-600">
      <div className="h-fit w-[440px] flex justify-center items-center flex-col" >
        <h1 className="text-5xl text-white mb-10">React 2048</h1>
        <Board />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

